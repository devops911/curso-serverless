import * as AWS from "aws-sdk";
const lambda = new AWS.Lambda();

const receiveHandler = async (event: any = {}): Promise<any> => {
    
    return{
        statusCode: 200,
        body: JSON.stringify({status:"Messague received", body: event.Payload}),
    }
  
    
  };
  
  export { receiveHandler };
  