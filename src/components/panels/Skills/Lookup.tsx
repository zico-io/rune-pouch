import { useRef, useState } from 'react'
import { useStore } from '@/lib/state'
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import localforage from 'localforage'
import { observer } from 'mobx-react-lite'
import { Search } from '@mui/icons-material'

export const UsernameLookup: React.FC = observer(() => {
  const store = useStore()
  const username = store.ui.username || ''
  const shouldRemember = store.prefs.rememberUsername
  const [btnDisabled, setBtnDisabled] = useState(false)
  const btn = useRef<HTMLButtonElement>(null)

  return (
    <FormControl sx={{ marginTop: 'auto', width: 1 }}>
      <OutlinedInput
        size="small"
        placeholder="OSRS username"
        value={username}
        onChange={(e) => {
          store.updateUIState({ username: e.currentTarget.value })
          if (shouldRemember)
            localforage
              .setItem('rune-pouch-username', e.currentTarget.value)
              .catch(() => {})
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') btn.current?.click()
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              ref={btn}
              disabled={!username || btnDisabled}
              type="button"
              edge="end"
              onClick={async () => {
                setBtnDisabled(true)
                await store.fetchCurrentPlayerSkills()
                setBtnDisabled(false)
              }}
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
})
