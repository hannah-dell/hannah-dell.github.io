import photo from "../assets/me.jpeg"

export default function Home() {
  return (
    <div className="flex items-center justify-start">
      <div className="space-y-4">
        <p>I am a postdoc in the <a className="link" href="https://www.math.uni-bonn.de/">Mathematical Institute at the University of Bonn</a>, in the working group of <a className="link" href="https://www.math.uni-bonn.de/~huybrech/">Daniel Huybrechts</a>. I'm funded by the ERC synergy grant <a className="link" href="https://www.erc-hyperk.org/">HyperK</a>.</p>

        <p>I did my PhD at the University of Edinburgh under the supervision of <a className="link" href="https://www.maths.ed.ac.uk/~abayer/">Arend Bayer</a>.</p>

        <p><b>Email:</b> hdell (at) math (dot) uni-bonn (dot) de</p>

        <p><b>Address:</b> Raum 3.003, Endenicher Allee 60, 53115 Bonn</p>

        <p><b>Pronouns:</b> she/they</p>

        <h3>Research Interests</h3>

        <p>I am interested in algebraic geometry, in particular derived categories of coherent sheaves, Bridgeland stability conditions, and group actions (on varieties and categories).</p>

        <p>In my first project, I studied the stability manifold of (smooth projective) surfaces which are free abelian quotients. One approach is via group actions on triangulated categories, another is via Le Potier functions:</p>

        <ul className="bullet">
          <li><em>Stability Conditions on Free Abelian Quotients</em>, <a className="link" href="https://arxiv.org/abs/2307.00815">arXiv</a>.</li>
        </ul>

        <p>I am also thinking about derived categories of cyclic covers, and the question of whether such a cover can be recovered (up to isomorphism) from its Kuznetsov component:</p>

        <ul className="bullet">
          <li><em>Cyclic covers: Hodge theory and categorical Torelli theorems</em>, joint with Augustinas Jacovskis and Franco Rota, <a className="link" href="https://arxiv.org/abs/2310.13651">arXiv</a>.</li>
        </ul>

        <p>I have also been investigating how stability conditions behave under actions of fusion categories (=<em>tensor categories with extra structure</em>). A crucial example is that, if a finite group G acts on a category D, then the corresponding G-equivariant category is a module category over Rep(G) (which is a fusion category). As an application, we generalise a result from my first project to non abelian groups.</p>

        <ul className="bullet">
          <li><em>Fusion-equivariant stability conditions and Morita duality</em>, joint with Edmund Heng and Anthony Licata, <a className="link" href="https://arxiv.org/abs/2311.06857">arXiv</a>.</li>
        </ul>

        <h3>Other Activities</h3>

        <p>I previously organised GAeL XXX (University of Warwick, July 2023), GAeL XXIX (Université Paris-Saclay, May 2022), and the Edinburgh Geometry seminar (EDGE).</p>

        <p>When I'm not doing maths, I like to hike, climb and kayak.</p>
      </div>
      <img 
        src={photo} 
        alt="Hannah Dell" 
        className="w-[310px] h-[416px] rounded-md"  
      />
    </div>
  )
}