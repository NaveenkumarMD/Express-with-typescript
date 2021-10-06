import express ,{Response,Request,Router} from 'express'
const route=Router()
import jsondata from '../Data/currencies.json'
const path=require('path')
const fs=require('fs')

route.get("/",async (req:Request,res:Response):Promise<any>=>{
    return res.json(jsondata)
})

interface cointype{
    symbol:string;
    name: string;
    symbol_native?: string;
    decimal_digits?: number;
    rounding?: number;
    code?: string;
    name_plural?: string;
}

interface singleobjectdata{
    [key:string]:cointype
}

route.post("/add",(req:Request,res:Response):any=>{
    var coindata:cointype=req.body
    var jsonpath:string=path.resolve(__dirname,"../Data/currencies.json")
    var obj:singleobjectdata={
        ...jsondata,
        coindata
    }
    console.log(obj)
    fs.writeFile(jsonpath,JSON.stringify(obj),'utf8',():void=>{
        console.log("Done")
    })
    return res.json({
        "msg":"success"
    })
})

export default route