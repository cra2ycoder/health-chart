
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import {formatNumber} from '../utils'



export default function UrinePage() {
  const curDate = new Date()
  const [day, month, year] = curDate.toLocaleDateString().split('/')
  const today = `${year}-${month}-${day}`



  return (<Box>
    <form>
      <TextField id="date"
        label="Date"
        type="date"
        defaultValue={today}>
    </TextField>
  </form></Box>)
}
