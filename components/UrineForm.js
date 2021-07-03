import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

export default function UrineForm() {
  const curDate = new Date()

  const [day, month, year] = curDate.toLocaleDateString().split('/')
  const today = `${year}-${month}-${day}`

  return (
    <Box>
      <style jsx>{`
        .urine-form {
          width: 85%;
          max-width: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
      <form className="urine-form">
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={today}
          style={{ width: '100%' }}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue={curDate.toLocaleTimeString()}
          style={{ width: '100%' }}
        />
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="urine-quantity">Quantity (ml)</InputLabel>
          <Select labelId="urine-quantity" id="urine-quantity" value={25}>
            {new Array(40).fill(undefined).map((x, id) => {
              const value = (id + 1) * 5
              return <MenuItem value={value}>{value}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button color="primary" variant="contained">
          <AddIcon />
        </Button>
      </form>
    </Box>
  )
}
