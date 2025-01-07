import { useState } from "react";
import Breadcrumb from "./breadcrumb";
import ProductCard from "./ProductCard";
import useProductList from "../utils/useProductList";
import Shimmer from "./Shimmer";
const Products = () => {

	const [openBrandCategory, setOpenBrandCategory] = useState("")

	const [filterCategory, setFilterCategory] = useState("") 
	const [filterProduct, setfilterProduct] = useState("") 
	const [parentCategory, setParentCategory] = useState("") 


	const toggleBrandCategory = (index) => {
		setFilterCategory("")
		setOpenBrandCategory( (prev) =>({
			...prev,
			[index]: !prev[index]
		}))
	}

	const products = useProductList(filterCategory, filterProduct);


	console.log("products:", products);
	console.log("filterCategory:", filterCategory);
	
    return products ? (
        <>
            <Breadcrumb title="Products" />
            <section className="ls s-pt-xl-40 s-pb-xl-70 s-pt-lg-30 s-pb-lg-60 s-py-md-20 s-py-15 c-gutter-30">
				<div className="container">
					<div className="row">
						<aside className="col-lg-5 col-xl-3 order-lg-1">
							{/* <div className="widget widget_product_search"> */}
								{/* <h3 className="widget-title">Search</h3> */}
								{/* <form role="search" className="woocommerce-product-search" action="/">
									<label className="screen-reader-text" htmlFor="woocommerce-product-search-field-widget">
										Search for:
									</label>
									<input type="search" id="woocommerce-product-search-field-widget" className="search-field" placeholder="Search" name="search" />						
								</form> */}
							{/* </div> */}

							<div className="widget woocommerce widget_product_categories">
								<h3 className="widget-title">Categories</h3>
                				
								<ul className=""  id="myUL">
									{products.map((productCategory, categoryIndex) => 
										// console.log("productCategory", productCategory)
										(
											
											<li key={categoryIndex}>
												{
													(
														<div onClick={ () => productCategory.child_level_categories?.length > 0 ?toggleBrandCategory(categoryIndex) :  setFilterCategory(productCategory.id) }>
															 - {productCategory.category_name}
														</div>
													)
												}
												
												{openBrandCategory[categoryIndex] &&  productCategory.child_level_categories.length > 0 && (
													<ul>
														{productCategory.child_level_categories?.map((childCategory, childIndex) => (
															<li key={`${childCategory.id}`} className= { (filterCategory && childCategory.id_parent == productCategory.id && childCategory.id == filterCategory) ? 'active-filter': "" }>
																<div onClick={ () => { 
																	setFilterCategory(childCategory.id); 
																	setParentCategory(productCategory.id) 
																	}
																}>
																	{childCategory.category_name}
																</div>
															</li>
														))}
													</ul>)
												} 
											</li>
											
										)
									)}
								</ul>
								<a className="btn btn-gradient small-btn" onClick={ (e) => {
									setOpenBrandCategory("")
									setFilterCategory("")
									setfilterProduct("")
								}}>Reset</a>
							</div>
						</aside>
						<main className="col-lg-7 col-xl-9 order-lg-2">
							<nav className="woocommerce-pagination">
								<ul className="page-numbers" id="Pagination1">
								</ul>
							</nav>
						    <br />
							<div>
								<div className="products-selection">
									<p className="woocommerce-result-count" id="woocommerce-result-count">
										</p>
									<form className="woocommerce-ordering" method="get">
										
									</form>
								</div>
								<ul className="products columns-3" id="products1" data-filters=".gallery-filters" style={{    "justifyContent": "flex-start"}}>
									{
										products ? (products.map((productCategory) => {
											// console.log("productCategory", productCategory.child_level_categories.length)
											// productCategory.products?.map((product) => {
												if (productCategory.child_level_categories?.length > 0) {
													return productCategory.child_level_categories.map((childCategory, childIndex) => {
														return childCategory?.products?.map( (product) => {
															return <ProductCard key={`${product.id}-${childIndex}`} product={product} />
														})
													});
												} else {
													return productCategory.products?.map((product) => {
														return <ProductCard key={`${product.id}`} product={product} />;
													})
												}
											// })
											}
										) ) : <><h4 style={ {textAlign:"center"} }>Loading......</h4></>
									}
								</ul>
							</div> 
						</main>
					</div>

				</div>
			</section>
        </>
    ) : <><Breadcrumb title="Products" /><Shimmer /></>;
}

export default Products