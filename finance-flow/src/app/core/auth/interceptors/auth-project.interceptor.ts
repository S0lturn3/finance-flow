import { HttpInterceptorFn } from '@angular/common/http';

export const authProjectInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
