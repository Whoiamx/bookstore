// app/components/Footer.tsx
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-4 mt-10 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="text-2xl     font-semibold mb-2">
            Book <span className="text-blue-500">S</span>tore
          </h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Nosotros</Link>
            </li>
            <li>
              <Link href="#">Sucursales</Link>
            </li>
            <li>
              <Link href="#">Retiro en Sucursales</Link>
            </li>
            <li>
              <Link href="#">Puntos Extra</Link>
            </li>
            <li>
              <Link href="#">Gift Card</Link>
            </li>
            <li>
              <Link href="#">Términos y Condiciones</Link>
            </li>
            <li>
              <Link href="#">Ayuda</Link>
            </li>
            <li>
              <Link href="#">Métodos de Envío</Link>
            </li>
            <li>
              <Link href="#">Medios de Pago</Link>
            </li>
            <li>
              <Link href="#">Promociones Bancarias</Link>
            </li>
            <li>
              <Link href="#">Promociones Online</Link>
            </li>
            <li>
              <Link href="#">Cambios y Devoluciones</Link>
            </li>
            <li>
              <Link href="#">Preguntas Frecuentes</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Atención al Cliente</h3>
          <ul className="space-y-1">
            <li>
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/54911288591"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                +54 9 11 2888-4444
              </a>
            </li>
            <li>📞 Teléfono: 0810-33-EXTRA (2020)</li>
            <li>
              📧 Email:{" "}
              <a
                href="mailto:librerias@bookstore.com"
                className="text-blue-600"
              >
                librerias@bookstore.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Dirección */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Dirección</h3>
          <p className="text-gray-700">📍 Avenida Corrientes 372 - CABA</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BookStore. Todos los derechos reservados.
      </div>
    </footer>
  );
};
