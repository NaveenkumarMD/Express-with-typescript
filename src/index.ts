import express,{Application} from 'express'
const app:Application=express();
const cors=require('cors')
import route from './Routes/index'
const PORT:number=8000 || process.env.PORT;


//Middlewares
app.use(express.json())
app.use(cors())

//Router
app.use(route)

app.listen(PORT,():void=>{
    console.log("server is running successfully at",PORT);
})