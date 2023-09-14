export interface ITranslatable<T> {
    [key: string]: T;
}

export interface ITranslatableText  extends ITranslatable<string> {}

export interface ITechTree {
    id: string;
    name: ITranslatableText;
    technologies: ITech[];
    children: string[];
}

export interface ITech {
    name: ITranslatableText;
    branches: ITech[];
}

export interface IModuleConfiguration {
    commands?: any[];
}