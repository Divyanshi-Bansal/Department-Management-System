import { Request, response, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";

export const get_employees = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM empdept ORDER BY empid"
    );
    return res.status(200).json({
      entries: response.rows,
      time: new Date(),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: "Internal Server error",
      time: new Date(),
    });
  }
};

export const get_home = (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Welcome to Employee's Management Departemnt",
    });
  } catch {
    return res.status(404).json({
      error: "Page can't found",
    });
  }
};

export const put_employees = async(req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const { experience} = req.body;
  try {
      const response = await pool.query(
          "UPDATE empdept SET empexperience = $1 WHERE empid = $2",
          [experience , id]
      )
    return res.status(200).json({
      message: "Successfully updated",
      body:{
        updatedemp :{experience , id}
      },
      time: new Date(),
    });
  } catch {
    return res.status(404).json({
      error: "Page can't update",
      time: new Date(),
    });
  }
};

export const post_employees = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { empname, empage, empdepartment, empexperience, empsalary } = req.body;
  const response: QueryResult = await pool.query("SELECT * FROM empdept");
  const id = response.rows.length +1;
  try {
      const response  = await pool.query(
          'INSERT INTO  empdept(empid ,  empname, empage, empdepartment, empexperience, empsalary) values ($1 , $2 , $3 , $4 , $5 , $6)',
          [ id , empname, empage, empdepartment, empexperience, empsalary]
      );
    return res.status(200).json({
      message: "Successfully added your record",
      body:{
          newEmployee : {id , empname, empage, empdepartment, empexperience, empsalary}
      },
      time: new Date(),
    });
  } catch {
    return res.status(404).json({
      error: "can't add",
      time: new Date(),
    });
  }
};

export const delete_employees = async(req:Request, res:Response): Promise<Response> => {
const id = parseInt(req.params.id);
  try {
      await pool.query(
          'DELETE FROM empdept WHERE empid = $1',
          [id]
      );
    return res.status(200).json({
      message: "Successfully delete",
      body:{
          deletedemp :{
              id
          }
      },
      time: new Date(),
    });
  } catch {
    return res.status(500).json({
      error: "record can't delete",
      time: new Date(),
    });
  }
};

export const errorPage = (req, res, next) => {
  return res.status(404).json({
    error: "Some error got found ",
    time: new Date(),
  });
};

export const get_employeesByID = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM empdept WHERE empid = $1",
      [id]
    );
    return res.status(200).json({
      entries: response.rows,
      time: new Date(),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: "Internal Server error",
      time: new Date(),
    });
  }
};
