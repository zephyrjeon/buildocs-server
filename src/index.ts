import express from 'express';

const app = express();

const startServer = () => {
  app.listen({ port: 3000 }, () => {
    console.log(`🚀 Server ready at ${3000}`);
  });
};

startServer();
