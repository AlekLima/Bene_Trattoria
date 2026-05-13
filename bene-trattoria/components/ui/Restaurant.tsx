import Image from "next/image"
import Link from "next/link"
import Painel1 from '../../public/painel1.svg'
import Painel2 from '../../public/painel2.svg'
import Painel3 from '../../public/painel3.svg'
import Restaurantelogo from '../../public/Restaurant.svg'

const panels = [
    { src: Painel1, label: "Faça seu pedido", href: "#pedido" },
    { src: Painel2, label: "Cheque nosso cardápio", href: "/menu" },
    { src: Painel3, label: "Faça seu evento conosco", href: "/reservas" },
]



export function Restaurant() {
    return (
        <section className="restaurant-panel" aria-label="Bene Trattoria">
            <div className="restaurant">
                <Image className="restaurant__image" src={Restaurantelogo} alt="Fachada da Bene Trattoria" fill priority />
            </div>

            <div className="restaurant-panel__cards" aria-label="Ações rápidas">
                {panels.map((panel) => (
                    <Link className="restaurant-panel__card" href={panel.href} key={panel.label}>
                        <span className="restaurant-panel__thumb">
                            <Image src={panel.src} alt="" fill sizes="70px" />
                        </span>
                        <span className="restaurant-panel__label">{panel.label}</span>
                    </Link>
                ))}
            </div>

            <div className="restaurant-panel__copy">
                <h1>Tradição e sabor em cada fatia</h1>
                <p>
                    Há anos cultivamos em Fortaleza a arte da pizza feita à mão.
                    Combinamos o rigor das técnicas clássicas italianas com o acolhimento
                    cearense para criar uma experiência gastronômica única.
                </p>
                <p>
                    Na Bene Trattoria, cada ingrediente é escolhido a dedo e cada pizza é
                    assada com o propósito de unir pessoas em torno de uma mesa farta e
                    saborosa.
                </p>
            </div>
        </section>
    )
}
