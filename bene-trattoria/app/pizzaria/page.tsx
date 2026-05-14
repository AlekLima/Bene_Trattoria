import { Navbar } from "@/components/ui/Navbar"

export default function Pizzaria() {
    return (
        <main className="subpage">
            <Navbar />

            <section className="subpage-hero subpage-hero--pizzaria">
                <div className="subpage-hero__content">
                    <p>A Bene Trattoria</p>
                    <h1>A pizzaria onde a mesa vira encontro</h1>
                </div>
            </section>

            <section className="subpage-section subpage-section--split">
                <div>
                    <h2>Nossa casa</h2>
                    <p>
                        A Bene Trattoria nasceu para unir a alma das pizzarias italianas
                        com o jeito acolhedor de Fortaleza. Cada detalhe da casa foi pensado
                        para receber com calma, boa conversa e o perfume da massa saindo do forno.
                    </p>
                </div>

                <div className="subpage-panel">
                    <span>Forno quente</span>
                    <span>Massa artesanal</span>
                    <span>Ingredientes escolhidos</span>
                </div>
            </section>

            <section className="subpage-band">
                <h2>Tradição em cada preparo</h2>
                <p>
                    Das fermentações longas aos molhos feitos na casa, buscamos um sabor
                    simples, honesto e memorável.
                </p>
            </section>
        </main>
    )
}
