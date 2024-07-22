import { KeyboardArrowDown } from '@mui/icons-material'
import { Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

export const CalculationsPanel = () => {
  return (
    <TableContainer sx={{ borderRadius: 1 }}>
      <Card>
        <CardContent>
          <Table>
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
        </CardContent>
      </Card>
      <Button disabled sx={{ backgroundColor: '#1c1c1c' }} startIcon={<KeyboardArrowDown />} endIcon={<KeyboardArrowDown />} fullWidth>Show More</Button>
    </TableContainer>
  )
}

