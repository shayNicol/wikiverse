import React, {useState, useEffect} from 'react';
import { SinglePage } from "./SinglePage"

import apiURL from '../api';

export const Page = ({page,fetchPage}) => {
  console.log(page)



  
    
    return (<>
    <h3 onClick={() => fetchPage (page.slug)}>{page.title}</h3>
    {}
  </>)
} 
	