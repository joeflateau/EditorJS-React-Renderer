import { ReactNode } from "react";

export type ErrOutputProps = {
  data: ErrOutputData;
  renderBlock: <T extends ErrBlockTypes>(
    block: ErrBlock<T>,
    index: number,
    data: ErrOutputData
  ) => ReactNode;
};

export type ErrBlockTypes = keyof ErrBlockMap;

export type ErrOutputData = {
  blocks: ErrBlocks[];
  time?: number;
  version?: string;
};

// interface so that it can be merged with
export interface ErrBlockMap {
  paragraph: { text: string };
  header: {
    text: string;
    level: number;
  };
}

export type ErrBlock<T extends ErrBlockTypes> = {
  type: T;
  data: ErrBlockMap[T];
};

export type ErrBlocks = {
  [K in ErrBlockTypes]: ErrBlock<K>;
}[ErrBlockTypes];