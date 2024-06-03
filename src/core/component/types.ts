import Component from "./component";

export type Children = Record<string, Component>;

export type Props = Record<string, unknown> & {
  events?: Record<string, () => void>;
};

export type Lists = Record<string, Array<unknown>>;
