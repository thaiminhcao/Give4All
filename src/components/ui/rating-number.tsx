import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
  TbRosetteNumber4,
  TbRosetteNumber5,
} from 'react-icons/tb';
const RatingNumber = ({ rateNumber }: { rateNumber: number }) => {
  switch (rateNumber) {
    case 0:
      return <TbRosetteNumber1 fontSize={40} />;
    case 1:
      return <TbRosetteNumber2 fontSize={40} />;
    case 2:
      return <TbRosetteNumber3 fontSize={40} />;
    case 3:
      return <TbRosetteNumber4 fontSize={40} />;
    case 4:
      return <TbRosetteNumber5 fontSize={40} />;
  }
};

export default RatingNumber;
