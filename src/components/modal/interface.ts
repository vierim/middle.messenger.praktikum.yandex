import Component, { Props } from "../../core/component";

export type ModalProps = Props & {
  headline: string;
  buttonText: string;

  formFields: Array<Component>;
  
  onSubmit: (event: Event) => void;
}
