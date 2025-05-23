import AuthLayout from "../layout";
export default function NewAccountPage() {
  return (
    <AuthLayout title="Crear Nueva Cuenta">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          className="w-full p-2 border border-gray-300 rounded mb-6"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Crear Cuenta
        </button>
      </form>
    </AuthLayout>
  );
}
