

const estado = [
    "Enviada",
    "Pagada"
]

let randEstado = Math.floor(Math.random() * estado.length);
const EstadoRandom = estado[randEstado];

const aseguradora = [
    "Medicatel",
    "Assa",
    "Crefisa",
    "expedite",
    "deliver",
    "optimize"
]


let randAseguradora = Math.floor(Math.random() * aseguradora.length);
const AseguradoraRandom = aseguradora[randAseguradora];


export {
    EstadoRandom,
    AseguradoraRandom
}