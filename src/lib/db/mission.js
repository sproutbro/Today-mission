import { executeQuery } from "$lib/db.js";

// Insert mission
async function insertMission(missionName, userId) {
    const SQL = `
        INSERT INTO "Mission" 
            ("missionName", "userId")
        VALUES
            ($1, $2) RETURNING *;`;
    const params = [missionName, userId];

    try {
        const result = await executeQuery(SQL, params);
        console.log('Mission inserted:', result.rowCount);
        return result.rows[0];
    } catch (error) {
        console.error('Error inserting mission:', error);
        throw error;
    }
}

// Insert missioncheck
async function insertMissioncheck(values) {
    const SQL = `
        INSERT INTO "MissionCheck" 
            ("missionId", "successMessage", "checkType")
        VALUES
            ${values};`;
    try {
        return await executeQuery(SQL);
    } catch (error) {
        console.error('Error inserting mission:', error);
        throw error;
    }
}

export { insertMission, insertMissioncheck }