import {VoyageFactory} from "../../framework/src/VoyageFactory.ts";
import {Module} from "../../framework/src/Module.ts";

@Module()
export class AppModule {

}

const app = await VoyageFactory.init(AppModule);

await app.listen({
    dev: true,
    port: 1337
});