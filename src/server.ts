import express, {Application, Router,} from 'express';
import cors from 'cors'

export class SetupServer{


    private app = express()

    constructor(private Port: number){
        this.init()
    }


    private async init(): Promise<void>{
        this.app.use(express.json());  
        this.app.use(cors) 
        this.app.listen(this.Port);  
        
    } 


    getApp(): Application{
        return this.app
    }

}




