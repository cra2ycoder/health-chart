import { useState } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { getCurrentDate } from '../utils'

export default function UrineForm(props) {
  const { day, month, year, time } = getCurrentDate()
  const today = `${year}-${month}-${day}`

  const [data, setData] = useState({
    date: today,
    time: time,
    quantity: 25,
  })

  const onTimeChange = e => {
    data.time = e.target.value
    setData({ ...data })
  }

  const onQuantityChange = e => {
    data.quantity = e.target.value
    setData({ ...data })
  }

  const submitData = () => {
    props?.submitForm(data)
  }

  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <style jsx>{`
        .urine-form {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid #ccc;
        }
      `}</style>
      <form className="urine-form">
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={data.date}
          disabled
          style={{ width: '100%', marginTop: '1rem' }}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue={data.time}
          style={{ width: '100%', marginTop: '1rem' }}
          onChange={onTimeChange}
        />
        <FormControl style={{ width: '100%', marginTop: '1rem' }}>
          <InputLabel id="urine-quantity">Quantity (ml)</InputLabel>
          <Select
            labelId="urine-quantity"
            id="urine-quantity"
            value={data.quantity}
            onChange={onQuantityChange}
          >
            {new Array(40).fill(undefined).map((x, id) => {
              const value = (id + 1) * 5
              return <MenuItem value={value}>{value}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: '1rem' }}
          onClick={submitData}
        >
          <AddIcon />
        </Button>
      </form>
    </Box>
  )
}
