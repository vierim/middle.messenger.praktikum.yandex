import { Component } from "../../component";

export type RenderEngine<T extends Element> = (element: T, block: Component) => T | undefined;
