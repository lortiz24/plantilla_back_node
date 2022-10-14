
import ContactosModels from "../models/ContactosModels"

import UsuariosModels from "../models/UsuariosModels"





export const existUsuarioById = async(id:string) => {
    const existeUsuario= await UsuariosModels.findById(id)
    if (!existeUsuario) {
        throw new Error(`No existe un usuario con id: ${id} `)
    }else{
        return true
    }
}
export const existeContactoById = async(id:string) => {
    const existeContacto=  await ContactosModels.findById(id)
    if (!existeContacto) {
        throw new Error(`No existe un contacto con id: ${id} `)
    }else{
        return true
    }
}
