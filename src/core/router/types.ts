import { Component } from "../component";
import { PageComponent } from "../page";

export interface Route {
  url: string,
  component: any,
  config?: unknown,
}
