'use client'

import {styled} from '@mui/system'
import { TextField } from '@mui/material';

const Input = styled(TextField)({
    '& label': {
      color: '#94a3b8',
    },
    '& label.Mui-focused': {
        color: '#FFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#94a3b8',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#94a3b8',
        borderRadius: '0',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF',
        borderWidth: '2px'
      },
    },
    '& .MuiInputBase-input': {
        color: '#FFF',
    }
  });
  
export default Input