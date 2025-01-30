import { Link } from "react-router-dom"
import { assetPath } from "../utils/constance"

const PortfolioCard = ({portfolio}) => {
    return <>
        <div className={`col-xl-4 col-sm-6 ${portfolio.filterType}`}>
            <div className="vertical-item item-gallery content-absolute text-center ds">
                <div className="item-media">
                    <img src= {assetPath("images/gallery/full/"+portfolio.imageName)} alt="img" />
                </div>
                <div className="item-content">
                    <div className="links-wrap">
                    <a className="link-zoom photoswipe-link" title="" href= {assetPath("images/gallery/full/"+portfolio.imageName)}></a>
                    {/* <Link to="/products"><i className="link-anchor" title=""/></Link> */}
                    </div>
                    <h6>
                    <a href="gallery-single.html">{portfolio.desc}</a>
                    </h6>
                </div>
            </div>
        </div>
    </>
}

export default PortfolioCard