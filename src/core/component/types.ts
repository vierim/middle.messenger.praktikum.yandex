import Component from "./component";

export type Children = Record<string, Component>;

export type Props = Record<string, unknown> & {
  class?: string;
  events?: Record<string, (event: Event) => void>;
};

export type Lists = Record<string, Array<unknown>>;
