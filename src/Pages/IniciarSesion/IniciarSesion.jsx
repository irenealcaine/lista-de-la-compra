import TextInput from '../../Components/TextInput/TextInput'
import './IniciarSesion.scss'
import Button from '../../Components/Button/Button'

import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const IniciarSesion = () => {

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
    <div className='iniciar-sesion'>
      <h1>Iniciar sesión</h1>
      <form className='form' onSubmit={handleLogin}>
        <TextInput placeholder={'Correo electrónico'} onChange={(e) => setEmail(e.target.value)} />
        <TextInput type={'password'} placeholder={'Contraseña'} onChange={(e) => setPassword(e.target.value)} />
        <Button type={'submit'} value={'Iniciar sesión'} />
        {error && <p className='error'>{error}</p>}
        <p>¿No tienes cuenta? <a href='#'>Crear una</a></p>
      </form>
    </div>
  )
}

export default IniciarSesion
