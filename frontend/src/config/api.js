// API base URL configuration
// In development: uses proxy from package.json (localhost:5782)
// In production: uses REACT_APP_API_BASE_URL from Vercel environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export default API_BASE_URL;
