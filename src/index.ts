import * as http from 'http';
import { httpApp } from './app';
import { Config } from './config';
import { DBConn } from './db';
import { createDefaultAdmin } from './controllers/user.controller';

const httpServer = http.createServer(httpApp);
httpServer.listen(Config.httpsPort, () => {
    console.log(
        `Shield-API v1.0.1 - On ${Config.env} environment -  Running on port ${
            Config.httpsPort
        }. \n${readPipelineId()}`
    );
    createDefaultAdmin();
});

process.on('SIGINT', () => {
    console.log(
        'Detected SIGINT signal. Gracefully shutting down the application.'
    );

    DBConn.close();
    httpServer.close(() => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log(
        'Detected SIGTERM signal. Gracefully shutting down the application.'
    );

    DBConn.close();
    httpServer.close(() => {
        process.exit(0);
    });
});

function readPipelineId() {
    if (Config.env) {
        try {
            const CI = require('./pipeline_id.json');
            return `Pipeline ID: ${CI.pipeline_id}`;
        } catch (error) {
            return error;
        }
    }
}
