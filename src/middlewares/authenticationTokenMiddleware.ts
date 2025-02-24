import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { unauthorizedError } from '../erros/unauthorizedRrror';
import { authenticationRepository } from '../repositories/authenticationTokenRepository';
import dotenv from 'dotenv';
dotenv.config();

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw unauthorizedError();

    const token = authHeader.split(' ')[1];
    if (!token) throw unauthorizedError();

    const session = await authenticationRepository.findSession(token);
    if (session) {
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined');
        }

        const payload = jwt.verify(token, jwtSecret) as jwt.JwtPayload;

        if (!payload || typeof payload !== 'object' || !('userId' in payload)) {
            throw unauthorizedError();
        }

        req.userId = payload.userId as number;
    }

    if (!session) throw unauthorizedError();
    next();
}

export type AuthenticatedRequest = Request & {
    userId?: number;
    representativeId?: number;
};

type JWTPayload = jwt.JwtPayload & {
    userId: number;
};
