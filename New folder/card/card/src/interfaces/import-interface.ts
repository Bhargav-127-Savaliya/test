import { CardData, Data } from "./interfaces";

export interface ImportProps {
    handleImportedData: (importedData: CardData[]) => void;
    option: Data;
}