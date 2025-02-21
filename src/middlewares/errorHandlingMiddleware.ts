import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export type AppError = Error & {
    type: string;
};

export default function errorHandlingMiddleware(
    error: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error.name === 'NotFound') {
        return res.status(httpStatus.NOT_FOUND).send('NotFound');
    }

    if (error.name === 'Conflict') {
        return res.status(httpStatus.CONFLICT).send('Conflict');
    }

    if (error.name === 'IdNotValidError') {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.name === "InvalidCredentialsError") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.name === 'UnauthorizedError') {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    }

    if (error.name === 'Errorwhenuploading') {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.name === 'InvalidDataError') {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
}