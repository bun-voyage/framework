// having a logger interface
import {VoyageApp} from "./VoyageApp.ts";


/** thanks angular <3 */
export declare interface Type<T> extends Function {
    new (...args: any[]): T;
}

export class VoyageFactory {
    static init<M>(module: Type<M>): Promise<VoyageApp> {
        return new Promise<VoyageApp>((resolve) => {
            const app = new VoyageApp();
            resolve(app);
        })

    }
}