import { NextFunction, Request, Response, Role, UserRole } from "./types";

export const setPowered = (by: string = 'AsrulDev') => {
    return (req: Request, res: Response, next: NextFunction): void => {
        res.setHeader( 'X-Powered-By', by)
        next()
    }
};

export const ResponseData = (res: Response, data: any = null, message: any = "success", statusCode: number | string) => {
    return {
        Data: data,
        Message: message,
    }
}

export const HasRole = (role: Role) => {
    return (req: UserRole, res: Response, next: NextFunction) => {
        if (role !== req.user.role) {
            ResponseData(res, null, "failed", 403)
        }
        next()
    }
}

export default setPowered