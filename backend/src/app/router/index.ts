import { Router } from 'express';
import { ResponseRoute } from '../modules/response/response.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/response',
        route: ResponseRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
