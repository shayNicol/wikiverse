import React from 'react';
import { Page } from './Page';

export const PagesList = ({ pages, fetchPage, addArticle}) => {
	return<>
	<h1>WikiVerse</h1>
	<h2>An interesting 📚</h2>
	{
		pages.map((page, idx)=>{
			return<Page page={page} key={idx} fetchPage={fetchPage}/>
		})
	}
	<button onClick={()=>addArticle()}>
		Create a New page
		</button>	
	</>
};
