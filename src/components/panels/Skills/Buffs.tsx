import { Box, Checkbox, ListItemText, MenuItem } from '@mui/material'
import Potion from '@/enums/Potion'
import LazyImage from '@components/ui/LazyImage'
import { observer } from 'mobx-react-lite'

interface IBuffItemProps {
  potion: Potion
  key: string
  name: string
  image: string
  active: boolean
  setActive: (p: Potion) => void
}

export const BuffItem: React.FC<IBuffItemProps> = observer((props) => {
  const { potion, key, name, image, active, setActive } = props

  return (
    <MenuItem key={key} value={name} onClick={() => setActive(potion)}>
      <Box width={20} height={23}>
        <LazyImage responsive src={image} alt={name} />
      </Box>
      <Checkbox checked={active} />
      <ListItemText primary={name} />
    </MenuItem>
  )
})
