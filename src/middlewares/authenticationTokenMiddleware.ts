import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { unauthorizedError } from '../erros/unauthorizedRrror';
import { authenticationRepository } from '../repositories/authenticationTokenRepository';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) throw unauthorizedError();

        const token = authHeader.split(' ')[1];
        if (!token) throw unauthorizedError();

        const session = await authenticationRepository.findSession(token);
        if (!session) throw unauthorizedError();

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET não está definido!");
        };

        const { userId } = jwt.verify(token, jwtSecret) as JWTPayload;
        req.userId = userId;

        next(); 
    } catch (error) {
        next(error); 
    };
};

export type AuthenticatedRequest = Request & {
    userId?: number; 
};

type JWTPayload = {
    userId: number;
};
