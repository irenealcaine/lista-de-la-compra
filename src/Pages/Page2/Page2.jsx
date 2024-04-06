import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";
import { useNavigate } from 'react-router-dom';
import "./Page2.scss";
import { useState } from "react";

import { db } from '../../Firebase/firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { categories } from "../../Utils/Constants";

const Page2 = () => {

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
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "productos"), {
        name: name,
        category: category,
        toBuy: false
      });
      setName('');
      setCategory('');
      setMessage('Mu bien')
      // navigate('/')
    } catch (error) {
      console.error('Error:', error);
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

export default Page2;
