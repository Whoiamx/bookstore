import Link from "next/link";
import AuthLayout from "../layout";

export default function NewAccountPage() {
  return (
    <AuthLayout title="Crear Nueva Cuenta">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-700 transition duration-200 font-semibold"
        >
          Crear Cuenta
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tenés una cuenta?
          <Link
            href="/auth/login"
            className="ml-1 text-blue-600 hover:underline font-medium"
          >
            Iniciar sesión
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
