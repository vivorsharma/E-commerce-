import react, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ProductDisplay from '../components/product display/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProduct from '../components/relatedproduct/RelatedProduct';

const Products = () => {
    const {all_product} = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return(
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProduct />
        </div>
    )
}

export default Products