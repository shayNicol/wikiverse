import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { SinglePage } from "./SinglePage";
import { Form } from "./Form";

import apiURL from "../api";

const initialInputs = {
  title: "",
  content: "",
  name: "",
  email: "",
  tags: "",
};
export const App = () => {
  const [page, setPage] = useState({});
  const [data, setData] = useState(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [input, setInput] = useState(initialInputs);
  const [showArticle, setShowArticle] = useState(null);
  const fetchPage = async (slug) => {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const data = await response.json();
      setShowArticle(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  const [pages, setPages] = useState([]);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  function backToList() {
    setShowArticle(null);
  }
  function addWiki() {
    setIsAddingArticle(!isAddingArticle);
  }
  async  function DeleteList(slug){
	const response = await  fetch(`${apiURL}/wiki/${slug}`,
	
{method: "DELETE"})
	  
	  const data = await response.json();
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      {showArticle ? (
        <SinglePage fetchPages={fetchPages} apiURL={apiURL} wikipage={showArticle} backToList={backToList} />
      ) : isAddingArticle ? (
        <Form  />
      ) : (
        <PagesList addWiki={addWiki}  pages={pages} fetchPage={fetchPage} />
      )}
    </main>
  );
};