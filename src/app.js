import express from 'express';
import './database/mongo';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import * as routes from './routes';
import handleErrors from './utils/error-handling/errorHandler';
import { ReC_Continue, ReS } from './utils/response';
import { COOKIE_TYPE, RETURN_CODE } from './utils/constants';
import { withAuth } from './utils/middlewares/authentication';
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://my-site-fe.herokuapp.com'],
		credentials: true,
	})
);
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(cookieParser());
app.use(helmet());

// Generals Routes
app.get('/', (req, res) => res.send({ message: 'WORKING' }));
app.get('/is-login', withAuth, (req, res) => {
	return ReS(res, 'Logged In', true, RETURN_CODE.SUCCESS);
});
app.get('/logout', withAuth, (req, res) => {
	ReC_Continue(res, COOKIE_TYPE.TOKEN, '', true);
	return ReS(res, 'Logged Out', true, RETURN_CODE.SUCCESS);
});

// Routes
app.use('/my-personal-details', routes.myPersonalDetailsRoutes);
app.use('/my-work-experiences', routes.myWorkExperienceRoutes);
app.use('/my-clients', routes.myClientRoutes);
app.use('/my-client-projects', routes.myClientProjectsRoutes);
app.use('/my-skills', routes.mySkillsRoutes);
app.use('/my-contact-details', routes.myContactDetailsRoutes);
app.use('/visitor', routes.visitorRoutes);

// Error Handler
app.use(handleErrors);

export default app;

// TODO cast error for mongoose models when wrong type data given ex string when array of string expected
