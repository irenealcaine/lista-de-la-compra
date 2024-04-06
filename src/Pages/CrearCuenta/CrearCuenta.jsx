import './CrearCuenta.scss'

import TextInput from '../../Components/TextInput/TextInput'
import Button from '../../Components/Button/Button'

import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const CrearCuenta = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleCreate = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/iniciar-sesion')
    } catch (error) {
      setError("Error");
      console.log(error)
    }
  };

  return (
    <div className='crear-cuenta'>
      <h1>Crear cuenta</h1>
      <form className='form' onSubmit={handleCreate}>
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
