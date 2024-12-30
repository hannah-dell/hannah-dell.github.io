import data from '../../data/articles.json'; 

export default function ArticlesInfo() {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const articles = data.map(item => {
    return (
      <div key={item.id}>
        <div>
          <h3>{item.name}</h3>
          {item.arxiv && (<a href={item.arxiv} target="_blank" rel="noopener noreferrer">(arXiv)</a>)}
          {item.pdf && (<a href={`/papers/${item.pdf}`} target="_blank" rel="noopener noreferrer">(PDF)</a>)}
        </div>
        {item.collaborators && <h4>Joint with {item.collaborators}</h4>}
      </div>
    )
  })

  return (
    <div className="body-container py-4">
      <h2>Articles and Abstracts</h2>
      {articles}
    </div>
  )
}