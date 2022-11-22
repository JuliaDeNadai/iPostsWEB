import { TextField, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './styles.scss';

function LoginForm(){

  function handleClick() {
    const history = useHistory();

    history.push('/timeline')
  }

  return (
    <div className='form-login__body'>
      <div className='form-login__content'>
        <div className="form-login__title">{"iPOSTS"}</div>

        <div className="form-login__field">
          <Typography className="form-login__field__text">{"Login"}</Typography>
          <TextField></TextField>
        </div>

        <div className="form-login__field">
          <Typography className="form-login__field__text">{"Senha"}</Typography>
          <TextField></TextField>
        </div>

        <Button className={'form-login__button'} color={'secondary'}>{"Entrar"}</Button>
      </div>
    </div>
  )
}

export default LoginForm