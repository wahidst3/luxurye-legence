import React from 'react'
import ProductCard from './ProductCard'
import './Products.css'
import Search from './Search/Search';
const products = [
  {
      title: 'Luxury Silk Dress',
      description: 'A beautiful silk dress perfect for evening events.',
      price: '$1500',
      imageUrl: 'https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvOWVcL2JkXC84YlwvMjEwMDAwNjQzNjg5MV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjoyNDAwLCJmaXQiOiJpbnNpZGUifSwid2VicCI6eyJxdWFsaXR5Ijo5MCwibG9zc2xlc3MiOmZhbHNlLCJmb3JjZSI6dHJ1ZX19fQ=='
  },
  {
      title: 'Diamond Necklace',
      description: 'An elegant diamond necklace with a stunning design.',
      price: '$5000',
      imageUrl: 'https://www.naturaldiamonds.com/wp-content/uploads/2023/05/EPD_AUC_Sothebys-Magnificent-Geneva-May_necklace_IMG_1x1.jpg?w=1080'
  },
  {
      title: 'Luxury Lipstick Set',
      description: 'A set of luxurious lipsticks in various shades.',
      price: '$120',
      imageUrl: 'https://m.media-amazon.com/images/I/91wVsCmF8DL._AC_UF1000,1000_QL80_.jpg'
  },
  {
      title: 'Designer Heels',
      description: 'High-end designer heels with exquisite craftsmanship.',
      price: '$800',
      imageUrl: 'https://hannabigail.com/cdn/shop/products/product-image-1432327436.jpg?v=1643990902&width=2048'
  },
  {
      title: 'Luxury Fragrance',
      description: 'A unique fragrance that captivates and mesmerizes.',
      price: '$300',
      imageUrl: 'https://wwd.com/wp-content/uploads/2023/12/Untitled-1.jpeg?w=1000&h=563&crop=1'
  },
  {
      title: 'Gold Bracelet',
      description: 'A stunning gold bracelet with intricate details.',
      price: '$2000',
      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20231004/Z1ho/651c8382ddf779151917611a/-473Wx593H-466658498-gold-MODEL5.jpg'
  },
  {
      title: 'Designer Handbag',
      description: 'A timeless piece of craftsmanship.',
      price: '$2999',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF37uJ0wyAYZNfBDG0RCj3e-fDmIO0Pr8DsNW_IluYJisjeXNGQY_O6hkRqXX7MznOw0&usqp=CAU'
  },
  {
      title: 'Luxury Watch',
      description: 'An exquisite timepiece with a rich heritage.',
      price: '$4999',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Cashmere Sweater',
      description: 'A soft and luxurious cashmere sweater.',
      price: '$600',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Designer Sunglasses',
      description: 'Stylish sunglasses with UV protection.',
      price: '$400',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Foundation',
      description: 'A high-end foundation for flawless skin.',
      price: '$80',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Leather Boots',
      description: 'Premium leather boots with a sleek design.',
      price: '$750',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Perfume',
      description: 'A luxurious perfume with a long-lasting scent.',
      price: '$350',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Pearl Earrings',
      description: 'Classic pearl earrings for an elegant look.',
      price: '$1500',
      imageUrl: 'https://www.francesca.com.au/cdn/shop/files/LULU_WORN_2.jpg?v=1708400451'
  },
  {
      title: 'Designer Wallet',
      description: 'A stylish wallet made from high-quality leather.',
      price: '$600',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Mascara',
      description: 'A high-end mascara for voluminous lashes.',
      price: '$50',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Suede Loafers',
      description: 'Elegant suede loafers for a sophisticated look.',
      price: '$550',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Cologne',
      description: 'A premium cologne with a unique scent.',
      price: '$200',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Ruby Ring',
      description: 'A beautiful ring adorned with a stunning ruby.',
      price: '$4000',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Silk Scarf',
      description: 'A luxurious silk scarf with elegant patterns.',
      price: '$250',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Blush',
      description: 'A high-end blush for a radiant glow.',
      price: '$45',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Leather Jacket',
      description: 'A premium leather jacket with a timeless design.',
      price: '$1500',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Skincare Set',
      description: 'A set of luxurious skincare products for glowing skin.',
      price: '$300',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Gold Earrings',
      description: 'Elegant gold earrings with a modern design.',
      price: '$1200',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Silk Blouse',
      description: 'A luxurious silk blouse perfect for any occasion.',
      price: '$700',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Hair Oil',
      description: 'A premium hair oil for healthy, shiny hair.',
      price: '$60',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Leather Belt',
      description: 'A high-quality leather belt with a sleek design.',
      price: '$200',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Luxury Face Serum',
      description: 'A high-end face serum for youthful skin.',
      price: '$150',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Platinum Cufflinks',
      description: 'Elegant platinum cufflinks for formal occasions.',
      price: '$1800',
      imageUrl: 'https://via.placeholder.com/300'
  },
  {
      title: 'Designer Sandals',
      description: 'Stylish designer sandals for a chic look.',
      price: '$400',
      imageUrl: 'https://via.placeholder.com/300'
  }
];

const Products = () => {
  return (
    <>
    <h1 className='phead'>Trending Products</h1>
    <Search/>
    
    <div className='products'>
    
      {products.map((product, index) => (
        
    <ProductCard key={index} product={product} />
))}
    </div></>
  )
}

export default Products
