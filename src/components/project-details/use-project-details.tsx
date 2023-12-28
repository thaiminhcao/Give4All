import React from 'react';
import { MODAL_VIEW, useModal } from '../modal-views/context';
import { useContractCalls } from '@/lib/contract/useContractReads';
import { sortDataByProjectList } from '@/helper';
import responseAPI from './data.json';
import { useRouter } from 'next/router';

const UseProjectDetails = (): {
  openModal: (view: MODAL_VIEW, data?: any) => void;
  add: string;
  title: string;
  description: string;
  imageURL: string;
  raised: string;
  expiresAt: string;
  daysLeft: number;
  top5Users: any;
  supporters: number;
  denials: number;
  balanceOf: number;
  displayPercentRaised: string;
  totalPerson: number;
  displayPercentDonors: string;
  rating: number;
  listComment: {
    name: string;
    avatar: string;
    content: string;
  }[];
  status: string;
} => {
  const { openModal } = useModal();
  const router = useRouter();
  const { address }: any = router.query;
  const functionName = [
    'title',
    'description',
    'imageURL',
    'raised',
    'expiresAt',
    'status',
  ];
  const abi = 'project';
  const getProject = useContractCalls({
    functionName,
    abi,
    address: address,
  });
  const data = getProject?.map((item) => item.result) ?? [];
  const result = sortDataByProjectList(
    address ?? [],
    data as [],
    functionName.length
  );
  if (!getProject) {
    return {
      openModal: () => {},
      add: '',
      title: '',
      description: '',
      imageURL: '',
      raised: '',
      expiresAt: '',
      daysLeft: 0,
      top5Users: [],
      supporters: 0,
      denials: 0,
      balanceOf: 0,
      displayPercentRaised: '',
      totalPerson: 0,
      displayPercentDonors: '',
      rating: 0,
      listComment: [{ name: '', avatar: '', content: '' }],
      status: '',
    };
  }
  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
  };
  const title = result.get(address)?.title;
  const description = result.get(address)?.description;
  const imageURL = result.get(address)?.imageURL;
  const raised = result.get(address)?.raised;
  const expiresAt = result.get(address)?.expiresAt;
  const daysLeft = Math.round((Number(expiresAt) - Date.now() / 1000) / 86400);
  const top5Users = responseAPI.top5user;
  const supporters = result.get(address)?.supporters ?? 0;
  const balanceOf = responseAPI.balanceOf ?? 0;
  const denials = result.get(address)?.denials ?? 0;
  const percentRaised = Number(responseAPI.balanceOf / raised) * 100;
  const displayPercentRaised =
    (percentRaised <= 100 ? percentRaised : 100) + '%';
  const totalPerson = supporters + denials;
  const percentDonors = Number(supporters / totalPerson) * 100;
  const displayPercentDonors =
    (percentDonors <= 100 ? percentDonors : 100) + '%';
  const add = shortenAddress(address);
  const rating = Math.round(
    (responseAPI.rating.balanceOf / responseAPI.rating.total) * 5
  );
  const status = result.get(address)?.status;
  return {
    openModal,
    add,
    title,
    description,
    imageURL,
    raised,
    expiresAt,
    daysLeft,
    top5Users,
    supporters,
    denials,
    balanceOf,
    displayPercentRaised,
    totalPerson,
    displayPercentDonors,
    rating,
    listComment: responseAPI.listComment,
    status,
  };
};

export default UseProjectDetails;
