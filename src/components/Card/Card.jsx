import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment'
let now = moment().format('MMMM Do YYYY');
// console.log(now);
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Flower"
        subheader={now}
      />
      <CardMedia
        component="img"
        height="250"
        image='https://images.unsplash.com/photo-1637184488314-dcc87aa8bba8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80'
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Magnoliophyta, also called angiosperms).
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Morphology

</Typography>
          <Typography paragraph>
            Parts
            The flower has two essential parts: the vegetative part, consisting of petals and associated structures in the perianth, and the reproductive or sexual parts. A stereotypical flower consists of four kinds of structures attached to the tip of a short stalk. Each of these kinds of parts is arranged in a whorl on the receptacle. The four main whorls (starting from the base of the flower or lowest node and working upwards) are as follows:
          </Typography>
          <Typography paragraph>
            Perianth
            Main articles: Perianth, Sepal, and Corolla (flower)
            Collectively the calyx and corolla form the perianth (see diagram).

            Calyx: The calyx consists of leaf-like structures at the base of a flower that protect the flower during development. The leaf-like structures are individually referred to as sepals. There are often as many of these sepals as there are petals. While most calyces are green, there are exceptions in which the calyx is the same color as the petals of the flower or a different color altogether. The calyx performs a crucial role for the flowering plant. As the flower is forming, it is closed tightly into a bud. The sepals are the outer covering of the flower as it forms and are the only thing you see of the flower while it is still in bud form. It protects the developing flower and prevents it from drying out.
            Corolla: the next whorl toward the apex, composed of units called petals, which are typically thin, soft and colored to attract animals that help the process of pollination.
            Perigone: in monocots the calyx and corolla are indistinguishable thus the whorls of the perianth or perigone are called tepals.[4]
          </Typography>
          <Typography paragraph>
            Inflorescence

            The familiar calla lily is not a single flower. It is actually an inflorescence of tiny flowers pressed together on a central stalk that is surrounded by a large petal-like bract.
            Main article: Inflorescence
            In those species that have more than one flower on an axis, the collective cluster of flowers is termed an inflorescence. Some inflorescences are composed of many small flowers arranged in a formation that resembles a single flower. The common example of this is most members of the very large composite (Asteraceae) group. A single daisy or sunflower, for example, is not a flower but a flower head—an inflorescence composed of numerous flowers (or florets). An inflorescence may include specialized stems and modified leaves known as bracts.
          </Typography>
          <Typography>
            Wikipedia
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
