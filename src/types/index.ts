import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type CoinTypes = {
  icon: JSX.Element;
  code: string;
  name: string;
  price: number;
};

export interface Attachment {
  id: string;
  original: string;
  thumbnail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  balanceOf: bigint;
  createAt: bigint;
  expiresAt: bigint;
  imageURL: string;
  owner: string;
  raised: bigint;
  status: number;
  tags: string[];
}
export interface GetRates {
  user: string;
  donationTime: number;
  score: number;
}

export interface ProjectGridProps {
  address: string;
}

export interface Donations {
  donor: string;
  donationTime: bigint;
  value: number;
}
