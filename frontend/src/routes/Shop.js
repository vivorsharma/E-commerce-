import Hero from "../components/hero/Hero"
import NewCollections from "../components/new collections/NewCollections"
import NewsLetter from "../components/news letter/NewsLetter"
import Offers from "../components/offer/Offers"
import Popular from "../components/popular/Popular"

const Shop = () => {
    return(
        <div>
            <Hero />
            <Popular /> 
            <div style={{paddingTop:"100px"}}>
            <Offers />
            </div>
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop