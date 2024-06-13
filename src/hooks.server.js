import { parse } from 'cookie';
import { env } from "$env/dynamic/private";
import jwt from 'jsonwebtoken';
import os from 'os';

export async function handle({ event, resolve }) {
    const cookies = parse(event.request.headers.get('cookie') || '');

    if (cookies.jwtToken) {
        const jwtToken = cookies.jwtToken.split(" ")[1];

        try {
            const user = jwt.verify(jwtToken, env.SECRET_KEY);
            event.locals.user = user;
        } catch (err) {
            console.error('잘못된 토큰:', err);
        }
    } else {
        // 비회원 아이피로 로그인
        const nets = os.networkInterfaces();
        let clientIp = "";

        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                if (net.family === "IPv4" && !net.internal) {
                    if (!clientIp) {
                        clientIp = net.address;
                    }
                }
            }
        }

        let stringIp = "";
        clientIp.split('.').forEach((v) => {
            stringIp += String.fromCharCode(Number(v) + 45032);
        })
        event.locals.user = { id: stringIp };
    }

    return await resolve(event);
}