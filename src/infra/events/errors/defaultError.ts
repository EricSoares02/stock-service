

export default class DefaultError{



 static send(message: string, erro: any){

    throw console.log(message, erro)

 }


}