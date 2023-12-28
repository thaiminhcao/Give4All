import ExpandMore from '@/components/ui/explainMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {
  Card,
  CardActions,
  CardMedia,
  Collapse,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { useModal } from '../../modal-views/context';
import CustomButton from '../button/custom-button';
const ChatCard = ({
  getProjects,
  index,
  address,
}: {
  getProjects: any;
  index: number;
  address: string;
}) => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { openModal } = useModal();
  const { isConnected } = useAccount();
  const router = useRouter();

  const imageUrl = getProjects.imageURL ?? '';
  const title = getProjects.title ?? 'Untitled';
  return (
    <Card className="block justify-start space-y-10" key={index}>
      <CardMedia
        component="img"
        src={imageUrl}
        alt={title}
        width="800"
        height="325"
        onClick={() => {
          router.push(`project-details/?address=${address}`);
        }}
        sx={{ cursor: 'pointer' }}
      ></CardMedia>
      <div className="flex justify-between">
        <CardActions>
          <IconButton
            className="h-fit w-fit"
            onClick={() => {
              isConnected
                ? setLike((prev) => !prev)
                : toast.warn('Please connect wallet');
            }}
          >
            {!like ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />}
          </IconButton>
          <IconButton
            className="h-fit w-fit"
            onClick={() => {
              isConnected
                ? setHeart((prev) => !prev)
                : toast.warn('Please connect wallet');
            }}
          >
            {!heart ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </IconButton>
          <ExpandMore
            expand={showChat}
            onClick={() => setShowChat((prev) => !prev)}
            aria-expanded={showChat}
            aria-label="show more"
          >
            <ChatBubbleOutlineIcon />
          </ExpandMore>
        </CardActions>
        <CardActions>
          <CustomButton
            title="Donate"
            handlerClick={() => {
              isConnected
                ? openModal('DONATION_VIEW')
                : toast.warn('Please connect wallet');
            }}
            style="yellow"
          />
          <CustomButton
            style="cyan"
            title="Deny"
            handlerClick={() => {
              isConnected
                ? openModal('DENY_VIEW')
                : toast.warn('Please connect wallet');
            }}
          />
        </CardActions>
      </div>

      <Collapse
        in={showChat}
        timeout="auto"
        unmountOnExit
        className="overflow-auto"
      >
        {/* <CardContent className=" space-y-2">
          {getProjects.map((item, index) => {
            return (
              <div key={index} className="flex space-x-2">
                <Avatar
                  sx={{ bgcolor: charToColor(item.avatar) }}
                  aria-label="recipe"
                  className="h-10 w-10"
                >
                  {item.avatar}
                </Avatar>
                <Typography paragraph className="rounded-lg bg-gray-100 p-3">
                  {item.comment}
                </Typography>
              </div>
            );
          })}
        </CardContent> */}
      </Collapse>
    </Card>
  );
};

export default ChatCard;
