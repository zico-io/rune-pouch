import { Stack, Typography } from "@mui/material"
export { OffensiveBonuses } from './Offensive'
export { DefensiveBonuses } from './Defensive'
export { MiscBonuses } from './Misc'

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
