import Button from "../../Components/Button/Button";
import "./Page3.scss";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase-config';
import { UserAuth } from '../../Context/AuthContext'

const Page3 = () => {

  const { user } = UserAuth()
  console.log(user.auth.currentUser.email)

  return (
    <div className="page3">
      <h1>Perfil</h1>

      <p>Correo electrónico</p>
      <p>{user.auth.currentUser.email}</p>

      <Button onClick={() => signOut(auth)} value={'Cerrar sesión'} />
    </div>
  );
};

export default Page3;
