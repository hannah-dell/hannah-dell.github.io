import { useEffect } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';


export default function Article(props) {
    
  // Rerender MathJax on change
  useEffect(() => {
    if (props.isOpen && window.MathJax) {
      window.MathJax.typeset();
    }
  }, [props.isOpen, props.item.abstract]);

  return (
    <div className="article-container" key={props.item.id}>
        <div className="article-top">
          <div className="article-info">
            {props.isCollapsible && <button className="article-toggle" onClick={props.handleClick}>{props.isOpen ? "-" : "+"}</button>}
            <h3 className="article-heading">{props.item.name}</h3>
            {props.item.showYear && <span className="article-detail">({new Date(props.item.date).toLocaleString("en-GB", { year: "numeric" })})</span>}
            {props.item.arxiv && (<a className="article-link" href={props.item.arxiv} target="_blank" rel="noopener noreferrer">(arXiv)</a>)}
            {props.item.pdf && (<a className="article-link" href={`/papers/${props.item.pdf}`} target="_blank" rel="noopener noreferrer">(PDF)</a>)}
          </div>
          <div className="article-journal">
            {props.item.journalStatus && 
              props.item.journalUrl 
                ? <h5><em><a className="article-link" href={props.item.journalUrl} target="_blank" rel="noopener noreferrer">{props.item.journalStatus}</a></em></h5> 
                : <h5><em>{props.item.journalStatus}</em></h5>
            }
          </div>
        </div>
        {props.item.collaborators && <h4><em>Joint with {props.item.collaborators}</em></h4>}
        {props.isOpen &&
          <MathJaxContext>
            <div
              className="article-abstract"
              dangerouslySetInnerHTML={{ __html: props.item.abstract }} // note data must come from safe source
            />
          </MathJaxContext>
        }
      </div>
  );
};