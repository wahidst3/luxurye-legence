import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './Detail.css'
import Button from '../../components/Allproducts/Button';
import { Link } from 'react-router-dom';
import Back from'../../assets/arrow-left-solid.svg'
const products = [
  {
    id: 1,
    title: 'Luxury Silk Dress',
    description: 'A beautiful silk dress perfect for evening events. This dress offers a blend of elegance and comfort, making it an ideal choice for any formal occasion. The luxurious silk fabric drapes beautifully, enhancing the natural curves of the body. Available in a range of stunning colors, this dress is designed to make a statement. Perfect for weddings, galas, and other special events.',
    price: '$1500',
    imageUrl: 'https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvOWVcL2JkXC84YlwvMjEwMDAwNjQzNjg5MV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjoyNDAwLCJmaXQiOiJpbnNpZGUifSwid2VicCI6eyJxdWFsaXR5Ijo5MCwibG9zc2xlc3MiOmZhbHNlLCJmb3JjZSI6dHJ1ZX19fQ==',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Midnight Blue', 'Ruby Red', 'Emerald Green']
  },
  {
    id: 2,
    title: 'Diamond Necklace',
    description: 'An elegant diamond necklace with a stunning design. Crafted with the finest diamonds, this necklace sparkles with every movement. The intricate design ensures that each diamond is showcased to its best advantage. Perfect for special occasions or as a luxurious gift. This necklace is sure to become a treasured piece in any jewelry collection.',
    price: '$5000',
    imageUrl: 'https://www.naturaldiamonds.com/wp-content/uploads/2023/05/EPD_AUC_Sothebys-Magnificent-Geneva-May_necklace_IMG_1x1.jpg?w=1080',
    sizes: ['One Size'],
    colors: ['Diamond White']
  },
  {
    id: 3,
    title: 'Luxury Lipstick Set',
    description: 'A set of luxurious lipsticks in various shades. Each lipstick in this set is formulated to provide long-lasting color and hydration. The rich pigments ensure a bold look that lasts all day. The elegant packaging makes this set a perfect gift for any makeup lover. Available in a range of shades to suit any occasion, from everyday wear to special events.',
    price: '$120',
    imageUrl: 'https://m.media-amazon.com/images/I/91wVsCmF8DL._AC_UF1000,1000_QL80_.jpg',
    sizes: ['One Size'],
    colors: ['Assorted Shades']
  },
  {
    id: 4,
    title: 'Designer Heels',
    description: 'High-end designer heels with exquisite craftsmanship. These heels are designed to provide both style and comfort, making them perfect for any occasion. The sleek design and high-quality materials ensure that they stand out in any crowd. Available in a range of sizes to ensure the perfect fit. Perfect for adding a touch of elegance to any outfit.',
    price: '$800',
    imageUrl: 'https://hannabigail.com/cdn/shop/products/product-image-1432327436.jpg?v=1643990902&width=2048',
    sizes: ['5', '6', '7', '8', '9', '10'],
    colors: ['Black', 'Nude', 'Red']
  },
  {
    id: 5,
    title: 'Luxury Fragrance',
    description: 'A unique fragrance that captivates and mesmerizes. This luxury perfume is crafted with the finest ingredients to ensure a long-lasting scent. The elegant bottle design adds a touch of sophistication to any vanity. Perfect for everyday wear or special occasions. This fragrance is sure to leave a lasting impression.',
    price: '$300',
    imageUrl: 'https://wwd.com/wp-content/uploads/2023/12/Untitled-1.jpeg?w=1000&h=563&crop=1',
    sizes: ['50ml', '100ml'],
    colors: ['Clear']
  },
  {
    id: 6,
    title: 'Gold Bracelet',
    description: 'A stunning gold bracelet with intricate details. This bracelet is designed to add a touch of elegance to any outfit. The high-quality gold ensures a luxurious look and feel. Perfect for special occasions or as a timeless addition to any jewelry collection. This bracelet is sure to become a favorite piece.',
    price: '$2000',
    imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20231004/Z1ho/651c8382ddf779151917611a/-473Wx593H-466658498-gold-MODEL5.jpg',
    sizes: ['One Size'],
    colors: ['Gold']
  },
  {
    id: 7,
    title: 'Designer Handbag',
    description: 'A timeless piece of craftsmanship. This designer handbag is made with the finest materials to ensure both durability and style. The classic design makes it a versatile accessory that can be paired with any outfit. Perfect for everyday use or special occasions. This handbag is a must-have for any fashion lover.',
    price: '$2999',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF37uJ0wyAYZNfBDG0RCj3e-fDmIO0Pr8DsNW_IluYJisjeXNGQY_O6hkRqXX7MznOw0&usqp=CAU',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Beige']
  },
  {
    id: 8,
    title: 'Designer Sunglasses',
    description: 'Stylish sunglasses with UV protection. These designer sunglasses are crafted with high-quality materials to ensure durability and style. The sleek design and UV protection make them perfect for any sunny day. Available in a range of colors to suit any style. These sunglasses are a must-have accessory for any fashion-forward individual.',
    price: '$400',
    imageUrl: 'https://5.imimg.com/data5/GK/KL/UO/ANDROID-36864709/product-jpeg-500x500.jpg',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tortoiseshell']
  },
  {
    id: 9,
    title: 'Luxury Foundation',
    description: 'A high-end foundation for flawless skin. This luxury foundation is formulated to provide long-lasting coverage and a natural finish. The lightweight formula ensures comfortable wear throughout the day. Available in a range of shades to match any skin tone. Perfect for achieving a flawless complexion.',
    price: '$80',
    imageUrl: 'https://www.byrdie.com/thmb/QHjruB2aMfBS7CZwHpJ62Kj8Pe8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byr-full-coverage-foundations-tout-update-c96f27cb28024deabd3425f2501ca3ac.jpg',
    sizes: ['30ml'],
    colors: ['Assorted Shades']
  },
  {
    id: 10,
    title: 'Leather Boots',
    description: 'Premium leather boots with a sleek design. These boots are crafted with high-quality leather to ensure both durability and style. The sleek design makes them perfect for any occasion, from casual to formal. Available in a range of sizes to ensure the perfect fit. These boots are a must-have for any wardrobe.',
    price: '$750',
    imageUrl: 'https://static-01.daraz.pk/p/f2d0919080fc182e1cb2d90890ccc39c.jpg_750x400.jpg_.webp',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'Brown']
  },
  {
    id: 11,
    title: 'Luxury Perfume',
    description: 'A luxurious perfume with a long-lasting scent. This fragrance is crafted with the finest ingredients to ensure a captivating aroma. The elegant bottle design adds a touch of sophistication to any vanity. Perfect for everyday wear or special occasions. This perfume is sure to become a favorite in any fragrance collection.',
    price: '$350',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:700/1*nOStuWuObLfaBP-SyGYdJw.png',
    sizes: ['50ml', '100ml'],
    colors: ['Clear']
  },
  {
    id: 12,
    title: 'Pearl Earrings',
    description: 'Classic pearl earrings for an elegant look. These earrings are crafted with high-quality pearls to ensure a timeless style. The simple yet elegant design makes them perfect for any occasion. Available in a range of sizes to suit any preference. These earrings are a must-have for any jewelry collection.',
    price: '$1500',
    imageUrl: 'https://www.francesca.com.au/cdn/shop/files/LULU_WORN_2.jpg?v=1708400451',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['White']
  }
];


const  Detail = () => {
  const {id}=useParams();
  const [product, setProduct] = useState({});
useEffect(()=>{
  const filterproduct=products.filter((product)=>product.id==id)
  setProduct(filterproduct[0])
},[id])

const [count,setCount]=useState(0)
  return (
    <div style={{height:'100vh',width:'100%',overflow:'hidden'}}> 
        <div className='header'><Link to="/"><span><img src={Back} alt="" /></span></Link> <h1 >{product.title}</h1></div>  
      <div className="p-detail">
        <div className="p-detail__image">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="p-detail__info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>Price</h3>
          <p className='price'>{product.price}</p>
          <h3>Size Available</h3>
        <p className='price'>Size</p>
        <h3>Quantity</h3>
        <div className='quantity'> 
          <button onClick={()=>setCount(count>0 ?count-1:0)}>-</button><p contentEditable="false">{count} </p><button  onClick={()=>setCount(count+1)}>+</button>

        </div>
        <Button/>
        </div>
      </div>
    </div>
  )
}
export default Detail