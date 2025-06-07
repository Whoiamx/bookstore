export interface Books {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string;
  categoria?: string;
  slug?: string;
  cantidad?: number;
  precio?: number;
}

export interface Producto {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string;
  categoria?: string;
  slug?: string;
  cantidad?: number;
  precio?: number;
}

export interface DirectionUser {
  nombre: string;
  apellido: string;
  direccion: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
  telefono: string;
  email: string;
}
