import express from "express";
import cors from 'cors';


export class SetupServer{


    constructor(private Port: number, private routes: any, private app = express()){
        this.init();
    }


    private init(){
        this.app.use(express.json());
        this.app.use(this.routes);
        this.app.use(cors());
       this.start();
    }

    
    private start(){
        return this.app.listen(this.Port, ()=>console.info(`Server Running on Port: ${this.Port}`))
    }
}