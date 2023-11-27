import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className='descriptionbox'>  
         <div className='description-navigator'>
          <div className='description-nav-box'> Description</div>
          <div className='description-nav-box fade'> Reviews (122) </div>
         </div>
         <div className='descriptionbox-description'>
         <p>An e-commerce website is an online platform that facilitates buying and selling of products or services on the internet
            serves as a virtual marketplaces where buisness and individual showcase their products, and interact with the customer 
            and conduct transactaions without the need of physical presence. E-commerce website has gained immense popularity due to
            their conventional accessibility, and the global reach they offer.
         </p>
         <p>
          E-commerce website typically display products or services and detailed description, images, prices, and any available 
          varities (e.g., sizes, colors ). Each product has its own dedication with their relevant information.
         </p>
         </div>
        </div>
    )
}


export default DescriptionBox