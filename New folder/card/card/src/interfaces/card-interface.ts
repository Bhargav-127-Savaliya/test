import { CardData, Data } from "./interfaces";

export interface Props {
  value: CardData[];
  applyAll: boolean;
  selectValue: Data;
  handlePersonalInputChange: (
    cardId: number,
    id: string,
    value: string
  ) => void;
  handleCompanyInputChange: (cardId: number, id: string, value: string) => void;
  handleApplyAll: () => void;
  handleShow: () => void;
}
