import { useState, useEffect } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';


export default function Article({ item, isCollapsible }) {
    
  const [isOpen, setIsOpen] = useState(isCollapsible ? false : true);

  // Rerender MathJax on change
  useEffect(() => {
    if (isOpen && window.MathJax) {
      window.MathJax.typeset();
    }
  }, [isOpen, item.abstract]);

  return (
    <div className="article-container" key={item.id}>
        <div className="article-top">
          <div className="article-info">
            {isCollapsible && <button className="article-toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>}
            <h3 className="article-heading">{item.name}</h3>
            {item.showYear && <span className="article-detail">({new Date(item.date).toLocaleString("en-GB", { year: "numeric" })})</span>}
            {item.arxiv && (<a className="article-link" href={item.arxiv} target="_blank" rel="noopener noreferrer">(arXiv)</a>)}
            {item.pdf && (<a className="article-link" href={`/papers/${item.pdf}`} target="_blank" rel="noopener noreferrer">(PDF)</a>)}
          </div>
          <div className="article-journal">
            {item.journalStatus && 
              item.journalUrl 
                ? <h5><em><a className="article-link" href={item.journalUrl} target="_blank" rel="noopener noreferrer">{item.journalStatus}</a></em></h5> 
                : <h5><em>{item.journalStatus}</em></h5>
            }
          </div>
        </div>
        {item.collaborators && <h4><em>Joint with {item.collaborators}</em></h4>}
        {isOpen &&
          <MathJaxContext>
            <div
              className="article-abstract"
              dangerouslySetInnerHTML={{ __html: item.abstract }} // note data must come from safe source
            />
          </MathJaxContext>
        }
      </div>
  );
};