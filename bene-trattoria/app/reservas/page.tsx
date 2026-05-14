import { Navbar } from "@/components/ui/Navbar";

export default function Reservas() {
    return (
        <main className="subpage">
            <Navbar />

            <section className="subpage-hero subpage-hero--reservas">
                <div className="subpage-hero__content">
                    <p>Reservas</p>
                    <h1>Guarde sua mesa para uma noite especial</h1>
                </div>
            </section>

            <section className="subpage-section subpage-section--split">
                <div>
                    <h2>Como funciona</h2>
                    <p>
                        Informe seus dados, o melhor horário e a quantidade de pessoas.
                        Nossa equipe confirma a disponibilidade e prepara sua mesa com carinho.
                    </p>
                    <div className="subpage-panel">
                        <span>Terça a domingo</span>
                        <span>18h às 23h</span>
                        <span>Eventos sob consulta</span>
                    </div>
                </div>

                <form className="subpage-form">
                    <label>
                        Nome
                        <input name="nome" type="text" placeholder="Seu nome" />
                    </label>
                    <label>
                        Telefone
                        <input name="telefone" type="tel" placeholder="(00) 00000-0000" />
                    </label>
                    <label>
                        Data e horário
                        <input name="data" type="text" placeholder="Ex: sexta, 20h" />
                    </label>
                    <label>
                        Pessoas
                        <input name="pessoas" type="number" min="1" placeholder="2" />
                    </label>
                    <button type="submit">Solicitar reserva</button>
                </form>
            </section>
        </main>
    )
}
