import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";
import "./Page2.scss";

const Page2 = () => {

  const options = [
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
  return (
    <div className="page2">
      <h1>Agregar elemento</h1>
      <p>Nombre</p>
      <TextInput />
      <p>Categoría</p>
      <Select options={options} />
      <Button value={'Agregar'} />
    </div>
  );
};

export default Page2;
