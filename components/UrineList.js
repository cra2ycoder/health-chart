import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function createData(time, quantity) {
  return { time, quantity }
}

const rows = [
  createData('10:10 PM', 100),
  createData('10:10 PM', 100),
  createData('10:10 PM', 100),
  createData('10:10 PM', 100),
  createData('10:10 PM', 100),
]

export default function UrineList() {
  return (
    <TableContainer component={Paper} style={{ marginBottom: '2rem' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Quantity (ml)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell>{500}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
