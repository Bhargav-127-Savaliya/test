import { Data } from "./interfaces";

export interface Info {
  handlePersonalCheckboxChanges: (id: string) => void;
  handleCompanyCheckboxChanges: (id: string) => void;
  value: Data;
}
