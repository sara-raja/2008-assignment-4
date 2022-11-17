import Typography from '@mui/material/Typography';

export default function AuthorInfo (props){
    return <div><Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
    >
        {props.name}
    </Typography>
    <Typography  align="center" color="text.primary" paragraph>
        {props.birthDate} -
        {!props.deathDate ?
        " Present Day"
        :
        props.deathDate
        }
    </Typography></div>
}