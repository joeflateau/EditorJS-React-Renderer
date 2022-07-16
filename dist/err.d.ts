import { ReactNode } from "react";
export declare type ErrOutputProps = {
    data: ErrOutputData;
    renderBlock: <T extends ErrBlockTypes>(block: ErrBlock<T>, index: number, data: ErrOutputData) => ReactNode;
};
export declare type ErrBlockTypes = keyof ErrBlockMap;
export declare type ErrOutputData = {
    blocks: ErrBlocks[];
    time?: number;
    version?: string;
};
export interface ErrBlockMap {
    paragraph: {
        text: string;
    };
    header: {
        text: string;
        level: number;
    };
}
export declare type ErrBlock<T extends ErrBlockTypes> = {
    type: T;
    data: ErrBlockMap[T];
};
export declare type ErrBlocks = {
    [K in ErrBlockTypes]: ErrBlock<K>;
}[ErrBlockTypes];
