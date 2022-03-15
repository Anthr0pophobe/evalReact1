
const ArticleList = (articleListe) => {
const {title, content} =articleListe;
  return (
    <div>
        <div >
        <h3>{title}</h3>
        <br/>
        <p>{content}</p>
    </div>
    </div>
  )
};

export default ArticleList