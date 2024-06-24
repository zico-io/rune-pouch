import dagger from '@public/img/bonuses/dagger.png'
import scimitar from '@public/img/bonuses/scimitar.png'
import warhammer from '@public/img/bonuses/warhammer.png'
import ranged_light from '@public/img/bonuses/ranged_light.webp'
import ranged_standard from '@public/img/bonuses/ranged_standard.webp'
import ranged_heavy from '@public/img/bonuses/ranged_heavy.webp'
import magic from '@public/img/bonuses/magic.png'
import ranged from '@public/img/bonuses/ranged.png'
import hitpoints from '@public/img/bonuses/hitpoints.png'
import attack from '@public/img/bonuses/attack.png'
import strength from '@public/img/bonuses/strength.png'
import defence from '@public/img/bonuses/defence.png'
import mining from '@public/img/bonuses/mining.png'
import magicStrength from '@public/img/bonuses/magic_strength.png'
import rangedStrength from '@public/img/bonuses/ranged_strength.png'
import toaRaidLevel from '@public/img/toa_raidlevel.webp'
import raidsIcon from '@public/img/raids_icon.webp'
import coxCmIcon from '@public/img/cox_challenge_mode.png'
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { SearchBar } from '../../ui/SearchBar'
import { StatBox } from '../../ui/StatBox'
import { Stack } from '@mui/system'
import { AttributesPanel } from './AttributesPanel'
import { DefensiveReductionsPanel } from './DefensiveReductionsPanel'
import { AttributeInput } from '../../ui/AttributeInput'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../lib/state'
import { useMemo } from 'react'
import { toJS } from 'mobx'
import { scaleMonster } from '../../../lib/MonsterScaling'
import { MonsterSelect } from './Select'
import { Image } from 'mui-image'
import { getCdnImage } from '../../../lib/utils'
import { GppBad } from '@mui/icons-material'

export const MonsterPanel: React.FC = observer(() => {
  const store = useStore()
  const { loadouts, monster } = store

  const isCustomMonster = store.monster.id === -1

  const monsterJS = toJS(monster)
  const displayMonster = useMemo(() => {
    if (isCustomMonster) return monsterJS
    return scaleMonster(monsterJS)
  }, [isCustomMonster, monsterJS])
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Button
            variant="text"
            href={`https://oldschool.runescape.wiki/w/Special:Lookup?type=npc&id=${monster.id}`}
            sx={{ p: 1 }}
          >
            <Grid container spacing={2} columns={4} marginRight="auto">
              <Grid>
                <Card variant="outlined" sx={{ padding: '8px' }}>
                  {store.monster.image ? (
                    <Image
                      height={48}
                      width={48}
                      fit="scale-down"
                      src={
                        store.monster.image
                          ? getCdnImage(`monsters/${store.monster.image}`)
                          : undefined
                      }
                      alt={store.monster.name || 'Unknown'}
                    />
                  ) : (
                    <>
                      <GppBad />
                    </>
                  )}
                </Card>
              </Grid>
              <Stack margin="auto">
                <Typography variant="subtitle2" color="GrayText">
                  {monster.version}
                </Typography>
                <Typography variant="h5">
                  {monster.name ? monster.name : 'Monster'}
                </Typography>
              </Stack>
            </Grid>
          </Button>
          <MonsterSelect />
          <Card elevation={0}>
            <CardContent>
              <Grid container spacing={2} columns={3} textAlign="center">
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
                <Grid xs={1}>
                  <Typography variant="h6" gutterBottom>
                    Offensive
                  </Typography>
                  <Stack spacing={1}>
                    <AttributeInput
                      name="Attack"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={attack}
                      value={displayMonster.offensive.atk}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { atk: v } })
                      }
                    />
                    <AttributeInput
                      name="Strength"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={strength}
                      value={displayMonster.offensive.str}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { str: v } })
                      }
                    />
                    <AttributeInput
                      name="Magic"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={magic}
                      value={displayMonster.offensive.magic}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { magic: v } })
                      }
                    />
                    <AttributeInput
                      name="Magic Strength"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={magicStrength}
                      value={displayMonster.offensive.magic_str}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { magic_str: v } })
                      }
                    />
                    <AttributeInput
                      name="Ranged"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={ranged}
                      value={displayMonster.offensive.ranged}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { ranged: v } })
                      }
                    />
                    <AttributeInput
                      name="Ranged Strength"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={rangedStrength}
                      value={displayMonster.offensive.ranged_str}
                      onChange={(v) =>
                        store.updateMonster({ offensive: { ranged_str: v } })
                      }
                    />
                  </Stack>
                </Grid>
                <Grid xs={1}>
                  <Typography variant="h6" gutterBottom>
                    Defensive
                  </Typography>
                  <Stack spacing={1}>
                    <AttributeInput
                      name="Stab"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={dagger}
                      value={displayMonster.defensive.stab}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { stab: v } })
                      }
                    />
                    <AttributeInput
                      name="Slash"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={scimitar}
                      value={displayMonster.defensive.slash}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { slash: v } })
                      }
                    />
                    <AttributeInput
                      name="Crush"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={warhammer}
                      value={displayMonster.defensive.crush}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { crush: v } })
                      }
                    />
                    <AttributeInput
                      name="Magic"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={magic}
                      value={displayMonster.defensive.magic}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { magic: v } })
                      }
                    />
                    <AttributeInput
                      name="Ranged Light"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={ranged_light}
                      value={displayMonster.defensive.light}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { ranged_light: v } })
                      }
                    />
                    <AttributeInput
                      name="Ranged Standard"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={ranged_standard}
                      value={displayMonster.defensive.standard}
                      onChange={(v) =>
                        store.updateMonster({
                          defensive: { ranged_standard: v },
                        })
                      }
                    />
                    <AttributeInput
                      name="Ranged Heavy"
                      max={1000}
                      disabled={!isCustomMonster}
                      image={ranged_heavy}
                      value={displayMonster.defensive.heavy}
                      onChange={(v) =>
                        store.updateMonster({ defensive: { ranged_heavy: v } })
                      }
                    />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <AttributesPanel />
          <DefensiveReductionsPanel />
        </Stack>
      </CardContent>
    </Card>
  )
})
