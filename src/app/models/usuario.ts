import { Role } from "./role";

export interface Usuario{
    rut: string;
    nombre: string;
    password: string;
    role: Role[];
    correo: string;
    fecha_nacimiento: string;
}
