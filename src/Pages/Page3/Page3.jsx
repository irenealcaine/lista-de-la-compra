import Button from "../../Components/Button/Button";
import "./Page3.scss";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase-config';

const Page3 = () => {
  return (
    <div className="page3">
      <h1>Perfil</h1>
      <Button onClick={() => signOut(auth)} value={'Cerrar sesión'} />
    </div>
  );
};

export default Page3;
