

const processorHandler = async (event: any = {}): Promise<any> => {
    
    return{
        statusCode: 200,
        body: JSON.stringify({status:"Messague received", body: event.Payload}),
    }
  
    
  };
  
  export { processorHandler };
  