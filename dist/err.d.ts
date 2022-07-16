import { ReactNode } from "react";
export interface ErrOutputProps {
    data: ErrOutputData;
    renderBlock: <T extends ErrBlockTypes>(block: ErrBlock<T>, index: number, data: ErrOutputData) => ReactNode;
}
export declare type ErrBlockTypes = keyof ErrBlockMap;
export interface ErrOutputData {
    blocks: ErrBlock<ErrBlockTypes>[];
    time?: number;
    version?: string;
}
export interface ErrBlockMap {
    paragraph: {
        text: string;
    };
    header: {
        text: string;
        level: number;
    };
}
export interface ErrBlock<T extends ErrBlockTypes> {
    type: T;
    data: ErrBlockMap[T];
}
