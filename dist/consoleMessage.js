"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const createDirectories_1 = __importDefault(require("./createDirectories"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const right_pad_1 = __importDefault(require("right-pad"));
const util_1 = __importDefault(require("util"));
exports.default = (() => {
    let shouldLogToFile = false;
    let desktopPath = path_1.default.join(os_1.default.homedir(), "Desktop");
    let logPath = () => createDirectories_1.default(path_1.default.join(desktopPath, "logs/logs.txt"));
    const titlify = (title) => {
        if (typeof title === "object") {
            return right_pad_1.default(`[${title.title}]`, title.padding, " ");
        }
        else {
            return `[${title}]`;
        }
    };
    const logToFile = (title, content) => {
        if (!shouldLogToFile)
            return;
        fs_1.default.appendFileSync(logPath(), util_1.default.format(`[${title}] ` + content) + "\n");
    };
    const error = (title, ...s) => {
        logToFile(title, s.join(" "));
        return console.log(chalk_1.default.bgRed.green(titlify(title)), ...s);
    };
    const info = (title, ...s) => {
        logToFile(title, s.join(" "));
        console.log(chalk_1.default.bgBlue.white(titlify(title)), ...s);
    };
    const warning = (title, ...s) => {
        logToFile(title, s.join(" "));
        console.log(chalk_1.default.bgYellow.red(titlify(title)), ...s);
    };
    const success = (title, ...s) => {
        logToFile(title, s.join(" "));
        console.log(chalk_1.default.bgGreen.red(titlify(title)), ...s);
    };
    return {
        desktopPath,
        logToFile,
        error,
        info,
        warning,
        success,
        setLogPath: (value) => {
            logPath = () => value;
        },
        setShouldLogToFile: (value = false) => {
            shouldLogToFile = value;
        }
    };
})();
//# sourceMappingURL=consoleMessage.js.map