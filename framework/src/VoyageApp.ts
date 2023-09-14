import {Server} from "bun";

export interface IVoyageAppOptions {
    dev?: boolean;
    port: number;
}

export class VoyageApp {
    listen(options: IVoyageAppOptions) {
        return new Promise(() => {
            Bun.serve({
                development: options.dev,
                port: options.port,
                fetch(request: Request, server: Server) {
                    return new Response("test");
                }
            });
        });
    }
}