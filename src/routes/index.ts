import {Router} from 'express';

const router = Router();

router.get('/' , (req,res,next) =>{
    res.json("Home route is working");
})

router.put('/put' , (req,res,next) =>{
    res.json("Put route is working");
})

router.post('/post' , (req,res,next) =>{
    res.json("Post route is working");
})

router.delete('/delete' , (req,res,next) =>{
    res.json("delete route is working");
})

module.exports = router;