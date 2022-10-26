import faker from "faker"
import React, { useState, useEffect } from 'react';
import Story from "./Story"
import { useSession } from "next-auth/react";

function Stories({ randomUsersResults }) {
    const [suggestions,setSuggestions ] = useState([]);
 
    useEffect(() => {
        const suggestions = [...Array(30)].map((_, i) =>  (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        )); 
        setSuggestions(suggestions);
        console.log(suggestions);
    }, []); 
    

    const { data: session } = useSession();
    console.log(session);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
           rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

            {session && (
                <Story  img={session.user.image} username={session.user.username} />
            )}
            {suggestions?.map(profile => (
                <Story key={profile.username} 
                  img={profile.avatar}
                  username={profile.username} />
            ))} 
        </div>
    )
}

export async function getServerSideProps() { 
    console.log("step1 ");
    let randomUsersResults = [];
  
    try {
      console.log("step2");
      const res = await fetch(
        "https://randomuser.me/api/?results=30&inc=name,login,picture"
      ); 
      randomUsersResults = await res.json();
      console.log(randomUsersResults);
 
    } catch (e) {
      randomUsersResults = [];
    } 
  
    return {
      props: { 
        randomUsersResults,
      },
    };
  }


export default Stories
