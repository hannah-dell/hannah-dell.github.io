import data from '../../data/research.json'; 
import Article from '../../components/Article';

export default function ResearchInfo() {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const articles = data.map(item => {
    return (
      <Article item={item} key={item.id} />
    )
  })

  return (
    <div className="body-container py-4">
      <h2>Articles</h2>
      {articles}
    </div>
  )
}