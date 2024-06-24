import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base'
import { Add, Remove } from '@mui/icons-material'
import { styled } from '@mui/system'
import React from 'react'

// TODO: Fix styles to be cohesive with the rest of the application

export const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <Add fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <Remove fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  )
})

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
column-gap: 8px;
padding: 4px;
    &.focused {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};

      & button:hover {
        background: ${blue[400]};
      }
      // firefox
      &:focus-visible {
        outline: 0;
    }
`,
)

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  width: 4rem;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };
  grid-column: 1/2;
grid-row: 1/3;
outline: 0;
padding: 8px 12px;
`,
)

const StyledButton = styled('button')(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

    &.increment {
      grid-column: 2/3;
      grid-row: 1/2;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid;
      border-bottom: 0;
      border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};

      &:hover {
        cursor: pointer;
        color: #FFF;
        background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
        border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
      }
    }

    &.decrement {
      grid-column: 2/3;
      grid-row: 2/3;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid;
      border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};

      &:hover {
        cursor: pointer;
        color: #FFF;
        background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
        border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
      }
  }
  `,
)
