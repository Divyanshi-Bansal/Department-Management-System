import express , {Application, Request, response} from "express";
import  routes from './routes/index_routes';
import morgan from 'morgan';
import  logger from 'winston';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const app: Application = express();

// app.use(morgan("tiny"));
app.use(express.static("public"));

  



app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(morgan("dev"))
// app.use(morgan('combined', { "stream": logger.stream }));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

app.use(routes);




app.listen(3001,()=>{
    console.log("Server is running on Port");
})