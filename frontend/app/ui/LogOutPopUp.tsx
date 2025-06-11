import { useRouter } from "next/router";

interface Props {
  setModalLogOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogOutPopUp = ({ setModalLogOut }: Props) => {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const res = await fetch("https://bookstore-gxg7.onrender.com/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (res.ok) {
        setModalLogOut(false);

        router.push("/auth/login");
      } else {
        console.error("Error cerrando sesión");
      }
    } catch (error) {
      console.error("Error en logout:", error);
    }
  };

  const handleCancelButton = () => {
    setModalLogOut(false);
  };

  return (
    <div className=" ">
      <p className="mb-4 text-sm">¿Seguro que quieres cerrar sesión?</p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => handleCancelButton()}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition text-sm"
        >
          Cancelar
        </button>
        <button
          onClick={() => handleLogOut()}
          className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition text-sm"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
