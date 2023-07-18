import { medicosMedicatel } from "../../helpers/pacientes/pacientes";

let randIndicedpMedico = Math.floor(Math.random() * medicosMedicatel.length);

export const datosmedicoMedicatel = {
  nombre: medicosMedicatel[randIndicedpMedico].nombre,
  correo: medicosMedicatel[randIndicedpMedico].correo,
  password: medicosMedicatel[randIndicedpMedico].password,
};
