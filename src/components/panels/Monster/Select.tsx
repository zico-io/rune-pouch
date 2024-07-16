import React, { useMemo } from 'react'
import { useStore } from '@/lib/state'
import { observer } from 'mobx-react-lite'

import { Monster } from '@/types/Monster'
import { CUSTOM_MONSTER_BASE } from '@/lib/Monsters'
import Combobox from '@components/ui/ComboBox'
import { Edit } from '@mui/icons-material'

interface MonsterOption {
  label: string
  value: number
  version: string
  monster: Partial<Monster>
}

export const MonsterSelect: React.FC = observer(( {children} ) => {
  const store = useStore()
  const { availableMonsters } = store

  const options: MonsterOption[] = useMemo(
    () => [
      {
        label: 'Create custom monster',
        value: -1,
        version: '',
        monster: { ...CUSTOM_MONSTER_BASE },
      },
      ...availableMonsters.map((m, i) => ({
        label: `${m.name}`,
        value: i,
        version: m.version || '',
        monster: {
          ...m,
        },
      })),
    ],
    [availableMonsters],
  )

  return (
    <Combobox<MonsterOption>
      id="monster-select"
      items={options}
      placeholder={children}
      onSelectedItemChange={(item) => {
        if (item) store.updateMonster(item.monster)
      }}
      CustomItemComponent={({ item }) => {
        const i = item

        if (i.value === -1) {
          return (
            <div>
              <Edit height={14} />
              {i.label}
            </div>
          )
        }

        return (
          <div style={style}>
            {i.label}
            {i.version && (
              <span className="monster-version text-xs">#{i.version}</span>
            )}
          </div>
        )
      }}
    />
  )
})
