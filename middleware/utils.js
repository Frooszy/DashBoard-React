import jwt from 'jsonwebtoken';
import { getCookie } from 'cookies-next';


const SECRET_KEY = process.env.JWT_KEY;
const jwtToken = getCookie('USER_TOKEN')

export function verifyToken() {
    try {
        return jwt.verify(jwtToken, SECRET_KEY);
    } catch (e) {
        console.log('e:', e);
        return null;
    }
}