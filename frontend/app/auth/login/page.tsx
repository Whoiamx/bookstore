import Link from "next/link";
import AuthLayout from "../layout";

export default function LoginPage() {
  return (
    <AuthLayout title="Iniciar Sesión">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-700 transition duration-200 font-semibold"
        >
          Entrar
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tenés una cuenta?
          <Link
            href="/auth/new-account"
            className="ml-1 text-blue-600 hover:underline font-medium"
          >
            Crear cuenta
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
