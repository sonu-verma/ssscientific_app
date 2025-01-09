import { Link, useParams } from "react-router-dom"

const ProductCard = ({ product }) => {
    return (
        <>
            <li className="product Petroleum Testing Equipments NPM 450 - PMCC - Automated item-gallery vertical-item" name="NPM 450 - PMCC - Automated">
                <div className="product-inner">
                    <center>
                        <Link to={`/product/`+product.slug} style={ {display: "inline-flex"}}>
                            {
                                product?.images?.map( (image) => 
                                    <img 
                                        src={`https://ssscientific-bucket.s3.eu-north-1.amazonaws.com/` + image.image_url} 
                                        // src={`${image.image_url}`} 
                                        alt="Product_Image" key={image.id} 
                                        style={ {width: "100%", height: "300px"} }
                                    />
                                )
                            }
                            
                        </Link>
                        <h2 className="woocommerce-loop-product__title">
                            <center><Link to={`/product/`+product.slug}>{product?.name}</Link></center>
                        </h2>
                       <div style={{ display: "inline-grid", lineHeight: "30px" }}>
                            <Link to={`/product/`+product.slug}>View More Details</Link>
                            <a 
                                href={`https://ssscientific-bucket.s3.eu-north-1.amazonaws.com/` + product?.default_document?.document_url} 
                                target="_blank"
                            >Download Catalog</a>
                        </div>
                    </center>
                </div>
            </li>
        </>
    )
}

export default ProductCard