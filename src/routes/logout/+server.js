import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET(event) {
    event.cookies.delete("jwtToken", { path: "/" });
    redirect(307, '/');
}