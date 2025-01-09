import { useParams } from "react-router-dom"
import Breadcrumb from "./breadcrumb"
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
            <section className="ls fw-team-template-default single s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60">
				<div className="container" style={ { marginTop: "0px !important"}}>
					<div className="row">
                    <div className="col-12">
							<div className="row">
								<div className="col-12">
									<div className="side-item">
										<div className="item-media rounded" id="product-image" style={ {display:"inline-grid"} }>
                                            {
                                                productInfo?.images?.map((image) => (
                                                        <img 
                                                        key= {image.id}
                                                        src={`https://ssscientific-bucket.s3.eu-north-1.amazonaws.com/${image.image_url}`} 
                                                        // src={image.image_url} 
                                                        style={ { height: "200px", width: "200px"} }
                                                        />
                                                    )
                                                )
                                            }
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
											<p id="product-description">
												{ productInfo?.description }
											</p>
											{
                                                (productInfo?.accessories.length > 0) && (
                                                    <div>
                                                    <h2>Specifications</h2>
                                                    <ul style={ { listStyle:"disc" } }>
                                                        {
                                                            productInfo?.accessories?.map( (accessory) => 
                                                                <li key={accessory.id}>
                                                                    <b>{accessory.name}</b>
                                                                    <div>
                                                                        <ul style={ { listStyle:"circle" } }>
                                                                            <li>
                                                                                weight: {accessory.weight}
                                                                            </li>
                                                                            <li>
                                                                                Capacity: {accessory.capacity}
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