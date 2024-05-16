import { Response } from "express";

class DefaultHttpResponse {
  protected statusCode = 500;
  send(res: Response, message: string, data?: any) {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class Ok extends DefaultHttpResponse {
  protected statusCode: number = 200;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class Created extends DefaultHttpResponse {
  protected statusCode: number = 201;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class NotFound extends DefaultHttpResponse {
  protected statusCode: number = 404;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class BadRequest extends DefaultHttpResponse {
  protected statusCode: number = 400;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class Forbidden extends DefaultHttpResponse {
  protected statusCode: number = 403;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}

class InternalServerError extends DefaultHttpResponse {
  protected statusCode: number = 500;
  send(
    res: Response<any, Record<string, any>>,
    message: string,
    data?: any
  ): void {
    res.status(this.statusCode).json({
      message: message,
      data: data,
    });
  }
}


export enum httpResponseStatus {
  "Ok",
  "Created",
  "Bad Request",
  "Forbidden",
  "Not Found",
  "Internal Server Error",
}

export class HttpResponse {
  constructor(private httpResponseMethod: Response | any) {}

  execute(httpStatus: httpResponseStatus, message: string, data?: any) {
    switch (httpStatus) {
      case httpResponseStatus.Ok:
            return new Ok().send(this.httpResponseMethod, message, data);
      case httpResponseStatus.Created:
            return new Created().send(this.httpResponseMethod, message, data);
      case httpResponseStatus.Forbidden:
            return new Forbidden().send(this.httpResponseMethod, message, data);
      case httpResponseStatus["Bad Request"]:
            return new BadRequest().send(this.httpResponseMethod, message, data);
      case httpResponseStatus["Internal Server Error"]:
            return new InternalServerError().send(
                this.httpResponseMethod,
                message,
                data
                );
      case httpResponseStatus["Not Found"]:
            return new NotFound().send(this.httpResponseMethod, message, data);
      default:
        return new BadRequest().send(this.httpResponseMethod, message, data);
    }
  }
}
