import { ExpandMoreOutlined } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { MonsterAttribute } from '../../../enums/MonsterAttribute'
import { PresetAttributeButton } from './PresetAttributeButton'
import Grid from '@mui/material/Unstable_Grid2'

export const AttributesPanel = () => {
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        aria-controls="attributes-panel-content"
        expandIcon={<ExpandMoreOutlined />}
        id="attributes-header"
      >
        <Typography variant="h5">Attributes</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container columns={3} spacing={1}>
          {Object.values(MonsterAttribute).map((attr) => (
            <Grid xs={1}>
              <PresetAttributeButton key={attr} attr={attr} />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
