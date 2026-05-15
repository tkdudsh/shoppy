import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'shoppy',
});
//connection 테스트
pool.getConnection()
    .then((connection) => 
        console.log('Database connection successful')
        
    )
    .catch((error) => {
        console.error('Database connection failed:', error);
    }); 
export default pool;