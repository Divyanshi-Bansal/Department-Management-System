import winston from 'winston';


const logger = winston.createLogger({
    level: 'info' ,
  transports: [
    new winston.transports.File({ filename: '../logs/error.log', level: 'response' })
  ],
  exitOnError: false
});

export default winston;