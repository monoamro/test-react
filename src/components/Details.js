import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    detailsCard: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    paper: {
        padding: 32,
        fontWeight: 'bold',
    },
  });

const Details = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const classes = useStyles();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then((res) => {
             const { data } = res;
             const { id, name, username, email, address, company, website } = data;
             setUser({ id, name, username, email, address, company, website });         
          })
         .catch((e) => {console.log(e)});
        
  }, []);

    return (
        <Grid container className={classes.detailsCard}>
            {user && <Paper className={classes.paper} elevation={3}>
                <p>-name: {user.name}<br/>
                   -username: {user.username}<br/>
                   -email: {user.email}<br/>
                   -phone: {user.phone}<br/>
                   -company: {user.company.name}<br/>
                   -website: https://{user.website}<br/>
                   -address:<br/>
                   <ul>
                    <li>street: {user.address.street}</li>
                    <li>suite: {user.address.suite}</li>
                    <li>city: {user.address.city}</li>
                    <li>zipcode: {user.address.zipcode}</li>
                   </ul>
                </p>
            </Paper>}
        </Grid>
    )
}

export default Details;