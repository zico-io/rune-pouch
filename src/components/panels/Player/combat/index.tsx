import { useMemo } from 'react'
import { useStore } from '../../../../lib/state'
import { Box, Divider, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { CombatStyle } from './Style'

export const CombatPanel: React.FC = observer(() => {
  const store = useStore()
  const { spell, buffs, style } = store.player
  const styles = useMemo(
    () =>
      store.availableCombatStyles.map((s, i) => (
        <CombatStyle key={i} style={s} />
      )),
    [store.availableCombatStyles],
  )

  const spellIssues = useMemo(
    () =>
      store.userIssues.filter(
        (i) =>
          i.type.startsWith('spell_') &&
          i.loadout === `${store.selectedLoadout + 1}`,
      ),
    [store.userIssues, store.selectedLoadout],
  )

  return (
    <Stack spacing={2} marginTop={1}>
      <Stack divider={<Divider flexItem />}>
        {styles}
        <Divider />
      </Stack>
    </Stack>
  )
})
