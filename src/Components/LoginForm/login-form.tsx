import { TextField, Typography, Button } from '@mui/material';
import './styles.scss';

function LoginForm(){
  return (
    <div className='content'>
      <div className="font-effect-neon title">{"iPOSTS"}</div>

      <div className="field">
        <Typography className="field__text">{"Login"}</Typography>
        <TextField></TextField>
      </div>

      <div className="field">
        <Typography className="field__text">{"Senha"}</Typography>
        <TextField></TextField>
      </div>

      <Button>{"Entrar"}</Button>
    </div>
  )
}

export default LoginForm