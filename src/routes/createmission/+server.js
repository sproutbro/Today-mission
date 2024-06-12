import { json } from '@sveltejs/kit';
import { insertMission, insertMissioncheck } from "$lib/db/mission.js";

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    // User input data
    const { $checkTypeArray, mission_name } = await event.request.json();

    try {
        // Insert mission
        const newMission = await insertMission(mission_name, "no_user");
        console.log('New mission:', newMission);

        // Insert missioncheck
        const missionId = newMission.id;
        const values = createCheckValues(missionId, $checkTypeArray);
        const result = await insertMissioncheck(values);
        console.log('Missioncheck inserted: ', result.rowCount);

        return json({ status: 201, message: "미션 만들기가 완료되었습니다." })
    } catch (error) {
        console.error('Error in create mission server:', error);
    }

}

function createCheckValues(missionId, checkTypeArray) {
    const values = []
    checkTypeArray.forEach((e) => {
        values.push(`(${missionId}, '${e.success_message ? e.success_message : ""}', '${e.check_type}')`)
    });
    return values;
}