const infoItems = [
  {
    title: "Métodos de envío",
    description:
      "Envíos en el día. Envío gratis en compras superiores a $35.000",
  },
  {
    title: "Puntos Extra!",
    description: "Sumá puntos para canjear en nuestras sucursales",
  },
  {
    title: "Promociones",
    description: "Conocé nuestras promos bancarias",
  },
  {
    title: "Sitio 100% seguro",
    description: "Tu compra está protegida en todo momento.",
  },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto  py-10">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
