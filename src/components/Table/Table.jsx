
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}
function makeStyle(status){
    if(status === "Approved"){
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        } 
    }
    else if(status === 'Pending'){
        return{
            background: '#ffadad8f',
            color: 'red'
        }
    }
    else{
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}

const rows = [
  createData("Lasania Chicken Fri", 18908424, "2 march 2022", "Approved"),
  createData('Pizza', 18908424, "2 march 2022", "Pending"),
  createData('Mouth Freshner', 18908424, "2 march 2022", "Appproved"),
  createData('Cupcake', 18908421, "2 march 2022", "Delivered"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className='Table'>
        <h3>Recent Orders</h3>

    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
              <span className='status' style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
