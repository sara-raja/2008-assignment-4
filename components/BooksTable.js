import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

export default function BooksTable (props){
    return <TableBody>
    <TableRow>
      <TableCell>
          {props.title}
      </TableCell>
    </TableRow>
  </TableBody>
}