
import react from 'react';
import Button from '@material-ui/core/Button';


const DetailsButton = ({ id }) => {

    return (
        <Button size="large" href={`/${id}`} style={{ color: 'white', fontWeight: '800', backgroundColor: '#0275d8' }}>
            MORE DETAILS
        </Button>
    )
}

export default DetailsButton; 