import React, { useContext } from 'react';
import '../styles/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../components/item/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shop-category-indexSort'>
        <p>
          <span>Showing 1-12 </span> out of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort by  <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
      {all_product.map((item, i) => {
          console.log('item.category:', item.category); // Log the category of each item
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
