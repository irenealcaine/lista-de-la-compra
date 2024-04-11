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
  Verduras: ["Berenjenas", "Lechuga", 'Patatas', 'Cebollas'],
  Carnes: ["Pechugas de pollo", "Lomo", 'Costillas'],
  Pescados: ["Merluza", 'Sardinas'],
  Panadería: ['Pan', 'Pan de molde', 'Pan de hamburguesa', 'Pan de perritos'],
  Lácteos: ["Leche semidesnatada", 'Leche entera', "Queso rallado", "Queso en polvo", 'Queso de untar'],
  Conservas: ["Berberechos", "Mejillones", 'Guisantes', 'Maíz'],
  Despensa: ["Lentejas", 'Cereales'],
  Salsas: ["Mayonesa", "Ketchup", "Mostaza", 'Salsa barbacoa'],
  Especias: ["Ajo en polvo", "Perejil", "Orégano", 'Comino'],
  Mascotas: ["Comida de perro", "Comida de gato", "Arena de gato", 'Comida de pájaro'],
  Limpieza: ["Lejía", 'Estopajos', 'Bayetas', 'Quitagrasas'],
  Baño: ["Crema de dientes", 'Gel', 'Champú', 'Mascarilla'],
};
