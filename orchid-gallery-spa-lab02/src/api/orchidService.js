let orchidCache = null;
let cacheTime = 0;
const CACHE_DURATION = 30_000; // 30s TTL

async function fetchOrchids() {
  const response = await fetch("/orchids.json", {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: Failed to load orchids.json`);
  }
  return response.json();
}

const orchidService = {
  async getOrchids(force = false) {
    const now = Date.now();
    const validCache = orchidCache && now - cacheTime < CACHE_DURATION;

    // Cache hit
    if (!force && validCache) {
      console.log("[Cache HIT] Returning data from module cache");
      return orchidCache;
    }

    // Cache miss or force reload
    console.log(
      "[Cache MISS / FORCE] Sending HTTP Fetch request to /orchids.json",
    );
    const data = await fetchOrchids();
    orchidCache = data;
    cacheTime = now;
    return data;
  },

  clearCache() {
    orchidCache = null;
    cacheTime = 0;
  },
};

export default orchidService;
