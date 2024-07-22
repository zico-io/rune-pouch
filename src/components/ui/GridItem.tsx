import { CheckCircle } from '@mui/icons-material'
import { observer } from 'mobx-react-lite'
import LazyImage from './LazyImage'
import Grid from '@mui/material/Unstable_Grid2'

interface IGridItemProps<T> {
  item: T
  name: string
  image: string
  onClick: (item: T) => void
  active: boolean
}

export const GridItem: React.FC<IGridItemProps<number>> = observer(
  <T extends number>(props: IGridItemProps<T>) => {
    const { item, name, image, active, onClick } = props

    return (
      <Grid xs={1}>
        <button
          type="button"
          onClick={() => onClick(item)}
          style={{
            position: 'relative',
            width: 48,
            height: 48,
            cursor: 'pointer',
            background: 'transparent',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: (active ? '#3e3e3e' : '#2c2c2c')
          }}
        >
          {active && <CheckCircle width={5} sx={{ position: 'absolute', top: -6, right: -6 }} />}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <LazyImage src={image} alt={name} />
          </div>
        </button>
      </Grid>
    )
  },
)
