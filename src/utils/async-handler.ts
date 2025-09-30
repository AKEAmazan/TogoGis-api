import { NextFunction, Request, Response } from "express";
import type { ParamsDictionary } from "express-serve-static-core";
import type { ParsedQs } from "qs";

export function asyncHandler<
  P = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  LocalsObject extends Record<string, unknown> = Record<string, unknown>
>(
  function_: (
    req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObject>,
    res: Response<ResBody, LocalsObject>
  ) => Promise<void>
): (
  req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObject>,
  res: Response<ResBody, LocalsObject>,
  next: NextFunction
) => Promise<void> {
  return async function (
    req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObject>,
    res: Response<ResBody, LocalsObject>,
    next: NextFunction
  ): Promise<void> {
    try {
      await function_(req, res);
    } catch (error) {
      next(error);
    }
  };
}
