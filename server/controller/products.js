//전체 상품 조회
import * as repository from '../repository/products.js';

export const getAll=async (req,res,next)=>{
    const products=await repository.getAll();
    res.json(products); 
}