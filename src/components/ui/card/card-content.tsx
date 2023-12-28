import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function CardContentCustom({
  imageUrl,
  title,
  address,
  createdAt,
}: {
  imageUrl: string;
  title: string;
  address: string;
  createdAt: string;
}) {
  return (
    <Card sx={{ width: 'full' }}>
      <CardHeader
        avatar={
          <>
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="https://via.placeholder.com/50x50"
            >
              R
            </Avatar>
            <h1 className="w-24 text-base font-semibold text-black">
              {address}
            </h1>
          </>
        }
        title={title}
        subheader={createdAt}
      />
      <CardMedia component="img" height="194" src={imageUrl} alt={title} />
      <CardContent>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Card>
  );
}
