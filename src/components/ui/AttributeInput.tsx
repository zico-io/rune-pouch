import { Box, SxProps } from '@mui/system'
import { NumberInput } from './NumberInput.tsx'
import Grid from '@mui/material/Unstable_Grid2'
import { Image } from 'mui-image'

interface AttributeInputProps {
  name: string
  image: string
  value: number
  disabled?: boolean
  min?: number
  max?: number
  sx?: SxProps
  step?: number
}

export const AttributeInput: React.FC<AttributeInputProps> = ({
  name,
  image,
  min,
  max,
  step,
  onChange,
  value,
  disabled,
  sx,
}) => {
  return (
    <Grid container columns={2} sx={sx}>
      <Grid xs={1}>
        <Box sx={{ width: 24, height: 24 }}>
          <Image src={image} alt={name} duration={600} fit="scale-down" />
        </Box>
      </Grid>
      <Grid xs={1}>
        {disabled ? (
          <Box
            sx={{
              width: 1,
              textAlign: 'left',
              border: '1px gray',
            }}
          >
            {value}
          </Box>
        ) : (
          <NumberInput
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            step={step}
          />
        )}
      </Grid>
    </Grid>
  )
}
