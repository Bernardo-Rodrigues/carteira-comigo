import { createFileRoute } from "@tanstack/react-router";
import {
  PieChart,
  CalendarClock,
  Scale,
  Target,
  FileSpreadsheet,
  Search,
  ArrowDownRight,
  ShieldCheck,
  Check,
  Compass,
  Calculator,
  Calendar as CalendarIcon,
  Quote,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-investor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carteira Proporcional — Mantenha sua carteira no rumo certo" },
      {
        name: "description",
        content:
          "O método para investidores de longo prazo usarem o aporte mensal como ferramenta de rebalanceamento automático. Em menos de 10 minutos por mês.",
      },
      { property: "og:title", content: "Carteira Proporcional" },
      {
        property: "og:description",
        content:
          "Pare de improvisar. Use o aporte mensal para corrigir sua alocação automaticamente.",
      },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#oferta";

function PrimaryButton({
  children,
  href = CTA_HREF,
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-7 py-4 text-base font-semibold tracking-tight transition-all duration-200 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-ink text-cream hover:bg-ink/90 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_oklch(0.18_0.025_250/0.5)]"
      : "border border-ink/20 text-ink hover:border-ink/60";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl leading-[1.15] text-ink sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b border-rule/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-ink">
            <div className="grid h-8 w-8 place-items-center rounded-sm bg-ink text-cream">
              <PieChart size={16} />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Carteira Proporcional
            </span>
          </div>
          <a
            href={CTA_HREF}
            className="hidden text-sm font-medium text-ink/70 hover:text-ink sm:inline"
          >
            Ver o método →
          </a>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-rule bg-cream px-3 py-1.5 text-xs font-medium text-ink/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              Mais de 500 investidores já usam o método
            </div>
            <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
              Pare de improvisar.{" "}
              <span className="italic text-ink/70">
                Mantenha sua carteira no rumo certo.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Cada aporte mensal pode corrigir sua alocação automaticamente.
              Sem análise de mercado. Sem planilha complicada. Em menos de 10
              minutos.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton>Quero o método completo</PrimaryButton>
              <div className="flex items-center gap-1 text-sm text-ink/60">
                <Star size={14} className="fill-gold text-gold" />
                <Star size={14} className="fill-gold text-gold" />
                <Star size={14} className="fill-gold text-gold" />
                <Star size={14} className="fill-gold text-gold" />
                <Star size={14} className="fill-gold text-gold" />
                <span className="ml-2">Garantia de 365 dias</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gold-soft/40 blur-2xl" />
            <div className="overflow-hidden rounded-xl border border-rule bg-card shadow-[0_30px_80px_-30px_oklch(0.18_0.025_250/0.4)]">
              <img
                src={heroImg}
                alt="Investidor olhando para o app da corretora com tranquilidade"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-rule bg-card px-5 py-4 shadow-lg sm:block">
              <div className="text-xs uppercase tracking-wider text-ink/50">
                Tempo médio do aporte
              </div>
              <div className="font-display text-2xl text-ink">{"< 10 min"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM */}
      <section className="border-t border-rule/60 bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="O Problema">
            O inimigo não é o mercado.{" "}
            <span className="italic text-ink/70">É o seu próprio aporte.</span>
          </SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              Você pesquisa, planeja e define uma alocação-alvo com cuidado.
              Ações, renda fixa, fundos imobiliários… tudo no percentual certo.
              Você sabe o que quer no longo prazo.
            </p>
            <p>
              Mas chega o fim do mês. Você abre o app da corretora. E aí começa
              o problema real.
            </p>
            <p>
              Você olha para o saldo disponível e pensa:{" "}
              <em className="text-ink">
                "Onde coloco esse dinheiro agora?"
              </em>{" "}
              Você vê que um ativo caiu bastante e hesita. Vê outro subindo e
              sente aquela vontade de colocar mais ali. Lê uma notícia, muda de
              ideia. Improvisa. E faz isso todo mês.
            </p>
            <p>
              O resultado? Depois de um ano, sua carteira não se parece mais
              com o plano que você traçou. Ela reflete as suas emoções de cada
              mês.{" "}
              <strong className="font-semibold text-ink">
                Não é culpa sua.
              </strong>{" "}
              Ninguém te ensinou que o aporte mensal precisa de uma regra.
              Todo mundo fala em "investir com disciplina", mas ninguém te dá
              o processo simples para fazer isso na prática.
            </p>
            <div className="my-8 border-l-2 border-gold pl-6">
              <p className="text-ink">
                E o pior: cada aporte improvisado não é só uma decisão isolada.
                É um desvio pequeno que se acumula. Mês a mês, sua carteira vai
                saindo da proporção que você definiu quando estava calmo e
                racional.
              </p>
              <p className="mt-3 font-display text-xl text-ink">
                Isso tem um nome:{" "}
                <span className="italic">Contribution Drift</span>. E ele corrói
                seu plano em silêncio, sem que você perceba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OPPORTUNITY */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="A Oportunidade">
            Seu aporte mensal já é a ferramenta de rebalanceamento que você
            precisa.
          </SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              A maioria dos investidores acredita que rebalancear a carteira é
              um evento grande, caro e complicado. Algo que você faz uma ou
              duas vezes por ano, vendendo ativos, pagando imposto, torcendo
              para não errar o timing.
            </p>
            <p>
              Mas existe uma forma mais simples, mais barata e mais eficiente
              de manter sua alocação no lugar certo.
            </p>
            <p>
              O <strong className="text-ink">Método Carteira Proporcional</strong>{" "}
              usa o dinheiro que você já vai investir todo mês como uma
              ferramenta de correção automática. A lógica é direta: antes de
              investir, você verifica qual classe de ativos está mais abaixo
              da sua proporção-alvo. Então você direciona o aporte inteiro
              para ela. Só isso.
            </p>
            <p>
              Sem vender nada. Sem análise de mercado. Sem tentar adivinhar o
              que vai subir ou cair. Em menos de 10 minutos, você executa o
              processo, fecha o app e segue o seu dia.
            </p>
            <p>
              Com o tempo, sua carteira para de refletir as suas emoções e
              começa a refletir o seu plano. Você se torna o investidor
              metódico que sempre quis ser. Não porque você ficou mais
              inteligente. Mas porque você tem um processo que trabalha por
              você.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOR WHOM */}
      <section className="border-t border-rule/60 bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Para quem é
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              Feito para o investidor que valoriza{" "}
              <span className="italic text-cream/70">previsibilidade</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: PieChart,
                title: "Investidores de longo prazo com carteira própria",
                body:
                  "Você já tem uma alocação definida, mas sente que os aportes mensais estão desviando sua carteira do plano original sem você perceber.",
              },
              {
                Icon: CalendarClock,
                title: "Quem quer parar de improvisar todo mês",
                body:
                  "Você chega no fim do mês sem saber onde colocar o dinheiro e quer uma regra simples para tomar essa decisão em minutos, sem análise de mercado.",
              },
              {
                Icon: Scale,
                title: "Quem evita o rebalanceamento por ser caro ou complicado",
                body:
                  "Você sabe que sua carteira está fora da proporção, mas vender ativos gera imposto e estresse. Você quer uma forma de corrigir isso sem precisar vender nada.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-lg border border-cream/10 bg-cream/[0.03] p-7 transition-colors hover:bg-cream/[0.06]"
              >
                <Icon size={28} className="text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-cream">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/70">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — VALUE PROP */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="O que você ganha">
            Seu aporte mensal pode fazer mais do que apenas investir. Pode
            manter sua carteira no rumo certo —{" "}
            <span className="italic">automaticamente.</span>
          </SectionTitle>
          <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule md:grid-cols-2">
            {[
              {
                kicker: "Chega de improvisar onde investir",
                body:
                  "Cada mês sem um processo claro é um mês em que sua carteira se afasta um pouco mais da meta que você planejou. Com o método, você sabe exatamente onde colocar o dinheiro. Sem pensar demais.",
              },
              {
                kicker: "Menos de 10 minutos por mês",
                body:
                  "Você não precisa virar analista de mercado. O processo é simples: olha o extrato, consulta a regra, faz o aporte. Feito. Sua carteira segue o plano enquanto você segue sua vida.",
              },
              {
                kicker: "Sua carteira para de sair da proporção",
                body:
                  "O desvio não acontece de uma vez. Ele se acumula mês a mês, aporte a aporte. O método usa cada contribuição como uma ferramenta de correção — antes que o problema vire uma bola de neve.",
              },
              {
                kicker: "Disciplina sem depender de força de vontade",
                body:
                  "Você não precisa resistir ao noticiário nem confiar no seu instinto do momento. O processo decide por você — com base em regras que você mesmo definiu quando estava calmo e racional.",
              },
            ].map((b) => (
              <div key={b.kicker} className="bg-background p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {b.kicker}
                </div>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/80">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROOF */}
      <section className="border-t border-rule/60 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="Prova">
            Outros investidores já pararam de improvisar.{" "}
            <span className="italic text-ink/70">Veja o que mudou para eles.</span>
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "Eu passava horas toda virada do mês tentando decidir onde investir. Agora levo menos de 10 minutos e fecho o app sem aquela ansiedade de sempre.",
                name: "Carlos M.",
                role: "Investidor de longo prazo, 38 anos",
              },
              {
                quote:
                  "Minha carteira vivia saindo da proporção e eu nem percebia. Depois que comecei a usar o método, pela primeira vez em anos ela está dentro da meta que eu mesmo defini.",
                name: "Fernanda R.",
                role: "Investidora independente, 44 anos",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-lg border border-rule bg-background p-8"
              >
                <Quote size={24} className="text-gold" strokeWidth={1.5} />
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/60">
                  <div className="font-semibold text-ink">— {t.name}</div>
                  <div>{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ORIGIN STORY */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="A história">
            Como um processo simples resolveu o problema que nenhuma planilha
            conseguia.
          </SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              Por muito tempo, o ritual mensal de investir era assim: abrir o
              app da corretora, olhar para os números, olhar para as notícias,
              tentar adivinhar o que o mercado ia fazer… e no fim, colocar o
              dinheiro onde parecia mais seguro naquele momento.
            </p>
            <p className="font-display text-2xl italic text-ink">
              O problema é que "parecia mais seguro" mudava toda semana.
            </p>
            <p>
              Quando o mercado subia, a tentação era comprar o que já tinha
              subido. Quando caía, o medo paralisava. E mês a mês, sem
              perceber, a carteira foi se distorcendo. O que deveria ser{" "}
              <strong className="text-ink">40% em renda variável</strong>{" "}
              virou <strong className="text-ink">55%</strong>. O que deveria
              ser <strong className="text-ink">30% em renda fixa</strong>{" "}
              encolheu para <strong className="text-ink">18%</strong>. O plano
              ainda existia no papel — mas na prática, tinha virado decoração.
            </p>
            <p className="font-display text-xl text-ink">
              A frustração não era falta de conhecimento. Era falta de
              processo.
            </p>
            <p>
              Todas as tentativas de resolver isso esbarravam no mesmo
              problema. Rebalancear a carteira inteira era caro, trabalhoso e
              gerava imposto. Planilhas complexas funcionavam por dois meses e
              depois eram abandonadas. Seguir recomendações de analistas era
              trocar uma fonte de ansiedade por outra.
            </p>
            <p>
              O que faltava não era mais informação. Era uma regra simples que
              dissesse:{" "}
              <em className="text-ink">"Este mês, o dinheiro vai aqui."</em>
            </p>
            <p>
              Foi daí que surgiu o método. A ideia central é direta: em vez de
              tratar o rebalanceamento como um grande evento anual cheio de
              fricção, usar o próprio aporte mensal como a ferramenta de
              correção. Cada contribuição vai para o ativo que está mais
              abaixo da proporção-alvo. Nada de vender. Nada de análise de
              mercado. Só seguir a regra.
            </p>
            <p>
              O resultado foi testado mês a mês. A carteira parou de sair da
              proporção. O tempo gasto com a decisão caiu para menos de 10
              minutos. E a ansiedade que vinha junto com cada aporte…
              simplesmente foi embora.
            </p>
            <p className="font-display text-xl text-ink">
              Não porque o mercado ficou mais fácil. Mas porque o processo
              passou a ser mais forte do que qualquer emoção do momento.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW IT WORKS */}
      <section className="border-t border-rule/60 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="Como funciona">
            Cinco passos.{" "}
            <span className="italic text-ink/70">Menos de 10 minutos.</span>
          </SectionTitle>
          <ol className="space-y-px overflow-hidden rounded-lg border border-rule bg-rule">
            {[
              {
                Icon: Target,
                title: "Registre sua Meta",
                body:
                  "Defina os percentuais-alvo de cada classe de ativo e as bandas de tolerância aceitáveis para o seu perfil. Isso leva menos de 30 minutos. Uma vez só.",
              },
              {
                Icon: FileSpreadsheet,
                title: "Observe sua Carteira",
                body:
                  "Antes do aporte mensal, abra o extrato da sua corretora. Veja os percentuais atuais de cada classe. Isso leva menos de 5 minutos.",
              },
              {
                Icon: Search,
                title: "Identifique o Desvio",
                body:
                  "Use a Matriz de Alocação Mensal para ver qual classe está mais abaixo da meta. Sem análise de mercado. Sem achismo. A resposta está na sua própria carteira.",
              },
              {
                Icon: ArrowDownRight,
                title: "Direcione o Aporte",
                body:
                  "Coloque o aporte inteiro na classe que está mais abaixo da proporção-alvo. Se tudo estiver dentro da banda, divida conforme a meta original. Simples assim.",
              },
              {
                Icon: ShieldCheck,
                title: "Feche o App",
                body:
                  "Pronto. Sua carteira está mais equilibrada do que estava antes. Sem vender nada. Sem gerar imposto. Sem estresse. Repita no mês seguinte.",
                highlight: true,
              },
            ].map(({ Icon, title, body, highlight }, i) => (
              <li
                key={title}
                className={`grid gap-6 p-8 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-10 md:p-10 ${
                  highlight ? "bg-ink text-cream" : "bg-background"
                }`}
              >
                <div
                  className={`flex items-center gap-4 ${
                    highlight ? "text-cream" : "text-ink"
                  }`}
                >
                  <span
                    className={`font-display text-3xl ${
                      highlight ? "text-gold" : "text-gold"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3
                  className={`font-display text-2xl ${
                    highlight ? "text-cream" : "text-ink"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-[16px] leading-relaxed ${
                    highlight ? "text-cream/80" : "text-ink/70"
                  }`}
                >
                  {body}
                  {highlight && (
                    <span className="mt-4 block font-display text-lg italic text-gold">
                      "Menos de 10 minutos. Todo mês. Sem exceção."
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 9 — OFFER */}
      <section id="oferta" className="border-t border-rule/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              O investimento
            </div>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Escolha o pacote que faz sentido para você.
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-gold/30 bg-gold-soft/30 px-4 py-3 text-sm text-ink">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gold" />
              Os primeiros 100 compradores ganham uma sessão ao vivo de Q&amp;A
              com o autor. <strong>Restam poucas vagas.</strong>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Pacote 1 */}
            <PricingCard
              name="Essencial"
              price="R$ 47"
              perDay="≈ R$ 0,13 por dia"
              cta="Quero começar a investir com método"
              features={[
                "eBook Carteira Proporcional — guia completo do método",
                "Matriz de Alocação Mensal — ferramenta de uma página",
                "Fluxo de 10 Minutos — checklist da rotina mensal",
              ]}
            />
            {/* Pacote 2 */}
            <PricingCard
              name="Completo"
              price="R$ 97"
              perDay="≈ R$ 0,27 por dia"
              cta="Quero o método completo com os bônus"
              popular
              features={[
                "Tudo do Pacote Essencial",
                "Calibrador de Tolerância — defina suas bandas de desvio",
                "BÔNUS: Guia de Classes de Ativos",
                "BÔNUS: Rastreador 'Disciplina por Padrão'",
              ]}
            />
            {/* Pacote 3 */}
            <PricingCard
              name="Blindado"
              price="R$ 197"
              perDay="≈ R$ 0,54 por dia"
              cta="Quero o pacote completo com proteção total"
              features={[
                "Tudo do Pacote Completo",
                "BÔNUS: Protocolo Cisne Negro — o que fazer em quedas violentas",
                "Garantia estendida de 365 dias",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 10 — GUARANTEE */}
      <section className="border-t border-rule/60 bg-ink text-cream">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[auto_1fr] md:items-center md:py-28">
          <div className="mx-auto md:mx-0">
            <div className="relative grid h-44 w-44 place-items-center rounded-full border-2 border-gold/40">
              <div className="grid h-36 w-36 place-items-center rounded-full border border-gold bg-gold/10 text-center">
                <div>
                  <ShieldCheck
                    size={32}
                    className="mx-auto text-gold"
                    strokeWidth={1.5}
                  />
                  <div className="mt-1 font-display text-xl text-cream">
                    365
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-cream/70">
                    dias de garantia
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Nossa garantia
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Garantia de Estabilidade da Carteira:{" "}
              <span className="italic text-cream/80">
                365 dias para ter certeza.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-cream/80">
              <p>
                Implemente o método por um ano completo. São 12 aportes mensais
                seguindo o processo.
              </p>
              <p>
                Se depois disso sua carteira não estiver visivelmente mais
                próxima da proporção-alvo, basta nos enviar um email com o seu
                rastreador preenchido. Devolvemos 100% do valor. Sem
                perguntas. Sem burocracia.
              </p>
              <p className="font-display text-lg italic text-gold">
                Mais de um ano para testar. Zero risco para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FUTURE VISION */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="Daqui a 12 meses">
            Como vai estar sua carteira?
          </SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p className="font-display text-xl text-ink">
              Pensa no Ricardo de um ano atrás.
            </p>
            <p>
              Todo mês, a mesma dúvida.{" "}
              <em>"Coloco na renda fixa? Está caindo demais. Coloco em ações?
                Parece arriscado agora."</em>{" "}
              Dez minutos viravam uma hora. A decisão saía… mas sem convicção.
            </p>
            <p className="font-display text-xl text-ink">
              Agora pensa no Ricardo de hoje.
            </p>
            <p>
              Ele abre o app da corretora. Olha a proporção atual. Consulta a
              matriz. Sabe exatamente onde o aporte vai. Faz a transferência.
              Fecha o app.
            </p>
            <p className="border-l-2 border-gold pl-6 italic text-ink">
              Dez minutos. Sem angústia. Sem notícia de guru. Sem improviso.
            </p>
            <p>
              A carteira não está perfeita. Mas está no caminho certo. Mês
              após mês. Ano após ano. Sem drama.
            </p>
            <p>
              Isso é o que um processo faz. Não é talento. Não é sorte. É uma
              regra simples, seguida com consistência.
            </p>

            <div className="my-10 h-px bg-rule" />

            <p className="font-display text-2xl text-ink">Agora o outro lado.</p>
            <p>
              Se você continuar sem um processo, o que muda?{" "}
              <strong className="text-ink">Nada.</strong> E esse é exatamente o
              problema.
            </p>
            <p>
              Cada mês sem um critério claro é mais um mês em que o seu aporte
              vai para onde o mercado — ou o seu humor — mandar. A
              proporção-alvo que você definiu com cuidado vai se distorcendo,
              devagar, sem que você perceba.
            </p>
            <p>
              Daqui a um ano, você vai olhar para a carteira e ver uma coisa
              diferente do que planejou. Mais concentrada onde não deveria.
              Mais exposta ao risco que queria evitar. E a sensação de que{" "}
              <em>"preciso organizar isso"</em> vai continuar lá. Pesando.
            </p>
            <p>
              O custo não é só financeiro. É o peso de carregar uma decisão não
              resolvida todo mês. É a distância entre quem você quer ser como
              investidor e o que você faz na prática.
            </p>
            <div className="my-8 rounded-lg border border-rule bg-cream p-6">
              <p className="font-display text-lg text-ink">
                "Mas e se for simples demais?"
              </p>
              <p className="mt-3">
                Faz sentido questionar. Você está acostumado a achar que uma
                estratégia boa precisa ser complicada. Mas pensa assim: o que
                é mais difícil de manter por 20 anos, uma planilha complexa ou
                uma regra de uma linha?
              </p>
              <p className="mt-3 font-semibold text-ink">
                A simplicidade não é fraqueza. É o que garante que você vai
                executar. Sempre.
              </p>
            </div>

            <div className="pt-4">
              <PrimaryButton>Quero começar agora</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — OBJECTIONS */}
      <section className="border-t border-rule/60 bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="Últimas dúvidas">
            Veja o que outros investidores perguntaram{" "}
            <span className="italic text-ink/70">antes de decidir.</span>
          </SectionTitle>
          <div className="space-y-5">
            {[
              {
                Icon: Search,
                q: "Parece simples demais. Uma estratégia de verdade não deveria ser mais complexa?",
                a: [
                  "É a dúvida mais comum. E faz todo sentido ter ela.",
                  "Mas pensa bem: complexidade não é sinônimo de eficácia. É sinônimo de abandono. Toda estratégia que você não consegue executar por 20 anos seguidos é, na prática, inútil.",
                  "O Método Carteira Proporcional é simples por design. Porque o objetivo não é impressionar. É funcionar. Mês após mês, sem fricção, sem desculpa para pular.",
                ],
                bold: "A simplicidade é a estratégia.",
              },
              {
                Icon: Scale,
                q: "E se o meu aporte mensal for pequeno demais para corrigir um desvio grande?",
                a: [
                  "Entendo a preocupação. Mas o método não depende de um único aporte para resolver tudo de uma vez.",
                  "O objetivo é a correção contínua, não a correção imediata. Cada aporte direciona o novo dinheiro para o ativo mais abaixo da meta. Com o tempo, isso vai aproximando a carteira da proporção-alvo sem que você precise vender nada.",
                ],
                bold: "É como ajustar o leme de um barco. Cada movimento é pequeno. O resultado, ao longo do tempo, é uma rota precisa.",
              },
              {
                Icon: ShieldCheck,
                q: "Tenho medo de aportar no ativo que caiu. E se continuar caindo?",
                a: [
                  "Esse medo é natural. E é exatamente o tipo de reação emocional que um processo bem definido protege você de seguir.",
                  "Veja: você não está apostando na recuperação do ativo. Você está seguindo uma regra que definiu quando estava calmo e racional, antes de qualquer queda.",
                  "O método não pede que você preveja o fundo do mercado. Ele pede que você compre o que está abaixo da sua meta. Isso, ao longo dos anos, significa acumular ativos a preços melhores, de forma sistemática.",
                ],
                bold: "Não é feeling. É processo.",
              },
              {
                Icon: Calculator,
                q: "Por que não fazer um rebalanceamento completo uma vez por ano? Não é mais fácil?",
                a: [
                  "Parece mais simples. Mas na prática, não é.",
                  "Rebalancear vendendo gera custos, impostos e uma decisão difícil de executar — especialmente quando o mercado está em queda e você precisa vender o que subiu e comprar o que caiu.",
                  "O método usa o aporte mensal como ferramenta de correção. Isso elimina a necessidade de vender. Reduz custos. E distribui o ajuste ao longo do ano, de forma quase invisível.",
                ],
                bold:
                  "Você só faz um rebalanceamento completo se a carteira sair completamente da banda de tolerância que você mesmo definiu.",
              },
              {
                Icon: CalendarIcon,
                q: "E se eu não tiver disciplina suficiente para seguir um sistema?",
                a: [
                  "Essa é uma preocupação honesta. E merece uma resposta direta.",
                  "Disciplina não vem de força de vontade. Vem de fricção baixa.",
                  "Quanto mais simples o processo, mais fácil de repetir. O método foi desenhado para caber em 10 minutos por mês. Não exige planilha complexa. Não exige análise de mercado. Exige apenas seguir uma regra clara.",
                ],
                bold:
                  "O sistema faz o trabalho pesado. Você só precisa aparecer uma vez por mês.",
              },
            ].map(({ Icon, q, a, bold }) => (
              <article
                key={q}
                className="rounded-lg border border-rule bg-background p-7 md:p-9"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-md bg-gold/10 text-gold">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">
                    {q}
                  </h3>
                </div>
                <div className="mt-5 space-y-3 pl-0 text-[16px] leading-relaxed text-ink/75 md:pl-14">
                  {a.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="pt-2 font-semibold text-ink">{bold}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="FAQ">Perguntas frequentes</SectionTitle>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "O método funciona para qualquer tipo de carteira?",
                a: "Sim. O processo funciona para qualquer carteira com alocação-alvo definida, seja com ações, fundos, renda fixa ou uma combinação.",
              },
              {
                q: "Preciso de muito tempo para aplicar o método todo mês?",
                a: "Não. O processo foi desenhado para ser executado em menos de 10 minutos por mês, usando apenas o extrato da sua corretora.",
              },
              {
                q: "E se meu aporte mensal for pequeno demais para corrigir o desvio?",
                a: "Sem problema. O objetivo não é corrigir tudo de uma vez. É direcionar o dinheiro certo para o lugar certo, mês a mês, de forma consistente.",
              },
              {
                q: "Preciso vender ativos para rebalancear a carteira?",
                a: "Não. O método usa o aporte mensal como ferramenta de correção. Você só vende em casos extremos, definidos por bandas de tolerância que você mesmo configura.",
              },
              {
                q: "Tenho que acompanhar o mercado todo dia para usar isso?",
                a: "Não. O processo ignora notícias e oscilações de curto prazo. Você consulta sua carteira uma vez por mês e segue as regras. Só isso.",
              },
              {
                q: "O que acontece se eu errar um mês?",
                a: "Nada irreversível. O método é contínuo. No mês seguinte, você retoma o processo e a carteira vai se corrigindo gradualmente.",
              },
              {
                q: "Isso funciona para quem está começando a investir agora?",
                a: "Funciona melhor para quem já tem uma alocação-alvo definida. Se você ainda está montando sua carteira, o eBook inclui um guia de classes de ativos para te ajudar a começar.",
              },
              {
                q: "Qual é a garantia oferecida?",
                a: "Garantia total de 365 dias. Aplique o método por 12 meses. Se sua carteira não estiver mais próxima da proporção-alvo, basta enviar seu rastreador preenchido e devolvemos 100% do valor pago.",
              },
              {
                q: "O material é digital? Como recebo o acesso?",
                a: "Sim, é 100% digital. Após a compra, você recebe acesso imediato por e-mail, incluindo o eBook, a Matriz de Decisão e todos os bônus.",
              },
              {
                q: "Por que não simplesmente contratar um assessor de investimentos?",
                a: "Você pode. Mas um assessor cobra entre R$ 1.000 e R$ 3.000 por ano para fazer o que este método te ensina a executar em 10 minutos. O controle fica com você.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-rule"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[16px] leading-relaxed text-ink/75">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-lg border border-rule bg-cream p-8 text-center">
            <p className="font-display text-xl text-ink">
              Ainda tem dúvidas? Fale com a gente antes de decidir.
            </p>
            <p className="mt-2 text-ink/70">
              Responder uma dúvida vale mais do que mais uma promessa.
            </p>
            <div className="mt-6">
              <PrimaryButton>Ver os pacotes novamente</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-rule/60 bg-ink text-cream/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-sm bg-cream text-ink">
              <PieChart size={14} />
            </div>
            <span className="font-display text-base text-cream">
              Carteira Proporcional
            </span>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Carteira Proporcional. Material
            educacional. Não constitui recomendação de investimento.
          </p>
        </div>
      </footer>
    </main>
  );
}

function PricingCard({
  name,
  price,
  perDay,
  cta,
  features,
  popular,
}: {
  name: string;
  price: string;
  perDay: string;
  cta: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border p-8 ${
        popular
          ? "border-ink bg-ink text-cream shadow-[0_30px_80px_-30px_oklch(0.18_0.025_250/0.5)] md:scale-[1.03]"
          : "border-rule bg-background text-ink"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
          Mais popular
        </div>
      )}
      <div
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          popular ? "text-gold" : "text-gold"
        }`}
      >
        {name}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span
          className={`font-display text-5xl ${
            popular ? "text-cream" : "text-ink"
          }`}
        >
          {price}
        </span>
      </div>
      <div
        className={`mt-1 text-xs ${
          popular ? "text-cream/60" : "text-ink/50"
        }`}
      >
        {perDay} • pagamento único
      </div>
      <ul className="mt-7 flex-1 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
            <Check
              size={16}
              strokeWidth={2.5}
              className={`mt-0.5 flex-shrink-0 ${
                popular ? "text-gold" : "text-gold"
              }`}
            />
            <span className={popular ? "text-cream/85" : "text-ink/80"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3.5 text-sm font-semibold transition-all ${
          popular
            ? "bg-gold text-ink hover:bg-gold/90"
            : "bg-ink text-cream hover:bg-ink/90"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
