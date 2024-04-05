import React from 'react'
import TextInput from '../../Components/TextInput/TextInput'
import './IniciarSesion.scss'

const IniciarSesion = () => {
  return (
    <div className='iniciar-sesion'>
      <h1>Iniciar sesión</h1>
      <form className='form'>
        <TextInput placeholder={'Correo electrónico'} />
        <TextInput type={'password'} placeholder={'Contraseña'} />
        <p>¿No tienes cuenta? <a href='#'>Crear una</a></p>
      </form>
    </div>
  )
}

export default IniciarSesion
