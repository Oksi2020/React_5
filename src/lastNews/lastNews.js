import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';



export const LastNews = ({ match }) => {

    const [ posts, setPosts ] = useState( null );
    const limit =  match.params.limit;
    const [ startPosition, setStartPosition ] = useState ( 0 );
    const url  =  `https://jsonplaceholder.typicode.com/posts?_start=${startPosition}&_limit=${limit}` ;
    useEffect(()=> {
        console.log(url)
        fetch(url)
        .then(res=> {
            return res.json();
        })
        .then(data=> {
            setPosts(data);
        })

    }, [url] )

    const showNextPosts = () => {
        setStartPosition(Number(startPosition)+Number(limit));
    }

    if(!posts) {
        return(<>Loading all posts...</>)
    }

    return (
        <>
            <h1> Last News </h1>
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
            <input type = 'button' value = 'Show next posts'  onClick = {showNextPosts}/> 
        </>
    )
}