import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './page.css'


export const Page = ( { match } ) => {
    const id = match.params.id;
    const [ page, setPage ] = useState( null );
    const [ comments, setComments ] = useState( null );
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const [ commentsUrl, setCommentsUrl ] = useState( undefined );
    useEffect(() => {
        fetch(url)
        .then(res=> {
            return res.json();
        })
        .then(data => {
            setPage(data);
        })
    }, [url])

    useEffect(() => {
        if(commentsUrl) {
            fetch(commentsUrl)
            .then(res=> {
                return res.json();
            })
            .then(data => {
                setComments(data);
            })
        }
   
    }, [commentsUrl])

    const showComments = () => {
        setCommentsUrl(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }

    if(!page){return (<>Loading post...</>)} 
    return (
        <>
            <h2>{page.title}</h2>
            <p>{page.body}</p>
            <ul className = 'comments-list'>{
                comments?(comments.map(comment => {
                    return (
                        <li key = {comment.id} className = 'comment'>
                            <b>Comment {comment.id} by user {comment.email}</b>
                            <p>Name: {comment.name}</p>
                            <p>{comment.body}</p>
                        </li>
                    )
                })):<input type = 'button' value = 'Show comments' onClick = {showComments}></input> 
            }</ul>
        </>
    )
}