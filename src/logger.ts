const { createLogger, format, transports } = require('winston');
const { combine, timestamp, splat, simple, printf } = format;

const logFormat = printf((info: any) => {
  return `${info.timestamp} ${info.level.toUpperCase()}: ${ info.message }`;
});

export const logger = createLogger({
  level: 'debug',
  format: combine(timestamp(), splat(), logFormat),
  transports: [new transports.Console()],
});
