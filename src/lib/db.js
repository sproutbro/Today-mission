import { env } from "$env/dynamic/private";
import pkg from 'pg';
const { Pool } = pkg;

// 데이터베이스 연결 풀 설정
const createPool = new Pool({
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_DATABASE,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
});

async function executeQuery(SQL, params) {
    const pool = await createPool.connect();
    try {
        return await pool.query(SQL, params);
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    } finally {
        pool.release();
    }
}

export { executeQuery };