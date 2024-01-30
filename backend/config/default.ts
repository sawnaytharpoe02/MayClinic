import dotenv from 'dotenv';
dotenv.config();

export default {
  port: 8800,
  dbURI: `mongodb+srv://${process.env.DBUSER_NAME}:${process.env.DBUSER_PASSWORD}@cluster0.typegqq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
