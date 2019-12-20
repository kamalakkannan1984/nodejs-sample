export class Config {
    static env = process.env.NODE_ENV;
    static ip = process.env.SHIELD_API_IP;
    static httpsPort = Config.env ? process.env.SHIELD_API_PORT : 3001;
    static httpPort = 3001;
    static apiVersion = '/v1.0';
    static apiPrefix = '/api';
    static allowedOriginIp = Config.env
        ? process.env.ALLOWED_ORIGIN_IP
        : 'localhost';
    static allowedOriginPort = Config.env
        ? process.env.ALLOWED_ORIGIN_PORT
        : 4200;
    static sessionSecret = '3E33S!0u-3ecr3t';
    static sessionStoreHost = process.env.SHIELD_SESSION_STORE_HOST;
    static mongoURL = `mongodb://${process.env.SHIELD_STORE_IP}:${process.env.SHIELD_STORE_PORT}/shield`;
    static rabbitMqHost = process.env.RABBITMQ_HOST;
    static burpSuiteHOST = process.env.BurpSuite_HOST;
    static pdfHOST = process.env.PDF_HOST;
}
