import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fetchData: () => Promise<unknown>;
  label?: string;
  id?: string;
  prompt?: string;
  storeValue: (action: {}) => {};
}
