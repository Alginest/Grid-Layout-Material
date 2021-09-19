import * as React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  Grid,
} from '@material-ui/core'
import { africaData } from './constants'
import ShareIcon from '@mui/icons-material/Share'

const CoffeCard = () => {
  return (
    <Grid container spacing={4}>
      {africaData.map((card, index) => {
        const { avatarUrl, title, price, description, imageUrl } = card
        return (
          <Grid item key={index} xs={12} sm={4}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label='recipe' src={avatarUrl}></Avatar>}
                action={
                  <IconButton aria-label='settings'>
                    <ShareIcon />
                  </IconButton>
                }
                title={title}
                subheader={'Selling Now'}
              />
              <CardMedia
                title={title}
                style={{ height: '350px' }}
                image={imageUrl}
              />
              <CardContent>
                <Typography variant='body2'>{description}</Typography>
                <Typography varinat='subtitle2'>{price}</Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Buy Now</Button>
                <Button size='small'>Offer</Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CoffeCard
