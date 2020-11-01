import React from 'react';
import { Card, CardContent, Typography, CardActions, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import DetailsButton from './DetailsButton';

const useStyles = makeStyles({
    root: {
      justifyContent: 'spaced-around',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 250,
      margin: 16,
      textAlign: 'center',
      boxShadow: '4px 4px 8px lightgray '
    },
    avatar: {
        height: 72,
        width: 72,
        marginBottom: 16,
    },
    card: {
        justifyContent: 'spaced-around',
        display: 'flex',
        flexDirection: 'column',
        height: 230,
        alignItems: 'center',
    },
    title: {
      fontSize: 10,
    },
    pos: {
      marginBottom: 12,
    },
  });
 
const UserCard = ({name, username, website, id}) => {
    const classes = useStyles();

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.card}>
                <Avatar className={classes.avatar}>
                {name.slice(0, 1)}
                </Avatar>
                <Typography variant="h5" component="h2">
                {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {username}
                </Typography>
                <Typography variant="body2" component="p">
                    <a href={`https://${website}`} target="_blank" >https://{website}</a>
                </Typography>
            </CardContent>
            <DetailsButton id={id}/>
        </Card>
    )
}

export default UserCard;