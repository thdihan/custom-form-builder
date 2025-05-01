import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(
    cors({
        origin: [
            'https://listyourhotel.genustravels.com/',
            'https://hoteldata.genustravels.com/',
            'http://localhost:3000',
        ],
        credentials: true,
    }),
);

// application routes
app.use('/api', router);

// app.use(globalErrorHandler);

app.use('*', (req: any, res: any) => {
    res.json({
        status: 'fail',
        message: `This route is not defined`,
    });
});

export default app;
