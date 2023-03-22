import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const[user,setUsers]=useState([])

  const getUser=async()=>{

    const response=await fetch(url);
    const users=await response.json();
    setUsers(users)             // this will create an infinite loop so our browser will crash because it initiate re-rendening then useEffect is called then again setUsers() invoke re-rendering and again useEffect is calle dthis keeps on going 
    console.log(users);
  }
  useEffect(()=>{
    getUser()
  },[])       // only once when the page renders
  return (<>
    <h3>Github User</h3>

    <ul className='users'>

      {user.map((user)=>{
        const{id,login,avatar_url,html_url}=user;
        return (
          <li key={id}>
            <img src={avatar_url}  alt={login}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        )
      })}

    </ul>
  </>)
};

export default UseEffectFetchData;
