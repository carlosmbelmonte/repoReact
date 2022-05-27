const productos = [
    {
        id: 1,
        nombre: "Balizas",
        precio : 1000,
        imagen : "01_balizas.png",
        stock: 10
    },
    {
        id: 2,
        nombre : "Bornes",
        precio : 2000,
        imagen : "02_bornes.png",
        stock: 20
    },
    {
        id: 3,
        nombre : "PLC",
        precio : 3000,
        imagen : "03_plc.png",
        stock: 30
    },
    {
        id: 4,
        nombre : "Fuente",
        precio : 4000,
        imagen : "04_fuentes.png",
        stock: 40
    }
];

const productoBaliza ={
    id: "00",
    nombre: "Balizas",
    precio : 1000,
    imagen : "01_balizas.png",
    stock: 10,
    descripcion:"Los mejores bornes del mundo, para que su tablero de control cumpla los máximos estandares de calidad. Amplia variedad de modelos disponibles de acuerdo a cada necesidad. Cumpliendo las exigencias electricas para cada caso."
}

export default productos
export {productoBaliza}