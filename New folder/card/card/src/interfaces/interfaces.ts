export interface CheckboxData {
  id: string;
  label: string;
}

export interface Data {
  personalSelectedCheckbox: string[];
  companySelectedCheckbox: string[];
}

export interface CardData {
  id: number;
  personalInputValues: { [key: string]: string };
  companyInputValues: { [key: string]: string };
}
