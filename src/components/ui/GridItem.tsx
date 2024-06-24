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
            width: 36,
            height: 36,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative', margin: 'auto' }}>
            {active && <CheckCircle width={5} />}
            <LazyImage src={image} alt={name} />
          </div>
        </button>
      </Grid>
    )
  },
)
