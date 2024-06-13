/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    console.log("Protected page : ", event.locals.user)
}