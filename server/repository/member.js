import express from "express";
import pool from '../db/connection.js';



export const getIdCheck = async({id}) => {
    const sql = `
        select count(id)as isFind from member where id=?
    `;
    const [result] = await pool.execute(sql, [id]); 
    return result[0];
}


export const getLogin = async ({ id, pwd }) => {
    const sql = `
        select id, pwd from member where id=? and pwd=?
    `;
    const [result] = await pool.execute(sql, [id, pwd]);
    return result[0];
};