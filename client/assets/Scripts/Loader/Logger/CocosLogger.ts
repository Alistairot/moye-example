import { error, log, warn } from "cc";
import { ILog } from "moye";

export class CocosLogger implements ILog {
    log(str: string): void {
        log(str);
    }

    warn(str: string): void {
        warn(str);
    }

    error(str: string): void {
        error(str);
    }
}