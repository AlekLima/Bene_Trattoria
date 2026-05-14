import { Navbar } from "@/components/ui/Navbar";

export default function Contato() {
    return (
        <main className="subpage">
            <Navbar />

            <section className="subpage-hero subpage-hero--contato">
                <div className="subpage-hero__content">
                    <p>Contato</p>
                    <h1>Fale com a Bene Trattoria</h1>
                </div>
            </section>

            <section className="subpage-section subpage-section--split">
                <div>
                    <h2>Estamos por aqui</h2>
                    <p>
                        Para reservas, eventos, dúvidas sobre o cardápio ou pedidos especiais,
                        mande sua mensagem. Vai ser um prazer receber você.
                    </p>
                    <div className="contact-list">
                        <span>Rua da Trattoria, 786</span>
                        <span>Fortaleza, CE</span>
                        <span>contato@benetrattoria.com</span>
                        <span>(85) 99999-0000</span>
                    </div>
                </div>

                <form className="subpage-form">
                    <label>
                        Nome
                        <input name="nome" type="text" placeholder="Seu nome" />
                    </label>
                    <label>
                        E-mail
                        <input name="email" type="email" placeholder="voce@email.com" />
                    </label>
                    <label>
                        Mensagem
                        <textarea name="mensagem" placeholder="Como podemos ajudar?" rows={5} />
                    </label>
                    <button type="submit">Enviar mensagem</button>
                </form>
            </section>
        </main>
    )
}
