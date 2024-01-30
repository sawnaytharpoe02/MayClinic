import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from 'config';
import { errorHandler, routeNotFoundHandler } from './middeware/error';
import connect from '../utils/connect';
import v1PatientRoutes from './v1/routes/patient.route';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = config.get<number>('port');

app.use('/api/v1/patients', v1PatientRoutes);

//error handler
app.use(routeNotFoundHandler);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`⚡ Server is started on port ${port}`);

  await connect();
});
