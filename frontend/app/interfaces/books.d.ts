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
  name: string;
  apellido: string;
  direction: string;
  ciudad: string;
  provincia: string;
  postal: number;
  telefono: number;
}
