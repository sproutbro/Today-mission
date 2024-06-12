import { env } from "$env/dynamic/private";
import pkg from 'pg';
const { Pool } = pkg;

// 데이터베이스 연결 풀 설정
const pool = new Pool({
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_DATABASE,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
});

async function connect() {
    try {
        return await pool.connect();
    } catch (err) {
        console.error('Error connecting to PostgreSQL database', err);
    }
}

async function executeQuery(SQL, params) {
    const pool = await connect();
    try {
        return await pool.query(SQL, params);
    } catch (error) {
        console.error(error)
        return error
    } finally {
        pool.release();
    }
}

export { connect, executeQuery };