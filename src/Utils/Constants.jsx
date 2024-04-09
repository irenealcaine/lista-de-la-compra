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
];

export const categories = [
  {
    label: 'Esenciales',
    value: 'Esenciales'
  },
  {
    label: 'Frutas',
    value: 'Frutas'
  },
  {
    label: 'Verduras',
    value: 'Verduras'
  },
  {
    label: 'Carnes',
    value: 'Carnes'
  },
  {
    label: 'Pescados',
    value: 'Pescados'
  },
  {
    label: 'Lácteos',
    value: 'Lácteos'
  },
  {
    label: 'Conservas',
    value: 'Conservas'
  },
  {
    label: 'Despensa',
    value: 'Despensa'
  },
  {
    label: 'Salsas',
    value: 'Salsas'
  },
  {
    label: 'Especias',
    value: 'Especias'
  },
  {
    label: 'Mascotas',
    value: 'Mascotas'
  },
  {
    label: 'Limpieza',
    value: 'Limpieza'
  },
  {
    label: 'Baño',
    value: 'Baño'
  },
  {
    label: 'Otros',
    value: 'Otros'
  },
]
