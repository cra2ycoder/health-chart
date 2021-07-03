import useSwr from 'swr'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import UrineList from '../components/UrineList'
import UrineForm from '../components/UrineForm'
import { fetcher } from '../utils'

export default function UrinePage() {
  const { data, error } = useSwr('/api/urine?date=today', fetcher, {
    method: 'GET',
  })

  const addUrineToList = data => {
    console.log({ data })
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
      <UrineList />
      <UrineForm submitForm={addUrineToList} />
    </Box>
  )
}
