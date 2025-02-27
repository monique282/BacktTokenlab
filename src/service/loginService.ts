import * as jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { invalidCredentialsError } from "../erros/invalidCredentialsError";
import { sessionRepository } from "../repositories/sessionRepository";
import { loginRepository } from "../repositories/loginRepository";

async function loginPost(mode: string, password: string ) {
    const login = await loginRepository.findByEmailPassword(mode);

    if (!login) {
        throw invalidCredentialsError("Email/CPF não cadastrado");
    };

    const passwordMatch = await bcrypt.compare(password, login.password);
    if (!passwordMatch) {
        throw invalidCredentialsError("Senha não corresposnde");
    };

    const token = jwt.sign({ userId: login.id, email: login.email }, process.env.JWT_SECRET as string, { expiresIn: '2d' });
    const session = await sessionRepository.sessionToken(token, login.id);
    const list = {
        email: login.email,
        name: login.name,
    };
    return [list, session];
}

export const LoginService = {
    loginPost
};