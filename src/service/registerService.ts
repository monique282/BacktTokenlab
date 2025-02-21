import bcrypt from 'bcrypt';
import { invalidCredentialsError } from '../erros/invalidCredentialsError';
import { registerRepository } from '../repositories/registerRepository';

async function registerPost( name: string, password: string, cpf: string, email: string ) {
    const registerEmail = await registerRepository.searchingEmail(email);
    if (registerEmail) {
        throw invalidCredentialsError("Email já cadastrado");
    }

    const registerCpf = await registerRepository.searchingCpf(cpf);
    if (registerCpf) {
        throw invalidCredentialsError("CPF já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const register = await registerRepository.registerPost(name, hashedPassword, cpf, email);

    return register;
}

export const RegisterService = {
    registerPost
};