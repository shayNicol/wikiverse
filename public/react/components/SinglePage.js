import React from 'react';
import { Page } from './Page';

export const SinglePage = ({wikipage, apiURL, backToList , Deleteitems, fetchPages}) => {
	
	(wikipage ? console.log(wikipage) : null);
    async function Deleteitems(){
    const response = await  fetch(`${apiURL}/wiki/${wikipage.slug}`,
    {method: "DELETE"})
        const data = await response.json();
        fetchPages()
      }

	return <>
	    <h2>{wikipage.title}</h2>
				<p><strong>Author:</strong>{wikipage.author.name}</p>
				<p>{wikipage.content}</p>
				<p><strong>Tags:</strong></p>
				{wikipage.tags.map((tag, idx) => (<p key={idx}>{tag.name}</p>))}
                
				<button onClick={() => backToList()}>Back to Wiki List</button>
			
				<button onClick={Deleteitems}>Delete</button>
			


	</>
} 