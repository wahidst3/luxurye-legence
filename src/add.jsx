/*import { doc, setDoc } from 'firebase/firestore';
import { db } from './components/firebase'; // Adjust the import path as necessary

const addProducts = async () => {
  try {
    const products = [
        {
            id:6 ,
              title: 'Gold Bracelet',
              description: 'A stunning gold bracelet with intricate details.',
              price: 20,
              catogery:'jewllery',
              imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20231004/Z1ho/651c8382ddf779151917611a/-473Wx593H-466658498-gold-MODEL5.jpg'
          },
          {id:7,
              title: 'Designer Handbag',
              description: 'A timeless piece of craftsmanship.',
              price: 29,
              catogery:'j',
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF37uJ0wyAYZNfBDG0RCj3e-fDmIO0Pr8DsNW_IluYJisjeXNGQY_O6hkRqXX7MznOw0&usqp=CAU'
          },
         
          {id: 8,
              title: ' Sunglasses',
              description: 'Stylish sunglasses with UV protection.',
              price: 40,
              catogery:'jewllery',
              imageUrl: 'https://5.imimg.com/data5/GK/KL/UO/ANDROID-36864709/product-jpeg-500x500.jpg'
          },
          {id: 9,
              title: 'Luxury Foundation',
              description: 'A high-end foundation for flawless skin.',
              price: 80 ,
                     catogery:'jewllery',
              imageUrl: 'https://www.byrdie.com/thmb/QHjruB2aMfBS7CZwHpJ62Kj8Pe8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byr-full-coverage-foundations-tout-update-c96f27cb28024deabd3425f2501ca3ac.jpg'
          },
          {id: 10,
              title: 'Leather Boots',
              description: 'Premium leather boots with a sleek design.',
              price: 75,
              catogery:'jewllery',
              imageUrl: 'https://static-01.daraz.pk/p/f2d0919080fc182e1cb2d90890ccc39c.jpg_750x400.jpg_.webp'
          },
          {
            id: 11,
              title: 'Luxury Perfume',
              description: 'A luxurious perfume with a long-lasting scent.',
              price: 35,
              catogery:'j',
              imageUrl: 'https://miro.medium.com/v2/resize:fit:700/1*nOStuWuObLfaBP-SyGYdJw.png'
          }
      // Add other products here...
    ];

    // Loop through the products array and add each product as a separate document
    for (const product of products) {
      const productId = `product-${Date.now()}` // Unique ID with timestamp and random string
      await setDoc(doc(db, 'products', productId), product);
      console.log('Document written with ID:', productId);
    }

    alert('All products added successfully!');
  } catch (error) {
    console.error('Error adding products:', error);
    alert(`Error: ${error.message}`);
  }
};

// Call the function to add the products
addProducts();
export default addProducts;*/
