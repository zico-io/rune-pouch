import { IconButton } from '@mui/material'
import { PlayerEquipment } from '../../../../types/Player'
import { getCdnImage } from '../../../../lib/utils'
import { useStore } from '../../../../lib/state'
import { observer } from 'mobx-react-lite'

interface EquipmentGridSlotProps {
  slot: keyof PlayerEquipment
  placeholder?: string
}

export const EquipmentGridSlot: React.FC<EquipmentGridSlotProps> = observer(
  (props) => {
    const store = useStore()
    const { slot, placeholder } = props
    const currentSlot = store.equipmentData[slot]
    const isEmpty = !currentSlot

    return (
      <IconButton
        sx={{ width: 48, height: 48, borderRadius: 1 }}
        data-slot={slot}
        data-tooltip-id="tooltip"
        data-tooltip-content={currentSlot?.name}
        onMouseDown={() => {
          if (!isEmpty) store.clearEquipmentSlot(slot)
        }}
      >
        {currentSlot?.image ? (
          <img
            src={getCdnImage(`equipment/${currentSlot.image}`)}
            alt={currentSlot.name}
          />
        ) : (
          placeholder && <img src={placeholder} alt={slot} draggable={false} />
        )}
      </IconButton>
    )
  },
)
