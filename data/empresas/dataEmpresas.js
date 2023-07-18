import {
    empresaAleatoria,
    nombreEmpleadoRandom,
    indiceEmpleadoRandom,
    resultadoRandom
} from "../../helpers/empresas/empresasArreglo"


const datosEmpresa = {
    empresaNombre: empresaAleatoria.empresaNombre,
    empresaIndice: empresaAleatoria.empresaIndice,
    empresaEmpleado: nombreEmpleadoRandom,
    empleadoIndice: indiceEmpleadoRandom
  };

const datosResultado = {
    resultadoNombre: resultadoRandom.resultadoNombre,
    resultadoIndice: resultadoRandom.indiceCard
};

export {
    datosEmpresa,
    datosResultado
}
