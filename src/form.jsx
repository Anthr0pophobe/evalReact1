import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Form = (props) => {
    const {setData} = props; 
    let [form, setForm] = useState({title : "" , content : ""});

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const {title, content} = form ;
        if(title.length > 2 && content.length > 2){
            setData((prevData) => {
                prevData.articleListe.push({title : e.target.title, content : e.target.content})
                return { ...prevData , articleListe : prevData.articleListe  }
            })
            setData={
                ...form,
                title, 
                content
            };
            setForm({title : "" , content : ""});
        }else {
            alert("Compléter les deux champs pour valider la création.")
        }
    };

    const handleChange = (e) => {
        const { name , value } = e.target ;
        setForm({...form , [name]: value});
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField
              value={form.title}
              name="title"
              placeholder="Titre de l'article"
              onChange={handleChange}
            />
            <TextField
              multiline
              name="content"
              value={form.content}
              placeholder="Contenu de l'article"
              onChange={handleChange}
            />
            <Button type='submit'>créer</Button>
        </form>
    </div>
  )
}

export default Form