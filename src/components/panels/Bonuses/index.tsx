import { Stack, Typography } from "@mui/material"
import { OffensiveBonuses } from './Offensive'
import { DefensiveBonuses } from './Defensive'
import { MiscBonuses } from './Misc'

export const BonusesPanel = () => {
  return (
    <Stack direction="row" textAlign="center" justifyContent="center">
      <Stack>
        <Typography variant='h6'>Offense</Typography>
        <OffensiveBonuses />
      </Stack>
      <Stack>
        <Typography variant='h6'>Defense</Typography>
        <DefensiveBonuses />
      </Stack>
      <Stack>
        <Typography variant='h6'>Other</Typography>
        <MiscBonuses />
      </Stack>
    </Stack >
  )
}
