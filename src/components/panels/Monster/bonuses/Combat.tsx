import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

export const MonsterCombatBonuses = () => {
  return (
    <Grid xs={1}>
      <Typography variant="h6" gutterBottom>
        Combat
      </Typography>
      <Stack spacing={1}>
        <AttributeInput
          name="Hitpoints"
          max={50000}
          disabled={!isCustomMonster}
          image={hitpoints}
          value={displayMonster.skills.hp}
          onChange={(v) =>
            store.updateMonster({ skills: { hp: v } })
          }
        />
        <AttributeInput
          name="Attack"
          max={1000}
          disabled={!isCustomMonster}
          image={attack}
          value={displayMonster.skills.atk}
          onChange={(v) =>
            store.updateMonster({ skills: { atk: v } })
          }
        />
        <AttributeInput
          name="Strength"
          max={1000}
          disabled={!isCustomMonster}
          image={strength}
          value={displayMonster.skills.str}
          onChange={(v) =>
            store.updateMonster({ skills: { str: v } })
          }
        />
        <AttributeInput
          name="Defence"
          max={40000}
          disabled={!isCustomMonster}
          image={defence}
          value={displayMonster.skills.def}
          onChange={(v) =>
            store.updateMonster({ skills: { def: v } })
          }
        />
        <AttributeInput
          name="Magic"
          max={1000}
          disabled={!isCustomMonster}
          image={magic}
          value={displayMonster.skills.magic}
          onChange={(v) =>
            store.updateMonster({ skills: { magic: v } })
          }
        />
        <AttributeInput
          name="Ranged"
          max={1000}
          disabled={!isCustomMonster}
          image={ranged}
          value={displayMonster.skills.ranged}
          onChange={(v) =>
            store.updateMonster({ skills: { ranged: v } })
          }
        />
      </Stack>
    </Grid>
  )
}

