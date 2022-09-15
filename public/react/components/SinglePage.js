import React from "react";
import { Page } from "./Page";


export const SinglePage = ({wikipage, backToList, deleteList})=>{

    (wikipage ? console.log(wikipage) : null);

    return <>{
        <div>
            <h2>
                {wikipage.title}
            </h2>
            <p>
                <strong>Author:</strong>{wikipage.author.name}
            </p>
            <p>
                {wikipage.content}
            </p>
            <p>
                <strong>Tags:</strong>
            </p>
            {wikipage.tags.map((tag, idx)=>(<p key ={idx}> {tag.name}</p>))}
            <button onClick={()=> backToList()}>Back to wiki List</button>
            <button onClick={()=> deleteList(wikipage.slug)}>Delete</button>
        </div>
    }
    
    </>
}