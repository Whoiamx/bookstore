interface Props {
  setModalLogOut: any;
}

export const LogOutPopUp = ({ setModalLogOut }: Props) => {
  const handleLogOut = async () => {
    const request = await fetch("http://localhost:3232/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", //
    });
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
