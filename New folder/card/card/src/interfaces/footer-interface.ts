import { CardData } from "./interfaces";

export interface CardIncrement {
  onAdd: () => void;
  onRemove: () => void;
  count: CardData[];
  handleContinue: () => void;
  handleBack: () => void;
}
