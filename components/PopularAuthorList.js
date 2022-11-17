import { Fragment } from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function PopularAuthorList (props){
    const changeAuthorKeyHandler = (authorId)=>{
        // console.log(`${authorId}`)
        props.changeAuthorKeyCallback(authorId)
    }
    return <Fragment>
            <ListItem
            secondaryAction={
            <Button
            onClick={()=>{
                changeAuthorKeyHandler(props.id)
                // console.log(props.id)
                }}
            >show</Button>
            }
        >
        <ListItemText primary={props.name}></ListItemText>
    </ListItem>
    <Divider />
  </Fragment>
  
}