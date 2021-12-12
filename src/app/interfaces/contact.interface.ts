
export interface Contact{
    id: string, 
    name: string,  
    estado: boolean,
    contacto:Det[]
}

interface Det{
    id: string, 
    img: string,
    nombre: string, 
    cargo: string,
    celular: string,
    correo: string  
}

