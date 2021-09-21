import cards from './cards.module.scss';
import cx from 'classnames';
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

/* arrow function */
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate,} }) => {

    /* when refreshing */
    if (!confirmed) {
        return 'Featching...';
    }

    return (
        <div className={cards.container} data-testid='chart-bar' >
            <Grid container spacing={4} justify="center">

                <Grid item component={Card} xs={12} md={2} className={cx(cards.card, cards.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" >Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={3.5} separator=","/>
                        </Typography> 
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography vatiant="body2"> Number of infection of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(cards.card, cards.recovered)}>
                    <CardContent>
                        <Typography color="TextSecondary" variant="h5" >Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value - recovered.value - deaths.value} duration={3.5} separator=","/>
                        </Typography>
                        <Typography color="TextSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography vatiant="body2"> Number of recovered from COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(cards.card, cards.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom variant="h5" >Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={3.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography vatiant="body2"> Number of death caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Cards;