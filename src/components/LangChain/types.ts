import { TFunction } from "react-i18next";

export interface LangChainProps {
  title: string;
  content: string;
  t: TFunction;
}

export type OptionalString = string | undefined;
