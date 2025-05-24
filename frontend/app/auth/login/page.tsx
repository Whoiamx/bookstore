import AuthLayout from "../layout";

export default function LoginPage() {
  return (
    <AuthLayout title="Iniciar Sesión">
      <form>
        {/* Aquí tu formulario de login */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </AuthLayout>
  );
}
