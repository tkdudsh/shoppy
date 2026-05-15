import pool from '../db/connection.js';

export const getAll=async ()=>{
    const sql=`select pid, name, price,info,rate,image,img_list from product`;
    const [results]=await pool.query(sql,[]);
    console.log(results);
    return results
}
