import { ApplicationError } from '../protocols';

export function invalidCredentialsError(message: string): ApplicationError {
    return {
        name: 'InvalidCredentialsError',
        message,
    };
}