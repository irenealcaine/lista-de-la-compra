import './CrearCuenta.scss'

import TextInput from '../../Components/TextInput/TextInput'
import Button from '../../Components/Button/Button'

import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const CrearCuenta = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (error) {
      setError("Error");
    }
  };

  return (
    <div className='crear-cuenta'>
      <h1>Crear cuenta</h1>
      <form className='form' onSubmit={handleLogin}>
        <TextInput placeholder={'Correo electrónico'} onChange={(e) => setEmail(e.target.value)} />
        <TextInput type={'password'} placeholder={'Contraseña'} onChange={(e) => setPassword(e.target.value)} />
        <Button type={'submit'} value={'Crea cuenta'} />
        {error && <p className='error'>{error}</p>}
        <p>¿Ya tienes cuenta? <Link to={'/iniciar-sesion'}>Inicia sesión</Link></p>
      </form>
    </div>
  )
}

export default CrearCuenta
