import React from 'react'
import './Search.css'
import search from '../../../assets/magnifying-glass-solid.svg'
const Search = () => {
    const val='4';
    const filterList=[
       {filter:"Jeans",
       },
       {filter:"Shirt",
       },
       {filter:"Cream",
       },
       {filter:"Hand Bag",
       },
       {filter:"Man",
       },
       {filter:"Woman",
       },
       {filter:"Kids",
       },
       {filter:"Makeup",
       },

    ]

  return (<>
    <div className='search'>
        <div className="field">
      <input type="text" placeholder='Search Here' className='Search box'/><button><img src={search} /></button></div>
    </div>
    <div className="filters">
{filterList.map((item,index)=>(
    <button key={index}>{item.filter}</button>
))}
    </div>
    </>
  )
}

export default Search
