import { CardData, Data } from "./interfaces";

export interface Props {
    show: boolean;
    cardData: CardData[];
    data: Data;
    handleClose: () => void;
    setData: React.Dispatch<React.SetStateAction<CardData[]>>;
    handleImportClick: () => void;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}