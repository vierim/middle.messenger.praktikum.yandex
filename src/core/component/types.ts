import Component from "./component";

export type Children = Record<string, Component>;

export type Props = Record<string, unknown> & {
  events?: Record<string, (event: Event) => void>;
};

export type Lists = Record<string, Array<unknown>>;
