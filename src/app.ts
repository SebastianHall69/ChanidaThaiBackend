import express, { Application } from 'express';
import { AddressInfo } from 'net';

// Create app, defines API
const app: Application = express();
app.get('/', function (req, res) {
  res.send('balls, man. balls');
});
app.get('/bigballs', (req, res) => {
  res.send('<h1>bigger balls</h1>');
});

// Create server
const server = app.listen(8081, () => {
  const addrInfo: AddressInfo = server.address() as AddressInfo;
  const host: string = addrInfo.address;
  const port: number = addrInfo.port;
  console.log(`App listening to http://${host}:${port}`);
});
