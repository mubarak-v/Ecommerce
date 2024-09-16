import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/contextData";
import { ProductDetail } from "../context/productDetails";
import { useParams } from "react-router-dom";

function ProductFullData() {
  // const { productList, setProductList } = useContext(ProductContext); // Access the product list
const productList=[{
  id: 5,
  name: "Apple iPhone 12",
  price: 999.99,
  offer: 20,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, dui id posuere mattis, metus velit feugiat felis, id dictum ligula purus nec urna. Donec tincidunt, mauris eget faucibus hendrerit, arcu mi tristique lectus, at lobortis lectus nunc vel neque.",
  image: "https://example.com/image1.jpg",
}]
  const { id } = useParams();

  const [produtIdFileter, setprodutIdFileter] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // setprodutIdFileter(productList.find((p) => p.id == id));
    setprodutIdFileter(productList[0])
    setloading(false);
    console.log("productList", productList);
  }, []);
  console.log(produtIdFileter);

  if (!produtIdFileter) {
    return <h1>no</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{/* {produtIdFileter} */}</h1>
    </>
  );
}

export default ProductFullData;
