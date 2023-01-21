import * as AWS from "aws-sdk";
const lambda = new AWS.Lambda();

const sendHandler = async (event: any = {}): Promise<any> => {
    const message = {
        data: {
            id: "1",
            name: "Jhon",
        }
    };

    const result:any= await lambda.invoke({
        FunctionName: "cursosdev-destination-dev-receive",
        InvocationType: "RequestResponse",
        Payload: JSON.stringify(message),

    }).promise()
  
    return {
      statusCode: 200,
      body: `Message Send: ${JSON.stringify(result)}`,
    };
  };
  
  export { sendHandler };
  