import { executeQuery } from "$lib/db.js";

// Insert user
async function insertUser(id, password) {
    const SQL = `
    INSERT INTO "User" 
        ("id", "password")
    VALUES
        ($1, $2) RETURNING *;`;
    const params = [id, password];
    try {
        const result = await executeQuery(SQL, params);
        console.log('User inserted:', result.rowCount);
        return result.rows[0];
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}

// get user by id
async function getUserbyId(id) {
    const SQL = `
        SELECT * 
            FROM "User" 
        WHERE id = '${id}';`;
    try {
        const result = await executeQuery(SQL);
        if (result.rows.length) {
            return result.rows[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
}

export { insertUser, getUserbyId }