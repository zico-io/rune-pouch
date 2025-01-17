import vuln from '/img/def_reductions/Vulnerability.png'
import bgs from '/img/def_reductions/Bandos_godsword.webp'
import sceptre from '/img/def_reductions/Accursed sceptre.png'
import elderMaul from '/img/def_reductions/Elder_maul.png'
import tonalztic from '/img/def_reductions/Tonalztics_of_ralos.png'
import dwh from '/img/def_reductions/Dragon_warhammer.webp'
import arc from '/img/def_reductions/Arclight.png'

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles'
import {
  Stack,
  Switch,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useStore } from '@/lib/state'
import { NumberInput } from '@components/ui/NumberInput'
import LazyImage from '@components/ui/LazyImage'
import { observer } from 'mobx-react-lite'

// FIX: Incrementing the values breaks it

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const DefensiveReductionsPanel: React.FC = observer(() => {
  const store = useStore()
  const { defenceReductions } = store.monster.inputs

  return (
    <Accordion elevation={0}>
      <AccordionSummary
        aria-controls="defensive-reductions-panel-content"
        id="defensive-reductions-header"
      >
        <Typography>Reductions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} paddingRight={1}>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={elderMaul} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> Elder maul hits</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <NumberInput
                className="form-control"
                required
                min={0}
                value={defenceReductions.elderMaul}
                onChange={(v) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { elderMaul: v } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={dwh} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> D' warhammer hits</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <NumberInput
                className="form-control"
                required
                min={0}
                value={defenceReductions.dwh}
                onChange={(v) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { dwh: v } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={arc} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> Arclight hits</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <NumberInput
                className="form-control"
                required
                min={0}
                value={defenceReductions.arclight}
                onChange={(v) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { arclight: v } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={tonalztic} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> Tonalztic hits</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <NumberInput
                className="form-control"
                required
                min={0}
                value={defenceReductions.tonalztic}
                onChange={(v) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { tonalztic: v } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={bgs} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> BGS hits</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <NumberInput
                className="form-control"
                required
                min={0}
                value={defenceReductions.bgs}
                onChange={(v) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { bgs: v } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={sceptre} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> Accursed sceptre</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <Switch
                className="form-control"
                required
                value={defenceReductions.accursed}
                onChange={(c) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { accursed: c } },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid marginY="auto">
              <LazyImage src={vuln} width={24} />
            </Grid>
            <Grid xs="auto" marginY="auto">
              <Typography variant="h6"> Vulnerability</Typography>
            </Grid>
            <Grid xs={2} margin="auto" marginRight={0}>
              <Switch
                className="form-control"
                required
                value={defenceReductions.vulnerability}
                onChange={(c) =>
                  store.updateMonster({
                    inputs: { defenceReductions: { vulnerability: c } },
                  })
                }
              />
            </Grid>
          </Grid>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
})
