import Form from "../src/form"
import ArticleList from "../src/articleList"
import { Button } from "@mui/material"
import { useState, useEffect } from "react"

const Home = () => {
  const [form, setForm] = useState(false);

    const [data , setData] = useState({
      articleListe : [
          {title : "Article 1", content : "Description 1"},
          {title : "Article 2", content : "Description 2"}
      ]
  })
  
  const displayForm = () => {
    if(form === false){
      setForm(true);
    }
    else{
      setForm(false);
    }
  }

  return (
    <>
    <Button
    onClick={displayForm}
    >Afficher
    </Button>
    {form? <Form setData={setData}/>: '' }
    
    <ArticleList articleListe={data.articleListe}/>
    </>
  )
}

export default Home