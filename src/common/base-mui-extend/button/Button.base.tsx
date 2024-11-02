import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface ButtonMUIPropsType extends ButtonProps{
  // onClick: MouseEventHandler<HTMLButtonElement>,
}

const ButtonMui: FC<ButtonMUIPropsType> = (props) => {
  return (
    <Button color={'primary'} { ...props }/>
  )
} 

export default ButtonMui