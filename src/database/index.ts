import * as mongoose from 'mongoose';
import { Config } from './../config';

const options: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500
};

mongoose.connect(Config.mongoURL, options).catch(() => {});

export const DBConn = mongoose.connection
    .on('connected', () => console.log('Connected to the Shield store.'))
    .on('disconnected', () =>
        console.log('Disconnection from the Shield store.')
    )
    .on('error', error => console.error(`Mongoose connection error: ${error}`))
    .on('error', error => {
        if (error) {
            console.error(error);
            setTimeout(() => {
                mongoose.connect(Config.mongoURL, options).catch(() => {});
            }, 5 * 1000);
        }
    })
    .on('close', () => {
        console.log('Shutting down Shield store.');
    });
