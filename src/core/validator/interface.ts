export type ValidationMethod = (element: HTMLInputElement) => ValidationResult;

export type ValidationResult = {
  isValid: boolean;
  reason: string;
};
