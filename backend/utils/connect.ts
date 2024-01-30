import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const MONGO_URI = config.get<string>('dbURI');

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('Successfully connected to the database');
  } catch (error) {
    logger.error('Error connecting to the database', error);
  }
};

export default connect;