
//either = fail | success


export enum defaultReturnStatus {
  'success',
  'fail'
}

type Either <Error , Data> = {
  status: defaultReturnStatus,
  success?:{
      message: string,
      data: Data,
  }
  error?: {
      message: string,
      default: Error
  }
}




// type Either <Error , Data> = {
//   data: Data,
//   successful: true
// } | {
//   message: string 
//   error: Error,
//   successful: false
// }


export class Result<Error, Data>{

  
  constructor(private error: Error, private value: Data, private message?: string){
    this.value = value
    this.error = error
  }


  fail(): Either<Error, Data>{

    const message = this.message ?? 'error'
    return {
      status: defaultReturnStatus.fail,
      error: {
        default: this.error,
        message: message
      },
    }
  }


  success(): Either<Error, Data>{

    const message = this.message ?? 'sucess'
    return {
      status: defaultReturnStatus.success,
      success:{
        data: this.value,
        message: message
      }
    }
  }

}