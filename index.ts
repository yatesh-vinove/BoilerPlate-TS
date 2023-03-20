import * as http from 'http';
import App from './server';
import { config } from './utils/constants';
import { logger } from './utils/logger';
import dotenv from 'dotenv';

dotenv.config();

const port =  process.env.PORT || config.PORT;;
App.set('port', port);
//create a server and pass our Express app to it.
const server = http.createServer(App);
server.listen(port);
server.on('listening', onListening);

//function to note that Express is listening
function onListening(): void {
    console.log(`Listening on Port ${port}`)
    logger.info(`Listening on port `+port);
}