import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

const Basket = ({ onBuy = function () {} }) => {
  const [sepet, setSepet] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const localData = localStorage.getItem("basket");
    localData !== null && setSepet(JSON.parse(localData));
    let innerTotal = 0.0;
    localData !== null &&
      JSON.parse(localData).map((i) => {
        innerTotal += parseFloat(
          i.price.replace(" TL", "").replaceAll(".", "").replaceAll(",", ".")
        );
      });
    setTotal(innerTotal);
  }, []);

  return (
    <div className="w-full h-full pr-10 pl-10">
      <Navbar itemCount={sepet.length} />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-10 py-4" />
            <th className="px-10 py-4">Ürün İsmi</th>
            <th className="px-10 py-4">Marka</th>
            <th className="px-10 py-4">Fiyat</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {sepet.map((i, index) => (
            <tr key={index.toString()}>
              <td className="px-10">
                <img src={i.imgUrl} className="w-20" />
              </td>
              <td className="px-10 text-center">{i.name}</td>
              <td className="px-10 text-center">{i.firm}</td>
              <td className="px-10 text-center">{i.price}</td>
              <td />
            </tr>
          ))}
          <tr>
            <td className="px-10"></td>
            <td className="px-10"></td>
            <td className="px-10 text-gray-900 font-bold text-xl">TOTAL</td>
            <td className="px-10 text-gray-900 font-bold text-xl">
              {total.toString().replace(".", ",")} TL
            </td>
            <td className="px-10 text-gray-900 font-bold text-xl">
              <div
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => onBuy()}
              >
                SATIN AL
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
