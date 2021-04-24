import Head from "next/head";
import styles from "../styles/Home.module.css";
import Product from "../components/product";
import ProductJSON from "../productsJSON";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
export default function Home() {
  const [filters, setFilters] = useState([
    { type: 0, data: [] },
    { type: 1, data: [] },
  ]);
  const [sepet, setSepet] = useState([]);
  const [activeFilter, setActiveFilter] = useState({
    type: -1,
    name: "",
  });
  const [products, setProducts] = useState([]);

  const updateFilter = (filterType, filterName) => {
    if (
      (activeFilter.type === filterType && activeFilter.name === filterName) ||
      filterType === -1
    ) {
      setActiveFilter({
        type: -1,
        name: "",
      });
      setProducts(ProductJSON);
    } else {
      setActiveFilter({
        type: filterType,
        name: filterName,
      });
      setProducts(
        filterType === 0
          ? ProductJSON.filter((o) => o.category === filterName)
          : ProductJSON.filter((o) => o.firm === filterName)
      );
    }
  };

  const updateSepet = (item) => {
    localStorage.setItem("basket", JSON.stringify([...sepet, item]));
    setSepet([...sepet, item]);
  };

  useEffect(() => {
    const firms = [];
    const categories = [];
    ProductJSON.map((i) => {
      if (firms.indexOf(i.firm) === -1) firms.push(i.firm);
      if (categories.indexOf(i.category) === -1) categories.push(i.category);
    });
    setProducts(ProductJSON);
    setFilters([
      { type: -1, data: ["Tümünü Göster"] },
      { type: 0, data: categories },
      { type: 1, data: firms },
    ]);
    const localData = localStorage.getItem("basket");
    setSepet(JSON.parse(localData));
  }, []);

  return (
    <div className="w-full h-full pr-10 pl-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar itemCount={sepet.length} />
      <div className={"grid grid-cols-5"}>
        <div className={"col-span-1"}>
          {filters.map((i, index) => {
            return (
              <div key={index + "1111111" + i.toString()}>
                <div className={"text-gray-900 font-bold text-2xl pt-3 pb-3"}>
                  {i.type === 0
                    ? "Kategoriler"
                    : i.type === 1
                    ? "Markalar"
                    : ""}
                </div>
                {i.data.map((t, index) => {
                  return (
                    <div
                      key={index.toString() + t.toString()}
                      className={"text-gray-700 text-sm"}
                      onClick={() => {
                        updateFilter(i.type, t);
                      }}
                    >
                      {t}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/*Product Array*/}
        <div className={"col-span-4"}>
          <div className={"flex flex-wrap"}>
            {products.map((i, index) => {
              return (
                <Product
                  key={i.toString() + index.toString()}
                  onClick={() => {
                    updateSepet(i);
                  }}
                  title={i.firm}
                  details={i.name}
                  price={i.price}
                  imgUrl={i.imgUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
