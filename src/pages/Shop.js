import React from "react";
import { getItemList, uploadItem } from "../components/db";
import { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getItemList();
      console.log(res);
      setItems(res);
    })();
  }, []);
  return (
    <>
      <h3>Shop</h3>
      {items && items.map((item) => <h4 key={item.name}>{item.name}</h4>)}
      <button onClick={() => uploadItem()}>Upload</button>
    </>
  );
}

export default Shop;
