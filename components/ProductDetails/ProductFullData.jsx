import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { StoreContext } from "../context/storeContext";

function ProductFullData() {


  const { productList } = useContext(StoreContext); 
  const { id } = useParams();

  const [produtIdFileter, setprodutIdFileter] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setprodutIdFileter(productList.find((p) => p.id == id));
    setloading(false);
  }, [id, productList]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {produtIdFileter && (
        <div>
          <h1>{produtIdFileter.title}</h1>
          <p>{produtIdFileter.description}</p>
          <img src={produtIdFileter.image} alt={produtIdFileter.title} />
          <h2>Price: {produtIdFileter.price}</h2>
        </div>
      )}
    </>
  );
}

export default ProductFullData;