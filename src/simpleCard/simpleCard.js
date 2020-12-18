import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      color: 'white',
      backgroundColor: '#343A40',
      textAlign: 'left'
    },
    pos: {
      marginBottom: 12,
    },
});

const SimpleCard = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader className={classes.title} title={props.title}>
            </CardHeader>
            <CardContent>
            <Typography variant="body2" color="secondary" component="p">
                <p>{props.text}</p>
            </Typography>
            </CardContent>
        </Card>
    );
}


export default SimpleCard;