import { Pool } from 'pg';

// Create a pool of connections using environment variables
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Export the pool for use in API routes or server-side functions
export default pool;