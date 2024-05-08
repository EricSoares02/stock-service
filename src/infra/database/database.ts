
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default class DatabaseManager{

    private databaseOrm = prisma    
    constructor(){

    }

    excecuteConnection(){

        return this.databaseOrm.$connect()

    }

    executeDisconnection(){

        return this.databaseOrm.$disconnect()

    }


    database(){

        return this.databaseOrm

    }

}