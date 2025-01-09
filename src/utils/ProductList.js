import { useEffect, useState } from "react"
import { API_URL } from "./constance";

const ProductList = (filterCategory, filterProduct) => {
    // console.log("filterCategory : ", filterCategory)
    // console.log("filterProduct : ", filterProduct)
    const [products, setProducts] = useState(null)

    useEffect( () => {
        // console.log("fetching product")
        fetchProductList()
    }, [filterCategory, filterProduct]);

    const fetchProductList = async () => {
        // const productLists = await fetch("https://ssscientific.net/ssbackend/api/category-product");
        const productLists = await fetch(`${API_URL}category-product?category=${filterCategory}&product_name=${filterProduct}`);
        const json = await productLists.json();
        setProducts(json)
    }

    return products;
}

export default ProductList