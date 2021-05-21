export const get_employees = (req , res , next) =>{
    try{
        return res.status(200).json({
            message:"Divyanshi Bansal",
            time: new Date()
        })
    }
    catch{
        return res.status(404).json({
            message: "Page can't found",
            time : new Date()
        })
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