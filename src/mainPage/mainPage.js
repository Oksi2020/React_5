import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

import './mainPage.css';


export const MainPage = () => {

    const [ posts, setPosts ] = useState( null );
    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(()=> {

        fetch(url)
        .then(res=> {
            return res.json();
        })
        .then(data=> {
            setPosts(data);
        })

    }, [url] )

    if(!posts) {
        return(<>Loading all posts...</>)
    }

    return (
        <>
            <h1> Main page</h1>
            <ul>
            {
                posts.map(post => {
                    return (
                        <li className = 'post' key = {post.id}>
                            <Link to = {`/posts/${post.id}`}> <p>{post.title}</p> </Link> 
                            {post.body}
                        </li> 
                    )

                })
            }</ul>
        </>
    )
}