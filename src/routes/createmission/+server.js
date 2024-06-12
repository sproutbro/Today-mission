import { json } from '@sveltejs/kit';
import { executeQuery } from "$lib/db.js";

const checkValues = [];
const res = [];
const SQL = [];

function createSQL(i, values) {
    SQL[0] = `
    INSERT INTO "Mission" ("missionName", "userId")
        VALUES
            ($1, $2)
            RETURNING id;
`
    SQL[1] = `
    INSERT INTO "MissionCheck" ("missionId", "successMessage", "checkType")
        VALUES
            ${values};
    `
    return SQL[i];
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const { $checkTypeArray, mission_name } = await event.request.json();

    // Insert Mission
    const params = [mission_name, 'no_user'];
    res[0] = await executeQuery(createSQL(0), params);

    // Insert MissionCheck
    const missionId = res[0].rows[0].id;
    $checkTypeArray.forEach((e) => {
        checkValues.push(`(${missionId}, '${e.success_message ? e.success_message : ""}', '${e.check_type}')`)
    });
    res[1] = await executeQuery(createSQL(1, checkValues));

    return json({ status: 201, message: "Success" });
}

