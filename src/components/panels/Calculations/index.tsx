import { KeyboardArrowDown } from '@mui/icons-material'
import { Button, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

export const CalculationsPanel = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>Calculations</Typography>
        <TableContainer sx={{ borderRadius: 2 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">Loadout 1</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ maxWidth: 8, overflow: 'hidden' }} variant="head">Max Hit</TableCell>
                <TableCell align="center">1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ maxWidth: 8, overflow: 'hidden' }} variant="head">DPS</TableCell>
                <TableCell align="center">0.318</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ maxWidth: 8, overflow: 'hidden' }} variant="head">Avg. TTK</TableCell>
                <TableCell align="center">471.9s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ maxWidth: 8, overflow: 'hidden' }} variant="head">Accuracy</TableCell>
                <TableCell align="center">95.35%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ maxWidth: 8, overflow: 'hidden' }} variant="head">Spec Hit</TableCell>
                <TableCell align="center">N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button startIcon={<KeyboardArrowDown />} endIcon={<KeyboardArrowDown />} fullWidth>Show More</Button>
        </TableContainer>
      </CardContent>
    </Card >
  )
}

