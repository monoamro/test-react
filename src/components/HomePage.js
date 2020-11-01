import react from 'react';
import UserCard from './UserCard';
import { Grid } from '@material-ui/core';

const HomePage = ({ users }) => {

    return (
    <Grid container justify="center" className="container">
      {users && users.slice(0, 6).map((user) => (
        <Grid key={user.id} item xs={4}>
          <UserCard 
            name={user.name}
            username={user.username}
            website={user.website}
            id={user.id}
          />
        </Grid>
      ))}
    </Grid>
    )
}

export default HomePage;