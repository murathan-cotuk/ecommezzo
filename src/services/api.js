const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export async function fetchData(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  return res.json();
}