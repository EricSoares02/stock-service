import client, { Channel, Connection } from "amqplib";


export class SetupRabbitMQ{

    private connection: any;
    private channel: any;
    private QUEUE: string = 'product'

    constructor(){
        this.initialize()
    }
    
    private async initialize(){
        await this.getConnection()
        await this.createChannel()
        await this.channel.assertQueue(this.QUEUE)
    }
    
    
    private async getConnection(): Promise<void>{
        
        this.connection = await client.connect(
            `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`
        )
    }
    
    
    private async createChannel(){
        
        this.channel = await this.connection.createChannel()
    }
    


    public sendMessage(payload: any): void{
        const message = JSON.stringify(payload)
        this.channel.sendToQueue(this.QUEUE, Buffer.from(message))
    }
    }