import photo from "../assets/me.jpeg"

export default function Home() {
  return (
    <div className="container">
      <div className="flex items-center justify-start">
        <main className="py-4 space-y-4">
          <p>
            <img 
              src={photo} 
              alt="Hannah Dell" 
              className="img-me"  
            />

            I am a postdoc in the <a href="https://www.math.uni-bonn.de/">Mathematical Institute at the University of Bonn</a>, in the working group of <a href="https://www.math.uni-bonn.de/~huybrech/">Daniel Huybrechts</a>. I'm funded by the ERC synergy grant <a href="https://www.erc-hyperk.org/">HyperK</a>.
          </p>

          <p>I did my PhD at the University of Edinburgh under the supervision of <a href="https://www.maths.ed.ac.uk/~abayer/">Arend Bayer</a>.</p>

          <p><b>Email:</b> hdell (at) math (dot) uni-bonn (dot) de</p>

          <p><b>Address:</b> Raum 3.003, Endenicher Allee 60, 53115 Bonn</p>

          <p><b>Pronouns:</b> she/they</p>

          <h3>Research Interests</h3>

          <p>I am interested in algebraic geometry, in particular derived categories of coherent sheaves, Bridgeland stability conditions, and group actions (on varieties and categories).</p>

          <p>In my first project, I studied the stability manifold of (smooth projective) surfaces which are free abelian quotients. One approach is via group actions on triangulated categories, another is via Le Potier functions:</p>

          <ul className="bullet">
            <li><em>Stability Conditions on Free Abelian Quotients</em>, <a href="https://arxiv.org/abs/2307.00815">arXiv</a>.</li>
          </ul>

          <p>I am also thinking about derived categories of cyclic covers, and the question of whether such a cover can be recovered (up to isomorphism) from its Kuznetsov component:</p>

          <ul className="bullet">
            <li><em>Cyclic covers: Hodge theory and categorical Torelli theorems</em>, joint with Augustinas Jacovskis and Franco Rota, <a href="https://arxiv.org/abs/2310.13651">arXiv</a>.</li>
          </ul>

          <p>I have also been investigating how stability conditions behave under actions of fusion categories (=<em>tensor categories with extra structure</em>). A crucial example is that, if a finite group G acts on a category D, then the corresponding G-equivariant category is a module category over Rep(G) (which is a fusion category). As an application, we generalise a result from my first project to non abelian groups.</p>

          <ul className="bullet">
            <li><em>Fusion-equivariant stability conditions and Morita duality</em>, joint with Edmund Heng and Anthony Licata, <a href="https://arxiv.org/abs/2311.06857">arXiv</a>.</li>
          </ul>

          <h3>Other Activities</h3>

          <p>I previously organised <a href="https://sites.google.com/view/gaelxxx/home">GAeL XXX</a> (University of Warwick, July 2023), <a href="https://sites.google.com/view/gaelxxix/home">GAeL XXIX</a> (Université Paris-Saclay, May 2022), and the Edinburgh Geometry seminar (<a href="https://hodge.maths.ed.ac.uk/?page_id=36">EDGE</a>).</p>

          <p>When I'm not doing maths, I like to hike, climb and kayak.</p>

        </main>

      </div>
    </div>
  )
}