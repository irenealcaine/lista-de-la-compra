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

export const defaultItems = {
  Esenciales: ["Aceite de oliva", "Aceite de girasol", "Sal", "Azúcar", "Huevos"],
  Frutas: ["Manzanas", "Plátanos", 'Tomates'],
  Verduras: ["Berenjenas", "Lechuga"],
  Carnes: ["Pechugas de pollo", "Lomo"],
  Pescados: ["Merluza"],
  Lácteos: ["Leche semidesnatada", "Queso rallado", "Queso en polvo"],
  Conservas: ["Berberechos", "Mejillones"],
  Despensa: ["Lentejas"],
  Salsas: ["Mayonesa", "Ketchup", "Mostaza"],
  Especias: ["Ajo en polvo", "Perejil", "Orégano"],
  Mascotas: ["Comida de perro", "Comida de gato", "Arena de gato"],
  Limpieza: ["Lejía"],
  Baño: ["Crema de dientes", 'Gel', 'Champú'],
};
