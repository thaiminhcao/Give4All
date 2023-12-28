import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiLockSimpleLight, PiSealQuestionBold } from 'react-icons/pi';
import { FcApprove } from 'react-icons/fc';
export default function CustomizedTimeline({
  numberInProcess,
  isCanceled,
  expiresAt,
}: {
  numberInProcess: number;
  isCanceled: boolean;
  expiresAt: string;
}) {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>

        {numberInProcess === 0 ? (
          <>
            <TimelineSeparator>
              <CircularProgress color="primary" />

              <TimelineConnector />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Pending
              </Typography>
              <Typography
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Waiting for review
              </Typography>
            </TimelineContent>
          </>
        ) : (
          <>
            <TimelineSeparator>
              <FcApprove fontSize={50} />
              <TimelineConnector />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Approve
              </Typography>
              <Typography
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                The project has been validated
              </Typography>
            </TimelineContent>
          </>
        )}
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        {numberInProcess === 1 ? (
          <>
            <TimelineSeparator>
              <CircularProgress color="primary" />
              <TimelineConnector />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Project is opening
              </Typography>
              <Typography
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Project is open for funding
              </Typography>
            </TimelineContent>
          </>
        ) : (
          <>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <GiReceiveMoney fontSize={25} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Funding
              </Typography>
              <Typography
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Everyone can fund the project
              </Typography>
            </TimelineContent>
          </>
        )}
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PiSealQuestionBold fontSize={25} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Funding or not
          </Typography>
          <Typography
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            The project will either continue or stop.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {expiresAt}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <PiLockSimpleLight fontSize={25} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Locking the funds
          </Typography>
          <Typography
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            All transactions with the fund will be closed
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
