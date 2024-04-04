import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";
import "./Page2.scss";

const Page2 = () => {

  const options = [
    {
      label: 'aaaaaaa',
      value: 'aaaaaa'
    },
    {
      label: 'bbb',
      value: 'bbbbbbb'
    },
  ]
  return (
    <div className="page2">
      <h1>Agregar elemento</h1>
      <p>Nombre</p>
      <TextInput />
      <p>Categoría</p>
      <Select options={options} />
    </div>
  );
};

export default Page2;
