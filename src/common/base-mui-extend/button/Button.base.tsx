import { Button, ButtonOwnProps } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

interface ButtonMUIPropsType extends ButtonOwnProps{
  onClick: MouseEventHandler<HTMLButtonElement>,
} // custom additional type

const ButtonMui: FC<ButtonMUIPropsType> = (props) => {
  return (
    <Button { ...props }/>
  )
} 

export default ButtonMui