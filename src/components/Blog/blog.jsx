import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react'
import './blog.css'
import pattern from '../../assets/pat.jpg'
const Blog = () => {
    const blogPosts = [
        {
          title: "The Rise of Luxury E-Commerce: Trends and Insights",
          src:'https://www.nogin.com/wp-content/uploads/2023/09/Nogin-Blog-LuxuryFashionBrands-Header.png',
          summary: "Explore the latest trends and insights in the luxury e-commerce market. Discover how luxury brands are adapting to the digital age, leveraging technology to enhance customer experiences, and what the future holds for online luxury retail."
        },
        {          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDI1Civj94zR7vX44zPFCpZu4bLivzhWCzYgg7XNmvwAl1U7l91WB3epYMnAYIc2OqaPE&usqp=CAU',

          title: "Creating a High-End User Experience for Luxury Websites",
          summary: "Learn about the key elements that contribute to a high-end user experience on luxury commerce websites. From sophisticated design and intuitive navigation to personalized services and exclusive content, find out how to cater to the discerning tastes of luxury consumers."
        },
        {          src:'https://zoomintolife.com/wp-content/uploads/2022/12/BRANDING-AGENCY-MISSISSAUGA-AND-OAKVILLE.png',

          title: "Marketing Strategies for Luxury E-Commerce Brands",
          summary: "Delve into effective marketing strategies tailored for luxury e-commerce brands. Understand the importance of storytelling, exclusivity, and brand heritage in engaging affluent customers and building lasting brand loyalty."
        },
        {          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXS60F_b1ZQq8RvUQcnifPNUqnsMgSBjJ_4CaSnBgekjm4JqG4tPljChWgL7Jz3EazImI&usqp=CAU',

          title: "Case Studies: Successful Luxury E-Commerce Websites",
          summary: "Analyze case studies of successful luxury e-commerce websites. See how top brands like Gucci, Louis Vuitton, and Rolex have crafted their online presence, utilized social media, and employed innovative technologies to stand out in the competitive luxury market."
        }
      ];
      
  return (<div className='main-blogs'>
 <h1 >Popular Blogs</h1>

 
    <div  className='blogContainer'>
      {blogPosts.map((post) => (
        <div key={post.id}  className='blogPost'>
          <img src={post.src}className='img'/>
          <h2 className='title'>{post.title}</h2>
          <p className='content'>{post.summary}</p>
        </div>
        
      ))}
    </div>
    </div>
    
  
      
   
  )
}

export default Blog
