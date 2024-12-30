import Intro from '../../components/Intro';

export default function ResearchIntro() {
  const imageDetails = {
    path: "/assets/me.jpeg",
    altText: "Hannah Dell"
  }
  
  const content = (
    <div>
      <p>
      I am a postdoc in the <a href="https://www.math.uni-bonn.de/">Mathematical Institute at the University of Bonn</a>, in the working group of <a href="https://www.math.uni-bonn.de/~huybrech/">Daniel Huybrechts</a>. I'm funded by the ERC synergy grant <a href="https://www.erc-hyperk.org/">HyperK</a>.
      </p>

      <p>I did my PhD at the University of Edinburgh under the supervision of <a href="https://www.maths.ed.ac.uk/~abayer/">Arend Bayer</a>.</p>

      <p><b>Email:</b> hdell (at) math (dot) uni-bonn (dot) de</p>

      <p><b>Address:</b> Raum 3.003, Endenicher Allee 60, 53115 Bonn</p>

      <p><b>Pronouns:</b> she/they</p>

      <h3>Research Interests</h3>

      <p>I am interested in algebraic geometry, in particular derived categories of coherent sheaves, Bridgeland stability conditions, and group actions (on varieties and categories).</p>
    </div>

  )
  return (
    <>
      <Intro content={content} imageDetails={imageDetails}/>
    </>
  )
}