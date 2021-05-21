import express , {Application} from "express";
import  routes from './routes/index_routes';

const app: Application = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routes);

app.listen(3000,()=>{
    console.log("Server is running on Port");
})