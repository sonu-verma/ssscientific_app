import { useParams } from "react-router-dom"
import Breadcrumb from "./Breadcrumb"
import useProductPage from "../utils/useProductPage";
import ShimmerProductPage from "./ShimmerProductPage";

const ProductPage = ({ product }) => {
    const { slug } = useParams();

    const productInfo = useProductPage(slug)
    return (
        <>
            <Breadcrumb title={ productInfo?.name } />
            {
                productInfo ? (
            <section className="ls fw-team-template-default single s-pt-xl-60 s-pt-lg-60 s-pt-md-60 s-pt-60 s-pb-xl-60 s-pb-lg-60 s-pb-md-60 s-pb-60">
				<div className="container" style={ { marginTop: "0px !important"}}>
					<div className="row">
                    <div className="col-12">
							<div className="row">
								<div className="col-12">
									<div className="side-item product-info-div">
										<div className="item-media rounded" id="product-image" style={ {display:"inline-grid"} }>
                                            {
                                                productInfo?.images?.map((image) => (
                                                        <img 
                                                        key= {image.id}
                                                        src={`${image.image_url}`} 
                                                        // src={image.image_url} 
                                                        style={ { height: "200px", width: "200px"} }
                                                        />
                                                    )
                                                )
                                            }

                                            <a 
                                                className='btn btn-gradient small-btn' 
                                                target='_blank' 
                                                href={`${productInfo?.default_document?.document_url}`} 
                                                style={ {marginTop: "30px"}}
                                            >   
                                                Download Catalog    
                                            </a>
										</div>
										
										<div className="item-content">
											<h2 id="product-title">
												{ productInfo?.name }
											</h2>
										    ({productInfo?.category?.category_name})
											<p className="small-text color-main">
											</p>
											<div className="divider-30 hidden-below-md"></div>
											<div className="divider-30 hidden-above-md"></div>
                                            <p className="product-short-description" dangerouslySetInnerHTML={{ __html: productInfo?.short_description }} >
											</p>
											<p className="product-description"  dangerouslySetInnerHTML={{ __html: productInfo?.description }} >
											</p>

                                            { 
                                                productInfo?.item_accessories && (
                                                    <div className="product-accessories">
                                                        <span className="page-title">Accessories</span>
                                                        <p>{productInfo?.item_accessories}</p>
                                                    </div>
                                                )
                                            }

                                            {
                                               productInfo?.accessories.length > 0 && (
                                                    <div className="product-specifications">
                                                        <span className="page-title">Specifications</span>
                                                        {
                                                            (productInfo?.accessories.length > 0) && (
                                                                <ul style={ { listStyle:"disc" } }>
                                                                    {
                                                                        productInfo?.accessories?.map( (accessory) => 
                                                                            <li key={accessory.id}>
                                                                                <b>{accessory.name}</b>
                                                                                <div>
                                                                                    <ul style={ { listStyle:"circle" } }>
                                                                                        <li>
                                                                                            Capacity: {accessory.capacity}
                                                                                        </li>
                                                                                        <li>
                                                                                            weight: {accessory.weight}
                                                                                        </li>
                                                                                        <li>
                                                                                            Overall Dimensions: {accessory.overall_dimensions}
                                                                                        </li>
                                                                                        <li>
                                                                                            Shipping Dimensions: {accessory.shipping_dimensions}
                                                                                        </li>
                                                                                        <li>
                                                                                            Shipping Weight: {accessory.shipping_weight}
                                                                                        </li>
                                                                                        <li>
                                                                                            Overall Dimensions: {accessory.overall_dimensions}
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                            
                                            
                                         
											
											<span className="social-icons">
												<a href="#" className="fab fa-facebook-f" title="facebook"></a>
												<a href="#" className="fab fa-telegram-plane" title="telegram"></a>
												<a href="#" className="fab fa-instagram" title="instagram"></a>
												<a href="#" className="fab fa-linkedin-in" title="linkedin"></a>
											</span>
											<div className="divider-30 hidden-below-md"></div>
											<div className="divider-30 hidden-above-md"></div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
                ):
                <ShimmerProductPage />
            }
        </>
    )
}

export default ProductPage