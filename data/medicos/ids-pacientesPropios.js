const pacientesIds = [
  {
    medico: "lbueso@medicatel.red",
    ids: ["14345", "14338", "14292"],
  },
  {
    medico: "drgarciacasanova@hotmail.com",
    ids: ["14291", "14568", "14674", "13514"],
  },
  {
    medico: "luis.mazzoni.ch@gmail.com",
    ids: ["14652", "14653", "14633"],
  },
];

let indiceMedico = Math.floor(Math.random() * pacientesIds.length);
let paciente;

const medico = pacientesIds[indiceMedico].medico;
let listaPacientes = [];

for (let i = 0; i < pacientesIds.length; i++) {
  if (i === indiceMedico) {
    continue;
  } else {
    for (paciente of pacientesIds[i].ids) {
      let ids = paciente;
      listaPacientes.push(ids);
    }
  }
}

export { medico, listaPacientes };
