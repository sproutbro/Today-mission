import jwt from "jsonwebtoken";
import { env } from "$env/dynamic/private";

function createToken(id) {
    const jwtToken = jwt.sign({ id, isLogin: true }, env.SECRET_KEY, { expiresIn: '1h' });
    const option = {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
    };
    return {
        'jwtToken': `Bearer ${jwtToken}`,
        option
    }
};

export { createToken }