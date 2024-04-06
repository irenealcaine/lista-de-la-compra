import { PiAddressBookBold, PiAlarmBold } from "react-icons/pi";
import { CgDatabase, CgTrello } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

export const navbarItems = [
  {
    name: "Lista de la compra",
    slug: "lista-de-la-compra",
    icon: <CiViewList />,
  },
  {
    name: "Agregar elemento",
    slug: "agregar-elemento",
    icon: <FaPlus />,
  },
  {
    name: "Perfil",
    slug: "perfil",
    icon: <FaRegUser />,
  },
  // {
  //   name: "Page 4",
  //   slug: "page4",
  //   icon: <CgTrello />,
  // },
];

export const categories = [
  {
    label: 'Esenciales',
    value: 'esenciales'
  },
  {
    label: 'Frutas',
    value: 'frutas'
  },
  {
    label: 'Verduras',
    value: 'verduras'
  },
]
