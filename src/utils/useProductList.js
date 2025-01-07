import { useEffect, useState } from "react"
import { API_URL } from "./constance";

const useProductList = (filterCategory, filterProduct) => {
    console.log("filterCategory 1: ", filterCategory)
    const [products, setProducts] = useState(null)

    useEffect(() => {
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

export default useProductList