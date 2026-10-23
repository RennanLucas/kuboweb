import { ArrowUpRight, MessageCircle } from "lucide-react";

const contact =
  "https://wa.me/5511932197334?text=" +
  encodeURIComponent(
    "Olá, vim pelo site da Kubo Web e quero conversar sobre um projeto.",
  );

export default function StudioContact() {
  return (
    <section className="kw-contact" id="contato">
      <div className="kw-wrap">
        <div className="kw-contact-top">
          <span>Uma boa conversa pode mudar tudo.</span>
          <MessageCircle size={25} />
        </div>
        <h2>
          Vamos construir
          <br />
          <em>o seu próximo passo?</em>
        </h2>
        <div className="kw-contact-bottom">
          <p>
            Conte sua ideia. A gente conversa sobre
            <br />o melhor caminho para tirá-la do papel.
          </p>
          <a
            href={contact}
            target="_blank"
            rel="noopener noreferrer"
            className="kw-button kw-button-dark"
          >
            Conversar sobre meu projeto <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
