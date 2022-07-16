import { ReactNode } from "react";

export type ErrOutputProps = {
  data: ErrOutputData;
  renderBlock: (
    block: ErrBlocks,
    index: number,
    data: ErrOutputData
  ) => ReactNode;
};

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
  list: { style: "ordered" | "unordered"; items: string[] };
  image: {
    file: { url: string; [key: string]: unknown };
    caption: string;
    withBorder: boolean;
    withBackground: boolean;
    stretched: boolean;
  };
}

export type ErrBlockTypes = keyof ErrBlockMap;

export type ErrBlock<T extends ErrBlockTypes> = {
  type: T;
  data: ErrBlockMap[T];
};

export type ErrBlocks = {
  [K in ErrBlockTypes]: ErrBlock<K>;
}[ErrBlockTypes];
