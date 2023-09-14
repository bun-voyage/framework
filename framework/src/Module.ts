import 'reflect-metadata';
import {IModuleConfiguration} from "./brainstorm.ts";

export type Class<T> = new (...args: any[]) => T;

export type ModuleType = Class<IModule>;

export interface IModule {

}

export function Module(configuration: IModuleConfiguration = {}) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        Reflect.defineMetadata('module:configuration', configuration, constructor);
        return class extends constructor {
        };
    }
}