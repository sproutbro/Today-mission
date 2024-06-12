/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
    const session = event.cookies.get("session");

    console.log(session);

    return {
        // session,
    }
}