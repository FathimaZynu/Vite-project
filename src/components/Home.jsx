// import { useEffect, useState } from "react"



// function Home() {

//     let [show , setShow] = useState(true)

//     let [count,setCount] = useState(0)

//     useEffect(() => {
//         console.log('this is a useEffect');
//     }, [])

//     function hideShow(){

//       if(show === true){
//         setShow(false)
//       } else{
//         setShow(true)
//       }
//     }

//     return (
//       <div style={{border : '1px solid'}}>
//         {show ? <h1>Welcome</h1> : null} 
//         <button onClick={hideShow}>{show ? 'hide' : 'show' }</button>
//       </div>
//     )

//   }

import React from "react";
import './Home.css'

let products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "brand": "SoundWave",
        "price": 99.99,
        "category": "Electronics",
        "stock": 150
    },
    {
        "id": 2,
        "name": "Smartphone Case",
        "brand": "TechGuard",
        "price": 19.99,
        "category": "Accessories",
        "stock": 200
    },
    {
        "id": 3,
        "name": "Bluetooth Speaker",
        "brand": "BassBoom",
        "price": 49.99,
        "category": "Electronics",
        "stock": 75
    },
    {
        "id": 4,
        "name": "Laptop Stand",
        "brand": "ErgoTech",
        "price": 29.99,
        "category": "Office Supplies",
        "stock": 100
    },
    {
        "id": 5,
        "name": "Fitness Tracker",
        "brand": "HealthSync",
        "price": 59.99,
        "category": "Wearables",
        "stock": 50
    },
    {
        "id": 6,
        "name": "Portable Charger",
        "brand": "PowerUp",
        "price": 24.99,
        "category": "Electronics",
        "stock": 120
    },
    {
        "id": 7,
        "name": "Gaming Mouse",
        "brand": "ClickPro",
        "price": 39.99,
        "category": "Gaming",
        "stock": 80
    },
    {
        "id": 8,
        "name": "Water Bottle",
        "brand": "HydraLife",
        "price": 14.99,
        "category": "Outdoor",
        "stock": 200
    },
    {
        "id": 9,
        "name": "Wired Keyboard",
        "brand": "TypeSmart",
        "price": 29.99,
        "category": "Office Supplies",
        "stock": 150
    },
    {
        "id": 10,
        "name": "Virtual Reality Headset",
        "brand": "Immersio",
        "price": 299.99,
        "category": "Gaming",
        "stock": 30
    },
    {
        "id": 11,
        "name": "Smart Watch",
        "brand": "TimeTech",
        "price": 199.99,
        "category": "Wearables",
        "stock" : 60
    },
    {
        "id": 12,
        "name": "Noise-Cancelling Earbuds",
        "brand": "QuietSound",
        "price": 89.99,
        "category": "Electronics",
        "stock": 40
    },
    {
        "id": 13,
        "name": "USB-C Hub",
        "brand": "ConnectPro",
        "price": 39.99,
        "category": "Accessories",
        "stock": 100
    },
    {
        "id": 14,
        "name": "Fitness Resistance Bands",
        "brand": "FitFlex",
        "price": 24.99,
        "category": "Fitness",
        "stock": 150
    },
    {
        "id": 15,
        "name": "Drone with Camera",
        "brand": "SkyVision",
        "price": 499.99,
        "category": "Electronics",
        "stock": 20
    }
]


let Home = () => {
    return (
        <div className="container">{
            products.map((obj, index) => {

                return (
                    <div className="product-card">
                        <h2>{obj.name}</h2>
                        <p>Brand: {obj.brand}</p>
                        <p>Category: {obj.category}</p>
                        <p>Price: {obj.price}</p>
                        <p>Stock: {obj.stock}</p>
                    </div>

                )
            })
        }

        </div>
    )
}

export default Home;