import { Navbar } from "@/components/ui/Navbar";

const pizzas = [
    { name: "Margherita", description: "Molho de tomate, muçarela, manjericão e azeite.", price: "R$ 42" },
    { name: "Bene da Casa", description: "Calabresa artesanal, cebola roxa, azeitonas e orégano.", price: "R$ 48" },
    { name: "Quattro Formaggi", description: "Muçarela, gorgonzola, parmesão e provolone.", price: "R$ 52" },
    { name: "Portuguesa", description: "Presunto, ovos, cebola, pimentão, azeitonas e muçarela.", price: "R$ 50" },
]

const entradas = [
    "Bruschetta de tomate fresco",
    "Focaccia com alecrim",
    "Burrata com pesto da casa",
]

export default function Menu() {
    return (
        <main className="subpage">
            <Navbar />

            <section className="subpage-hero subpage-hero--menu">
                <div className="subpage-hero__content">
                    <p>Cardápio</p>
                    <h1>Clássicos italianos com sotaque da casa</h1>
                </div>
            </section>

            <section className="subpage-section">
                <div className="menu-list">
                    {pizzas.map((pizza) => (
                        <article className="menu-item" key={pizza.name}>
                            <div>
                                <h2>{pizza.name}</h2>
                                <p>{pizza.description}</p>
                            </div>
                            <strong>{pizza.price}</strong>
                        </article>
                    ))}
                </div>

                <div className="subpage-panel subpage-panel--horizontal">
                    {entradas.map((entrada) => (
                        <span key={entrada}>{entrada}</span>
                    ))}
                </div>
            </section>
        </main>
    )
}
