import { observer } from 'mobx-react-lite'
import { Prayer, PrayerMap } from '@/enums/Prayer'
import { useStore } from '@/lib/state'
import Grid from '@mui/material/Unstable_Grid2'
import { GridItem } from '@components/ui/GridItem'
import { Box } from '@mui/material'

export const PrayersPanel = observer(() => {
  const store = useStore()
  const { prayers } = store.player

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container maxWidth={228} columns={4} spacing={1}>
        {Object.entries(PrayerMap).map(([k, v]) => (
          <GridItem
            key={k}
            item={parseInt(k)}
            name={v.name}
            image={v.image}
            active={prayers.includes(parseInt(k))}
            onClick={(p: Prayer) => store.togglePlayerPrayer(p)}
          />
        ))}
      </Grid>
    </Box>
  )
})
