import "./AgregarElemento.scss";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";

import { db } from '../../Firebase/firebase-config';
import { arrayUnion, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

import { categories } from "../../Utils/Constants";
import { UserAuth } from '../../Context/AuthContext'

const AgregarElemento = () => {

  const defaultOption = [
    {
      label: 'Categoría',
      value: '',
      hidden: true
    }
  ]

  const options = defaultOption.concat(categories)

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const { user } = UserAuth()

  const handleReset = () => {
    setName('')
    setCategory('')
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && category) {

      const userUID = user.uid;
      const categoryDocRef = doc(db, "usuarios", userUID, "categorias", category);
      try {
        const docSnap = await getDoc(categoryDocRef);

        const newItem = { id: uuid(), name: name, toBuy: false };

        if (docSnap.exists()) {
          await updateDoc(categoryDocRef, {
            items: arrayUnion(newItem)
          });
        } else {
          await setDoc(categoryDocRef, {
            category: category,
            items: [newItem]
          });
        }
        handleReset()
        setMessage('Producto agregado correctamente');
      } catch (error) {
        console.error('Error:', error);
        setMessage(error)
      }
    } else {
      setMessage('Tanto el nombre cómo la categoría del producto son obligatorios')
    }
  };

  return (
    <div className="agregar-elemento">
      <h1>Agregar elemento</h1>
      <form className="form">
        <TextInput
          placeholder={'Nombre del producto'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          options={options}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Button value={'Agregar'} onClick={(e) => handleSubmit(e)} />

        {message && message}
      </form>
    </div>
  );
};

export default AgregarElemento;
