import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

export const HomePage = () => {

    return(
        <h1>Home Page</h1>
    )
}

export const List = () => {
    let url = 'https://jsonplaceholder.typicode.com/users';

    const [ users, setUsers ] = useState( null )
    useEffect(()=> {
        fetch(url)
            .then( resp =>{
                console.log(resp);
                return resp.json();
            })
            .then(data => {
                console.log(data);

                setUsers( data );
            })
    }, [url] )

    if(!users) {
        return(<>Loading...</>)
    }

    return(
        <>
            <h1>List</h1>
            <ul>
                {
                    users.map(user =>{
                        return(
                            <li key = {user.id}><Link to = {`/list/:${user.id}`}>{user.name}</Link></li>
                        )
                    })
                }
            </ul>

        </>
        
    )
}

export const About = () => {

    return(
        <h1>About</h1>
    )
}
export const Contacts = () => {

    return(
        <h1>Contacts</h1>
    )
}
export const Item = ( { match, history } ) => {

    let id = match.params.id.slice(1);
    const [ user, setUser ] = useState( null );

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            if(res.status === 404) {
                history.push('/notFoundPage');
            }
            return res.json();
        })
        .then( data => {
            setUser( data );
        })
    },[id])

    if(!user) {
        return (<>Loading user...</>);
    }

    return(
        <>
            <h1>User: {user.name}</h1>
            <p>User name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </>
    )
}

export const notFoundPage = () => {
    return(
        <h2>
            404...
        </h2>
    )
}