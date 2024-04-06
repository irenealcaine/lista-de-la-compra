import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";
import { useNavigate } from 'react-router-dom';
import "./Page2.scss";
import { useState } from "react";

const Page2 = () => {

  const options = [
    {
      label: 'Categoría',
      value: '',
      hidden: true
    },
    {
      label: 'aaa',
      value: 'aaa'
    },
    {
      label: 'bbb',
      value: 'bbb'
    },
    {
      label: 'ccc',
      value: 'ccc'
    },
  ]

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title: titleValue,
        slug: slugValue,
        content: value,
        date: Timestamp.now().toDate()
      });
      setValue('');
      // navigate('/')
    } catch (error) {
      console.error('Error al guardar el post:', error);
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
        {console.log(category)}
        <Button value={'Agregar'} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Page2;
