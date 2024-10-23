export const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("API URL is not set");
}
