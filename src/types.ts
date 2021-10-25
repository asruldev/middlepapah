import type * as express from 'express';

export interface Request extends express.Request {}
export interface Response extends express.Response {}
export interface NextFunction extends express.NextFunction {}
export interface UserRole extends Request {
  user: any;
}
export type Role = string | number;
