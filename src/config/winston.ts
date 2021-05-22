import * as appRoot from 'app-root-path';
import {createLogger , format , transport , config} from 'winston';
import * as winston from 'winston';

const options = {
    file:{
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json:true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
}


const logger: winston.Logger = winston.createLogger({
    transports :[
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,
});


const myStream = {
    write: (message,encoding)=> {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    }
};

export default logger;