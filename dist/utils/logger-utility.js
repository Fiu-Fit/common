"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
const winston = require("winston");
const { splat, combine, timestamp, label, printf, errors } = winston.format;
const loggerInstances = new Map();
const errorsFormat = errors({ stack: true });
const formatMeta = (meta) => {
    // format the splat yourself
    const splat = meta[Symbol.for('splat')];
    if (splat && splat.length) {
        return splat.length === 1
            ? JSON.stringify(splat[0])
            : JSON.stringify(splat);
    }
    return '';
};
const customFormatter = printf(args => {
    const { level, message, label, timestamp } = args, metadata = __rest(args, ["level", "message", "label", "timestamp"]);
    return `${timestamp} [${label}] ${level}: ${message} ${formatMeta(metadata)}`;
});
const getLogLevel = (tag) => {
    var _a;
    let logLevel = (_a = process.env.LOG_LEVEL) !== null && _a !== void 0 ? _a : 'info';
    const envVariableName = `${tag}_log_level`.toUpperCase();
    const allowedModuleLevel = process.env[envVariableName];
    logLevel = allowedModuleLevel === undefined ? logLevel : allowedModuleLevel;
    return logLevel.toLowerCase();
};
const LoggerFactory = (tag) => {
    let logger = loggerInstances.get(tag);
    if (logger != null) {
        return logger;
    }
    logger = winston.createLogger({
        format: combine(errorsFormat, label({ label: tag }), timestamp(), customFormatter, splat()),
        transports: [new winston.transports.Console({ level: getLogLevel(tag) })],
    });
    loggerInstances.set(tag, logger);
    return logger;
};
exports.LoggerFactory = LoggerFactory;
