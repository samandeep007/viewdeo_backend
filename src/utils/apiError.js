class ApiError extends Error { // ApiError class extends Error class and is used to handle errors in the application in a standardised way
    constructor(
        statusCode, 
        message = "Something went wrong",
        errors = [], 
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor) //captureStackTrace() is a method inbuilt in Error class that is used to create a stack trace at the current position in the code.
        }
    };
} 

export {ApiError}