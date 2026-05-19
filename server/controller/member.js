import express from "express";
import * as repository from '../repository/members.js';



export const getIdCheck = async(req, res, next) => {
    const idCheck = await repository.getIdCheck(req.body);
    res.json(idCheck);   
}

export const getLogin = async(req, res, next) => {
    const {id, pwd} = req.body;
    const login = await repository.getLogin({ id, pwd });
    res.json(login);   
}