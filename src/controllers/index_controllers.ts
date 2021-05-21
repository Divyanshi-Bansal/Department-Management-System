import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';


export const get_employees = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM empdept ORDER BY empid');
        return res.status(200).json({
            entries:response.rows,
            time:new Date()
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            error:'Internal Server error',
            time: new Date()
        });
    } 
}

export const get_home = (req , res , next) =>{
    try{
        return res.status(200).json({
            message:"Welcome to Employee's Management Departemnt"
        })
    }
    catch{
        return res.status(404).json({
            error: "Page can't found",

        })
    }
}

export const put_employees = (req , res , next) =>{
    try{
        return res.status(200).json({
            message:"Successfully updated",
            time: new Date()
        })
    }
    catch{
        return res.status(404).json({
            error: "Page can't update",
            time: new Date()
        })
    }
}

export const post_employees = (req , res , next) =>{
    try{
        return res.status(200).json({
            message:"Successfully post",
            time: new Date()
        })
    }
    catch{
        return res.status(404).json({
            error: "Page can't post",
            time: new Date()
        })
    }
}

export const delete_employees = (req , res , next) =>{
    try{
        return res.status(200).json({
            message:"Successfully delete",
            time: new Date()
        })
    }
    catch{
        return res.status(404).json({
            error: "Page can't delete",
            time: new Date()
        })
    }
}

export const errorPage=(req,res,next)=>{
    return res.status(404).json({
            error:"Some error got found ",
            time:new Date()
    })
}

export const get_employeesByID = async (req: Request, res: Response): Promise<Response> =>{
    const id = req.params.id;
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM empdept ORDER BY empid WHERE empid==id');
        return res.status(200).json({
            entries:response.rows,
            time:new Date()
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            error:'Internal Server error',
            time: new Date()
        });
    } 
}
