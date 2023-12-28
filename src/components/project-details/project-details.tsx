import { Star } from '@/components/icons/star-icon';
import { charToColor } from '@/helper';
import { Avatar, Button, Grid, Tooltip, Typography } from '@mui/material';
import CustomButton from '../ui/button/custom-button';
import CardContentCustom from '../ui/card/card-content';
import CardShowMore from '../ui/card/card-show-more';
import RatingNumber from '../ui/rating-number';
import CustomizedTimeline from '../ui/time-line';
import UseProjectDetails from './use-project-details';
import PercentLine from '../ui/percen-line';
import { ConvertDate, ConvertDateString } from '@/utils';
import { useContractSend } from '@/lib/contract/useContractWrite';
import { useRouter } from 'next/router';
export default function ProjectDetails() {
  const {
    openModal,
    add: address,
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
    listComment,
    status,
  } = UseProjectDetails();
  const router = useRouter();
  const addressA = router.query.address;
  const approve = useContractSend('approve', [addressA]);
  console.log(status, 'status');
  return (
    <>
      {/* <Button
        onClick={() => {
          approve.writeAsync && approve.writeAsync();
        }}
      >
        Approve
      </Button> */}
      <h1 className="fixed right-4 top-28 text-3xl font-semibold text-black ">
        Rating
      </h1>
      <div className="fixed right-2 top-36 flex w-28 justify-center">
        <div className="flex justify-center space-x-1">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className="ml-4 h-auto w-3.5 sm:w-auto"
              color="#e6b800"
            />
          ))}
        </div>
      </div>
      <Grid
        item
        xs={12}
        sm={12}
        md={1}
        lg={1}
        className="fixed right-1 top-44 w-28 rounded-lg border border-cyan-700 bg-white text-center"
      >
        TOP RATED
        {(top5Users as [{ name: string; value: string }]).map((item, index) => (
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item>
              <RatingNumber rateNumber={index} />
            </Grid>
            <Grid item>
              <Avatar
                sx={{ bgcolor: charToColor(item.name.charAt(0)) }}
                aria-label="recipe"
                className="h-10 w-10"
              >
                {item.name.charAt(0)}
              </Avatar>
              <h1>{item.name}</h1>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <CardShowMore
            children={
              <>
                <CustomizedTimeline
                  numberInProcess={Number(status)}
                  isCanceled={true}
                  expiresAt={ConvertDate(Number(expiresAt))}
                />
                <div className="space-y-4 p-5 xs:p-6 xs:pt-5">
                  <Grid
                    container
                    spacing={{ xs: 1, sm: 2, md: 3 }}
                    className="flex justify-between"
                  >
                    {/* <Grid item>
                <CustomArea title="Days Left" value={daysLeft} />
              </Grid>
              <Grid item>
                <CustomArea title="Supporters" value={supporters} />
              </Grid>
              <Grid item>
                <CustomArea title="Opponents" value={denials} />
              </Grid> */}
                  </Grid>

                  <PercentLine
                    title="Raised of"
                    value={Number(balanceOf)}
                    total={Number(raised)}
                    widthPercent={displayPercentRaised}
                  />
                  <PercentLine
                    title="Donors"
                    value={Number(supporters)}
                    total={Number(totalPerson)}
                    widthPercent={displayPercentDonors}
                  />

                  <div className="flex gap-x-8">
                    <CustomButton
                      style="yellow"
                      handlerClick={() => openModal('DONATION_VIEW')}
                      title="Donate"
                    />
                    <CustomButton
                      style="cyan"
                      handlerClick={() => openModal('DENY_VIEW')}
                      title="Deny"
                    />
                  </div>
                </div>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardContentCustom
            address={address}
            imageUrl={imageURL}
            title={title}
            createdAt={ConvertDateString(Number(expiresAt))}
          />
          <div className="w-full rounded-lg border border-cyan-700 bg-white text-center text-2xl font-semibold text-black">
            {listComment.map((item) => {
              return (
                <div className="flex flex-nowrap">
                  <div className="ml-6 mr-4 flex pt-5">
                    <Avatar
                      sx={{ bgcolor: charToColor(item.avatar) }}
                      aria-label="recipe"
                      className="h-10 w-10"
                      src={item.avatar}
                    />
                    <div className="mb-2 rounded-lg bg-gray-100 p-3">
                      <h1 className="text-left text-base font-semibold text-black">
                        {item.name}
                      </h1>
                      <p className="text-sm text-gray-700">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
