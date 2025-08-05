const express=require("express");
  const app=express();
  const PORT=8000;
  const {connectToMongoDB}=require("./connect");
  const urlRoute=require("./routes/url");
  app.use(express.json());
  connectToMongoDB("mongodb://localhost:27017/Short-ID").then(()=>console.log("Connected to MongoDb"));
  app.use('/url',urlRoute);
  app.listen(PORT,()=> console.log(`Server is listening on PORT: ${PORT}`)
);