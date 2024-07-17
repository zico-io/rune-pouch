import { Box, SxProps } from '@mui/system'
import { NumberInput } from './NumberInput.tsx'
import Grid from '@mui/material/Unstable_Grid2'
import { Image } from 'mui-image'
import { Paper } from '@mui/material'

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
    <Paper variant="outlined" sx={{ margin: 0.5, maxWidth: '98px' }}>
      <Grid container columns={2} sx={sx} padding={1}>
        <Grid xs={1} marginY="auto">
          <Box sx={{ width: 24, height: 24 }}>
            <Image src={image} alt={name} duration={600} fit="scale-down" />
          </Box>
        </Grid>
        <Grid xs={1} marginY="auto" paddingRight={1}>
          {disabled ? (
            <Box
              sx={{
                minWidth: '28px',
                textAlign: 'right',
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
    </Paper>
  )
}
