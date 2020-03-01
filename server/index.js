import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import route from './route';

env.config();
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use('/api/auth', route);

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

export default app;