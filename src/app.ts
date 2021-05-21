import express , {Application, response} from "express";
import  routes from './routes/index_routes';
import morgan from 'morgan';
import logger from './config/winston';


const app: Application = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(morgan("dev"))

app.use(routes);

app.use(function(err, req, res, next) {
    logger.info(`${req.method} - ${req.originalUrl}`)
    // logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    // next(response)
  }) 

app.listen(3001,()=>{
    console.log("Server is running on Port");
})