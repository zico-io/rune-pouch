import React, { useEffect, useMemo, useState } from 'react'
import {
  Autocomplete,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { VariableSizeList, ListChildComponentProps } from 'react-window'
import { fontSize } from '@mui/system'
import LazyImage from './LazyImage'
import { getCdnImage } from '../../lib/utils'

const LISTBOX_PADDING = 8

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null)
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true)
    }
  }, [data])
  return ref
}

const OuterElementContext = React.createContext({})
const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)
  return <div ref={ref} {...props} {...outerProps} />
})

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props
  const dataSet = data[index]
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  }

  return (
    <Typography
      component="li"
      {...dataSet[0]}
      key={dataSet[1].label}
      noWrap
      style={inlineStyle}
      variant="body1"
    >
      {dataSet[1].label}
      {dataSet[1].version && (
        <Typography
          className="monster-version"
          variant="body2"
          marginLeft={1}
          sx={{
            color: 'GrayText',
          }}
        >
          #{dataSet[1].version}
        </Typography>
      )}
    </Typography>
  )
}

// TODO: Optimize the Combobox with lazy loading
type ComboboxItem = { label: string; version?: string; value: string | number }

interface IComboboxProps<T> {
  id: string
  value?: string
  items: T[]
  placeholder?: string
  onSelectedItemChange: any
  CustomItemComponent?: React.FC<{ item: T; itemString: string }>
}

const Combobox = <T extends ComboboxItem>(props: IComboboxProps<T>) => {
  const { id, items, value, placeholder, onSelectedItemChange } = props
  const [inputValue, setInputValue] = useState<string>(value || '')
  const [resetInputField, setResetInputField] = useState(false)
  useEffect(() => {
    if (value) setInputValue(value)
  }, [value])

  return (
    <Autocomplete
      disableListWrap
      filterSelectedOptions
      id={id}
      key={resetInputField}
      ListboxComponent={ListboxComponent}
      options={items}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          InputProps={{
            ...params.InputProps,
            placeholder: placeholder || 'Search...',
          }}
        />
      )}
      renderOption={(props, option, state) =>
        [props, option, state.index] as React.ReactNode
      }
      onChange={(_, v) => {
        setResetInputField((prev) => !prev)
        onSelectedItemChange(v)
      }}
      inputValue={inputValue}
      onInputChange={(_, v) => setInputValue(v)}
    />
  )
}

const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props
  const itemData: React.ReactElement[] = []
  ;(children as React.ReactElement[]).forEach(
    (item: React.ReactElement & { children?: React.ReactElement[] }) => {
      itemData.push(item)
      itemData.push(...(item.children || []))
    },
  )

  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  })
  const itemCount = itemData.length
  const itemSize = smUp ? 36 : 48

  const getChildSize = (child: React.ReactElement) => {
    if (child.hasOwnProperty('group')) return 48
    return itemSize
  }

  const getHeight = () => {
    if (itemCount > 8) return 8 * itemSize
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0)
  }

  const gridRef = useResetCache(itemCount)

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  )
})

export default Combobox
