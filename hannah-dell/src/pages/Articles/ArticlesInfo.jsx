import data from '../../data/articles.json'; 

export default function ArticlesInfo() {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const articles = data.map(item => {
    return (
      <div className="article-container" key={item.id}>
        <div className="article-info">
          <h3 className="article-heading">{item.name}</h3>
          {item.arxiv && (<a className="article-link" href={item.arxiv} target="_blank" rel="noopener noreferrer">(arXiv)</a>)}
          {item.pdf && (<a className="article-link" href={`/papers/${item.pdf}`} target="_blank" rel="noopener noreferrer">(PDF)</a>)}
        </div>
        {item.collaborators && <h4><em>Joint with {item.collaborators}</em></h4>}
        <div
          className="article-abstract"
          dangerouslySetInnerHTML={{ __html: item.abstract }} // note data must come from safe source
        />
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