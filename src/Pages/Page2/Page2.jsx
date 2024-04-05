import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import TextInput from "../../Components/TextInput/TextInput";
import "./Page2.scss";

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
  return (
    <div className="agregar-elemento">
      <h1>Agregar elemento</h1>
      <form className="form">
        <TextInput placeholder={'Nombre del producto'} />
        <Select options={options} />
        <Button value={'Agregar'} />
      </form>
    </div>
  );
};

export default Page2;
