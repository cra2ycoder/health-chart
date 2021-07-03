import useSwr, { mutate } from 'swr'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import UrineList from '../components/UrineList'
import UrineForm from '../components/UrineForm'
import { getFetcher } from '../utils'

export default function UrinePage() {
  const { data, error } = useSwr('/api/urine?date=today', getFetcher)

  const addUrineToList = data => {
    fetch('/api/urine?date=today', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      return res.json()
    })

    mutate('/api/urine?date=today')
  }

  return (
    <Box
      style={{
        width: '85%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '1rem',
      }}
    >
      <Typography
        variant="h6"
        align="left"
        style={{ width: '100%', marginBottom: '1rem' }}
      >
        Urine Output:
      </Typography>
      <UrineList list={data} />
      <UrineForm submitForm={addUrineToList} />
    </Box>
  )
}
