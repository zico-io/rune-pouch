import head from '/img/slots/head.png'
import cape from '/img/slots/cape.png'
import neck from '/img/slots/neck.png'
import ammo from '/img/slots/ammo.png'
import weapon from '/img/slots/weapon.png'
import body from '/img/slots/body.png'
import shield from '/img/slots/shield.png'
import legs from '/img/slots/legs.png'
import hands from '/img/slots/hands.png'
import feet from '/img/slots/feet.png'
import ring from '/img/slots/ring.png'
import { Stack } from '@mui/system'
import { EquipmentGridSlot } from './GridSlot'

export const EquipmentGrid: React.FC = () => (
  <Stack>
    <Stack direction="row" justifyContent="center">
      <EquipmentGridSlot slot="head" placeholder={head} />
    </Stack>
    <Stack direction="row" justifyContent="center">
      <EquipmentGridSlot slot="cape" placeholder={cape} />
      <EquipmentGridSlot slot="neck" placeholder={neck} />
      <EquipmentGridSlot slot="ammo" placeholder={ammo} />
    </Stack>
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EquipmentGridSlot slot="weapon" placeholder={weapon} />
      <EquipmentGridSlot slot="body" placeholder={body} />
      <EquipmentGridSlot slot="shield" placeholder={shield} />
    </Stack>
    <Stack direction="row" justifyContent="center">
      <EquipmentGridSlot slot="legs" placeholder={legs} />
    </Stack>
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EquipmentGridSlot slot="hands" placeholder={hands} />
      <EquipmentGridSlot slot="feet" placeholder={feet} />
      <EquipmentGridSlot slot="ring" placeholder={ring} />
    </Stack>
  </Stack>
)
