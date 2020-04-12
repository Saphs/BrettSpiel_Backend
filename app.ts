import express from 'express';
import {Request, Response} from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import { GameRoom} from "./GameRoom";
import { apiRouter} from "./ApiRouter";


const port = Number(process.env.PORT || 2567) + Number(process.env.NODE_APP_INSTANCE || 0);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
    server: createServer(app),
    express: app,
    pingInterval: 0,
});

gameServer.define('game', GameRoom);

// Logging
app.use((req: Request, res, next) => {
    const now = new Date(Date.now()).toLocaleTimeString();
    const queries = JSON.stringify(req.query);
    const params = JSON.stringify(req.params);
    const body = JSON.stringify(req.body);
    console.log(`[${now}] Got: ${req.method} at ${req.originalUrl} with query: ${queries} params: ${params} body ${body}`);
    next();
});

// Routing
app.use('/colyseus', monitor());
app.use('/api', apiRouter);
app.use('/', (req, res, next) => {
    res.sendFile(__dirname + "/views/index.html")
});



gameServer.onShutdown(function(){
    console.log(`game server is going down.`);
});

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);
