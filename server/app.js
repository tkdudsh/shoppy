import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();
const PORT=process.env.SERVER_PORT || 9000;
const app = express();
dotenv.config();


//미들웨어
app.use(cors());
app.use(express.json());


//라우터-> 클라이언트 요청 처리
app.use('/products', productsRouter);
app.use('/members', membersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});