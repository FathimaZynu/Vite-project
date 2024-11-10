import React, { useEffect,useState } from 'react'
import './Post.css'

function Post() {

    let [post,setPost] = useState()

    let colors =[
        '#FFB3BA', 
        '#FFDFBA', 
        '#FFFFBA', 
        '#BAFFC9', 
        '#BAE1FF',
        '#FFC3A0', 
        '#FF677D', 
        '#D4A5A5', 
        '#a398c9', 
        '#FFD700'  
    ];

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {

            return res.json()
        }).then((data) => {
            console.log(data);
            setPost(data)
        }).catch((err) => {
            console.log(err);
        })
    },[])
  return (
    <div className='container'>
        {
            post?.map((obj,index) =>{

                return(
                    <div>
                    <h1 className='title' style={{
                            backgroundColor: colors[index % colors.length]
                        }}>{obj.title}</h1>
                    <p className='body'>{obj.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Post