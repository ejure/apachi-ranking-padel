/**
 * APACHI Ranking API Service Layer
 * 
 * Provides an enterprise-grade API client ready to connect to any backend
 * (Node/Express, Laravel, Django, FastAPI, Supabase, Firebase, etc.).
 * Includes mock simulation with realistic latency, filtering, sorting,
 * and live developer inspection.
 */

import { INITIAL_PLAYERS, CATEGORIES, EVENTS_CALENDAR } from '../data/mockRankingData';

// API Configuration State
let apiConfig = {
  mode: 'mock', // 'mock' | 'custom'
  baseUrl: 'https://api.apachi.cl/v1',
  latencyMs: 300, // Simulated network delay
  subscribers: new Set(),
  lastActivity: null,
};

// Local in-memory store for mutations
let playersStore = [...INITIAL_PLAYERS];

export const getApiConfig = () => ({ ...apiConfig });

export const setApiConfig = (newConfig) => {
  apiConfig = { ...apiConfig, ...newConfig };
  notifySubscribers();
};

export const subscribeToApiActivity = (callback) => {
  apiConfig.subscribers.add(callback);
  return () => apiConfig.subscribers.delete(callback);
};

const notifySubscribers = () => {
  apiConfig.subscribers.forEach((cb) => {
    try {
      cb(apiConfig.lastActivity, getApiConfig());
    } catch (e) {
      console.error('Subscriber error:', e);
    }
  });
};

const recordActivity = (activity) => {
  apiConfig.lastActivity = {
    timestamp: new Date().toISOString(),
    ...activity,
  };
  notifySubscribers();
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch rankings with filtering, search, sorting and pagination
 * Endpoint equivalent: GET /api/v1/rankings
 */
export async function fetchRankings({
  category = 'ALL',
  gender = 'ALL', // 'ALL' | 'M' | 'F'
  search = '',
  sortBy = 'points', // 'points' | 'rank' | 'matchesPlayed' | 'wins' | 'winRate'
  sortOrder = 'desc', // 'asc' | 'desc'
  page = 1,
  limit = 10,
} = {}) {
  const queryParams = new URLSearchParams({
    category,
    gender,
    search,
    sortBy,
    sortOrder,
    page: String(page),
    limit: String(limit),
  });

  const fullUrl = `${apiConfig.baseUrl}/rankings?${queryParams.toString()}`;

  // If in custom mode, perform real network fetch
  if (apiConfig.mode === 'custom') {
    const startTime = performance.now();
    try {
      const response = await fetch(fullUrl, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      const elapsed = Math.round(performance.now() - startTime);

      recordActivity({
        method: 'GET',
        endpoint: `/rankings?${queryParams.toString()}`,
        status: response.status,
        latency: `${elapsed}ms`,
        source: 'Remote API',
        payload: null,
        response: data,
      });

      return data;
    } catch (error) {
      recordActivity({
        method: 'GET',
        endpoint: `/rankings?${queryParams.toString()}`,
        status: 500,
        latency: 'error',
        source: 'Remote API',
        error: error.message,
        response: { error: error.message },
      });
      throw error;
    }
  }

  // --- MOCK API IMPLEMENTATION ---
  await sleep(apiConfig.latencyMs);

  let filtered = [...playersStore];

  // Category filter
  if (category && category !== 'ALL') {
    filtered = filtered.filter((p) => p.category.toUpperCase() === category.toUpperCase());
  }

  // Gender filter
  if (gender && gender !== 'ALL') {
    filtered = filtered.filter((p) => p.gender.toUpperCase() === gender.toUpperCase());
  }

  // Search filter
  if (search && search.trim() !== '') {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.club.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    let valA = a[sortBy];
    let valB = b[sortBy];

    if (typeof valA === 'string') {
      return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }

    return sortOrder === 'asc' ? valA - valB : valB - valA;
  });

  // Calculate dynamic rank for current view
  filtered = filtered.map((player, idx) => ({
    ...player,
    rank: idx + 1,
  }));

  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * limit;
  const paginatedData = filtered.slice(startIndex, startIndex + limit);

  const response = {
    status: 'success',
    code: 200,
    meta: {
      total,
      page: currentPage,
      limit,
      totalPages,
      category,
      gender,
      sortBy,
      sortOrder,
      lastUpdated: new Date().toISOString(),
      governingBody: 'APACHI - Asociación Pádel Araucanía Chile',
      federationAffiliation: 'FEPACHI',
    },
    data: paginatedData,
  };

  recordActivity({
    method: 'GET',
    endpoint: `/rankings?${queryParams.toString()}`,
    status: 200,
    latency: `${apiConfig.latencyMs}ms`,
    source: 'Mock Provider (Ready for API)',
    payload: null,
    response,
  });

  return response;
}

/**
 * Fetch player profile by ID
 * Endpoint equivalent: GET /api/v1/players/:id
 */
export async function fetchPlayerById(id) {
  if (apiConfig.mode === 'custom') {
    const res = await fetch(`${apiConfig.baseUrl}/players/${id}`);
    return await res.json();
  }

  await sleep(apiConfig.latencyMs / 2);
  const player = playersStore.find((p) => p.id === id);

  if (!player) {
    const errorRes = { status: 'error', code: 404, message: 'Jugador no encontrado' };
    recordActivity({
      method: 'GET',
      endpoint: `/players/${id}`,
      status: 404,
      latency: `${apiConfig.latencyMs / 2}ms`,
      source: 'Mock Provider',
      response: errorRes,
    });
    throw new Error('Jugador no encontrado');
  }

  const response = {
    status: 'success',
    code: 200,
    data: player,
  };

  recordActivity({
    method: 'GET',
    endpoint: `/players/${id}`,
    status: 200,
    latency: `${apiConfig.latencyMs / 2}ms`,
    source: 'Mock Provider',
    response,
  });

  return response;
}

/**
 * Fetch categories metadata
 * Endpoint equivalent: GET /api/v1/categories
 */
export async function fetchCategories() {
  await sleep(100);
  return {
    status: 'success',
    data: CATEGORIES,
  };
}

/**
 * Fetch tournament calendar
 * Endpoint equivalent: GET /api/v1/events
 */
export async function fetchEventsCalendar() {
  await sleep(150);
  return {
    status: 'success',
    data: EVENTS_CALENDAR,
  };
}

/**
 * Register player in official circuit
 * Endpoint equivalent: POST /api/v1/players/register
 */
export async function registerPlayer(playerData) {
  await sleep(apiConfig.latencyMs);

  const newPlayer = {
    id: `p-${Date.now()}`,
    rank: playersStore.length + 1,
    previousRank: playersStore.length + 1,
    trend: 'stable',
    name: playerData.fullName,
    category: playerData.category || 'PRINCIPIANTES',
    gender: playerData.gender || 'M',
    points: 100, // Base registration points
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    winRate: 0,
    club: playerData.club || 'Club Pádel Temuco',
    city: playerData.city || 'Temuco',
    recentForm: [],
    image: null,
    hand: playerData.hand || 'Diestro',
    position: playerData.position || 'Drive',
    racket: playerData.racket || 'Por definir',
    email: playerData.email,
    dob: playerData.dob,
    phone: playerData.phone,
    registeredAt: new Date().toISOString(),
    featured: false,
    tournaments: [],
  };

  playersStore.push(newPlayer);

  const response = {
    status: 'success',
    code: 201,
    message: 'Jugador registrado exitosamente en el ranking oficial APACHI',
    data: newPlayer,
  };

  recordActivity({
    method: 'POST',
    endpoint: '/players/register',
    status: 201,
    latency: `${apiConfig.latencyMs}ms`,
    source: 'Mock Provider',
    payload: playerData,
    response,
  });

  return response;
}
