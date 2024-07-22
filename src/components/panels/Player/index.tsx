import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import { EquipmentPanel } from '../Equipment'
import { CombatPanel } from '../Combat'
import { SkillsPanel } from '../Skills'
import { BonusesPanel } from '../Bonuses'
import { PrayersPanel } from '../Prayer'
import { SettingsPanel } from '../Settings'

import { Tabs } from "@mui/base"
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab'
import { buttonClasses } from "@mui/base/Button"
import { TabPanel as BaseTabPanel } from "@mui/base"
import { TabsList as BaseTabsList } from "@mui/base"
import { styled } from '@mui/system'
import { GitHub } from '@mui/icons-material'

export const PlayerPanel = () => {
  return (
    <Tabs defaultValue={2}>
      <Paper elevation={2} sx={{ overflow: 'hidden' }}>
        <Stack>
          <EquipmentPanel />
          <TabPanel value={0}>
            <CombatPanel />
          </TabPanel>
          <TabPanel value={1}>
            <SkillsPanel />
          </TabPanel>
          <TabPanel value={2}>
            <BonusesPanel />
          </TabPanel>
          <TabPanel value={3}>
            <PrayersPanel />
          </TabPanel>
          <TabPanel value={4}>
            <SettingsPanel />
          </TabPanel>
        </Stack>
      </Paper>
      <TabsList>
        <TabItem icon="Combat_icon" value={0} />
        <TabItem icon="Skills_icon" value={1} />
        <TabItem icon="Worn_equipment" value={2} />
        <TabItem icon="Prayer_icon" value={3} />
        <TabItem icon="Settings" value={4} />
      </TabsList>
      <Stack direction="row" spacing={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.2 }}>
        <IconButton onClick={() => window.open("https://github.com/zico-io/rune-pouch")}>
          <GitHub />
        </IconButton>
      </Stack>
    </Tabs>
  )
}

const TabItem = ({ icon, value }: { icon: string, value: number }) => {
  const href = `https://oldschool.runescape.wiki/images/${icon}.png`
  return (
    <Tab value={value}>
      <img src={href} />
    </Tab >
  )
}

const Tab = styled(BaseTab)`
  border: none;
  border-radius: 4px;
  background-color: #282828;
  cursor: pointer;
  width: 48px;
  height: 48px;
  margin: 4px;

  &:hover {
    background-color: #4f4f4f;
  }

  &.${tabClasses.selected}{
    background-color: #3e3e3e;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
    padding: 12px;
    margin-top: 8px;
  `,
)

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    background-color: '#1c1c1c';
    padding: 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
);
