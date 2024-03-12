

import { SingleValue } from 'chakra-react-select';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

type GetLayoutFunc = (page: ReactElement) => ReactElement;


export type PageProps = {
  Component: NextPageWithLayout;
  pageProps: any;
} & AppProps;

export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
  requireAuth?: boolean;
};
export type Children = {
  children: ReactNode;
};

export type PageEdge<T> = {
  cursor: string;
  node: T;
};

export type CursorType = { cursor: string; isCurrent: boolean; page: number };

export type PageCursors = {
  around: CursorType[];
  next: CursorType;
  previous: CursorType;
};

export type DataType<T> = {
  pageCursors: PageCursors;
  pageEdges: PageEdge<T>[];
  totalCount: number;
};

export type SelectorOptionValue = SingleValue<{
  value?: string;
  label: string;
}>;


