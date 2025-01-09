import { useEffect, useState } from "react"
import { API_URL } from "./constance";

const useProductPage = (slug) =>  {
    const [productDetail, setProductDetail] = useState(null)
    useEffect(() => {
        fetchProductDetails()
    }, [slug])

    const fetchProductDetails = async () => {
        try {
            const productInf = await fetch(`${API_URL}product/${slug}`);
            
            if (!productInf.ok) {
                throw new Error(`HTTP error! Status: ${productInf.status}`);
            }
    
            const json = await productInf.json();
            
            // Example: Update state with product details
            setProductDetail(json.product);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    return productDetail;
}

export default useProductPage
