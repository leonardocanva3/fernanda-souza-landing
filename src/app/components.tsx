import Image from "next/image";
import Link from "next/link";
import {
  brand,
  differentials,
  faqs,
  images,
  navItems,
  processSteps,
  siteUrl,
  specialties,
  whatsappHref,
  type SeoPage,
} from "./site-data";
import { TrackedWhatsAppLink } from "./tracked-whatsapp-link";

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-[#8f5b58] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(143,91,88,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#744541] hover:shadow-[0_24px_54px_rgba(143,91,88,0.3)] focus:outline-none focus:ring-2 focus:ring-[#8f5b58] focus:ring-offset-2";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/30 bg-[#fffaf7]/62 shadow-[0_14px_50px_rgba(63,52,49,0.06)] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Fernanda Souza - início" className="shrink-0">
          <Image
            src={images.logo}
            alt="Fernanda Souza Fisioterapia Pélvica"
            width={210}
            height={74}
            priority
            className="h-auto w-36 drop-shadow-sm sm:w-44"
          />
        </Link>
        <nav className="hidden items-center rounded-full border border-white/55 bg-white/35 px-2 py-2 text-sm font-medium text-[#594541] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/70 hover:text-[#8f5b58]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <TrackedWhatsAppLink
          href={whatsappHref}
          eventName="menu_whatsapp"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#8f5b58]/15 bg-[#8f5b58] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(143,91,88,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#744541] sm:px-7"
          aria-label="Agendar pelo WhatsApp"
        >
          WhatsApp
        </TrackedWhatsAppLink>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#eadfd9] bg-[#fffaf7] text-[#4a3a36]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src={images.logo}
            alt="Fernanda Souza Fisioterapia Pélvica"
            width={230}
            height={85}
            className="mb-5 h-auto w-48"
          />
          <p className="max-w-sm text-sm font-light leading-7 text-[#6a5752]">
            Fisioterapia pélvica em Salvador com atendimento individualizado,
            privacidade e cuidado baseado em evidências.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9f6d67]">
            Contato
          </h2>
          <p className="text-sm font-light leading-7 text-[#6a5752]">
            {brand.city}, {brand.region}
            <br />
            WhatsApp {brand.displayPhone}
            <br />
            Atendimento por agendamento
            <br />
            {brand.registry}
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9f6d67]">
            SEO local
          </h2>
          <div className="grid gap-2 text-sm font-light text-[#6a5752]">
            <Link href="/fisioterapia-pelvica-salvador">Fisioterapia pélvica</Link>
            <Link href="/incontinencia-urinaria-salvador">Incontinência urinária</Link>
            <Link href="/dor-pelvica-salvador">Dor pélvica</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#eadfd9] px-4 py-5 text-center text-xs text-[#8a746d]">
        © 2026 Fernanda Souza. Conteúdo informativo, sem substituir avaliação profissional.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <TrackedWhatsAppLink
      href={whatsappHref}
      eventName="floating_whatsapp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#8f5b58] text-xs font-bold text-white shadow-[0_18px_45px_rgba(63,52,49,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#744541] sm:bottom-6 sm:right-6"
      aria-label="Conversar no WhatsApp"
    >
      WA
    </TrackedWhatsAppLink>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <MidCta />
        <Differentials />
        <HumanizedCare />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9f6d67]">
      {children}
    </p>
  );
}

function SoftIcon({ index }: { index: number }) {
  const shapes = ["M7 17c5-1 8-4 10-10", "M6 12h12M12 6v12", "M7 9c3-4 7-4 10 0M7 15c3 4 7 4 10 0"];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#8f5b58]"
      fill="none"
    >
      <path
        d={shapes[index % shapes.length]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffaf7_0%,#f7eee9_48%,#fffdfb_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[#d8b1a8]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(115deg,rgba(216,177,168,0.18),rgba(255,255,255,0)_62%)]" />
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:pb-24 lg:pt-36">
        <div className="reveal relative z-10 max-w-2xl">
          <SectionLabel>Fisioterapia pélvica especializada</SectionLabel>
          <h1 className="text-5xl font-semibold leading-[1.02] text-[#3f3431] sm:text-6xl lg:text-[5.35rem]">
            Fisioterapia Pélvica em Salvador
          </h1>
          <p className="mt-7 max-w-xl text-lg font-light leading-9 text-[#6a5752]">
            Cuidado para saúde íntima feminina e masculina, incontinência
            urinária, dor pélvica, gestação, pós-parto e oncologia pélvica com
            privacidade, técnica e acolhimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedWhatsAppLink href={whatsappHref} eventName="hero_whatsapp" className={buttonClass}>
              Agendar avaliação
            </TrackedWhatsAppLink>
            <a
              href="#especialidades"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8c2b8] px-6 py-3 text-sm font-semibold text-[#5c4641] transition hover:border-[#8f5b58] hover:text-[#8f5b58]"
            >
              Ver especialidades
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-3 text-[#4a3a36]">
            {["Salvador", "CREFITO", "Individual"].map((item) => (
              <div key={item} className="border-l border-[#d9b8ae] pl-3">
                <dt className="text-xs uppercase tracking-[0.18em] text-[#9f6d67]">{item}</dt>
                <dd className="mt-1 text-sm font-semibold">Atendimento</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal relative min-h-[500px] lg:min-h-[700px]">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.4rem] border border-[#d8b1a8]/40" />
          <div className="relative h-full min-h-[500px] overflow-hidden rounded-[2.4rem] bg-[#eadfd9] shadow-[0_34px_90px_rgba(63,52,49,0.18)] lg:min-h-[700px]">
            <Image
              src={images.hero}
              alt="Fernanda Souza em consultório com modelos anatômicos pélvicos"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="scale-[1.02] object-cover object-[52%_42%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3f3431]/62 to-transparent p-7 text-white">
              <p className="max-w-sm text-sm font-light leading-6">
                Atendimento conduzido com explicação clara, consentimento e um plano
                compatível com sua história.
              </p>
            </div>
          </div>
          <div className="absolute bottom-6 left-4 right-4 rounded-[1.45rem] border border-white/65 bg-white/82 p-5 shadow-[0_22px_60px_rgba(63,52,49,0.18)] backdrop-blur-xl sm:left-[-1.2rem] sm:right-auto sm:w-[330px]">
            {["Atendimento Humanizado", "Saúde Íntima Feminina e Masculina", "Salvador - BA"].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2 text-sm font-semibold text-[#4a3a36]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8f5b58] text-xs text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-white py-24 sm:py-36">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="reveal relative min-h-[620px] overflow-hidden rounded-[2rem] bg-[#eadfd9] shadow-[0_28px_80px_rgba(63,52,49,0.12)]">
          <Image
            src={images.about}
            alt="Fernanda Souza, fisioterapeuta pélvica"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="reveal flex flex-col justify-center lg:pl-8">
          <SectionLabel>Sobre Fernanda</SectionLabel>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
            Autoridade com uma presença acolhedora e profundamente humana.
          </h2>
          <p className="mt-7 max-w-2xl text-lg font-light leading-9 text-[#6a5752]">
            Fernanda Souza une conhecimento técnico em fisioterapia pélvica,
            escuta qualificada e comunicação acessível para cuidar de questões
            íntimas que muitas pessoas demoram a verbalizar.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["+9 anos de experiência", "Atendimento Individualizado", "Foco em Qualidade de Vida"].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[#eadfd9] bg-[#fffaf7] p-5">
                <p className="text-sm font-semibold leading-6 text-[#4a3a36]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Saúde íntima feminina e masculina",
              "Avaliação individualizada",
              "Educação corporal",
              brand.registry,
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[#eadfd9] bg-white p-5 shadow-[0_14px_40px_rgba(63,52,49,0.05)]">
                <p className="text-sm font-semibold text-[#4a3a36]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="especialidades" className="bg-[#f7eee9] py-24 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <SectionLabel>Especialidades</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
            Tratamentos pélvicos com precisão clínica e linguagem simples.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <article
              key={item.title}
              className="reveal group rounded-[1.35rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_55px_rgba(63,52,49,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d8b1a8]/70 hover:bg-white hover:shadow-[0_28px_70px_rgba(63,52,49,0.12)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b1a8]/45 bg-[#fffaf7] transition-all duration-300 group-hover:bg-[#f7eee9]">
                <SoftIcon index={index} />
              </div>
              <h3 className="text-xl font-semibold text-[#3f3431]">{item.title}</h3>
              <p className="mt-3 text-sm font-light leading-7 text-[#6a5752]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <TrackedWhatsAppLink href={whatsappHref} eventName="middle_whatsapp" className={buttonClass}>
            Conversar sobre meu caso
          </TrackedWhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function MidCta() {
  return (
    <section className="bg-[#8f5b58] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6d9d0]">
            Atendimento em Salvador
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Sintomas íntimos merecem cuidado especializado, não silêncio.
          </h2>
        </div>
        <TrackedWhatsAppLink
          href={whatsappHref}
          eventName="middle_whatsapp"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#8f5b58] transition hover:bg-[#fff4ee]"
        >
          Agendar pelo WhatsApp
        </TrackedWhatsAppLink>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="bg-white py-24 sm:py-36">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div className="reveal">
          <SectionLabel>Diferenciais</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
            Sofisticação aqui é clareza, discrição e cuidado bem feito.
          </h2>
          <div className="mt-10 grid gap-4">
            {differentials.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-5 rounded-[1.35rem] border border-[#eadfd9] bg-[#fffaf7] p-5 shadow-[0_16px_45px_rgba(63,52,49,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_65px_rgba(63,52,49,0.1)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#8f5b58] shadow-inner">
                  0{index + 1}
                </span>
                <p className="font-semibold text-[#4a3a36]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal grid gap-4 sm:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.4rem] bg-[#eadfd9] sm:col-span-2">
            <Image
              src={images.laser}
              alt="Fernanda Souza apresentando recurso terapêutico"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.4rem] bg-[#eadfd9]">
            <Image src={images.cones} alt="Cones vaginais usados em fisioterapia pélvica" fill className="object-cover" />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.4rem] bg-[#eadfd9]">
            <Image src={images.laserDetail} alt="Detalhe de laser terapêutico" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HumanizedCare() {
  return (
    <section id="atendimento" className="bg-[#fffaf7] py-24 sm:py-36">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="reveal grid gap-4 sm:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[#eadfd9] sm:col-span-2">
            <Image
              src={images.patient}
              alt="Atendimento humanizado com paciente em consultório"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[#eadfd9]">
            <Image src={images.attendance} alt="Exercício terapêutico orientado" fill className="object-cover" />
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[#eadfd9]">
            <Image src={images.authority} alt="Fernanda com modelo anatômico pélvico" fill className="object-cover object-top" />
          </div>
        </div>
        <div className="reveal flex flex-col justify-center">
          <SectionLabel>Atendimento humanizado</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
            Um ambiente para falar com segurança sobre o que costuma ser silenciado.
          </h2>
          <p className="mt-6 text-lg font-light leading-9 text-[#6a5752]">
            A consulta combina avaliação, educação em saúde, recursos terapêuticos
            e exercícios. Tudo acontece com explicação prévia, consentimento e
            respeito ao ritmo de cada pessoa.
          </p>
          <TrackedWhatsAppLink href={whatsappHref} eventName="middle_whatsapp" className={`${buttonClass} mt-8 w-fit`}>
            Quero agendar
          </TrackedWhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white py-24 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Como funciona</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
            Um processo claro do primeiro contato à evolução clínica.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="reveal rounded-[1.35rem] border border-[#eadfd9] p-7 shadow-[0_16px_45px_rgba(63,52,49,0.04)]">
                <span className="text-sm font-semibold text-[#9f6d67]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-[#3f3431]">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#6a5752]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-[#f7eee9] py-24 sm:py-36">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-4xl font-semibold leading-tight text-[#3f3431] sm:text-5xl">
          Perguntas frequentes
        </h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.25rem] border border-white/75 bg-white/88 p-5 shadow-[0_18px_55px_rgba(63,52,49,0.07)] transition-all duration-300 open:bg-white open:shadow-[0_24px_70px_rgba(63,52,49,0.1)] sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[#3f3431]">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fffaf7] text-2xl text-[#9f6d67] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="faq-answer mt-4 text-base font-light leading-8 text-[#6a5752]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#fffaf7] px-4 py-24 sm:px-6 sm:py-36 lg:px-8">
      <div className="reveal mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#8f5b58_0%,#744541_58%,#4a3430_100%)] shadow-[0_34px_95px_rgba(74,52,48,0.26)] lg:grid-cols-[1.03fr_0.97fr]">
        <div className="p-8 text-white sm:p-12 lg:p-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6d9d0]">
            Próximo passo
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
            Agende uma avaliação e comece com clareza.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light leading-9 text-[#f7e6df]">
            O primeiro encontro é o momento de entender sintomas, prioridades e
            construir um plano de cuidado possível para sua rotina.
          </p>
          <TrackedWhatsAppLink href={whatsappHref} eventName="final_whatsapp" className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#744541] shadow-[0_18px_50px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff4ee] hover:shadow-[0_24px_60px_rgba(255,255,255,0.26)]">
            Chamar no WhatsApp
          </TrackedWhatsAppLink>
        </div>
        <div className="relative min-h-[480px]">
          <Image
            src={images.hero}
            alt="Fernanda Souza em consultório com modelos anatômicos pélvicos"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover object-[52%_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8f5b58]/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function JsonLd() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: brand.name,
      jobTitle: brand.title,
      description: brand.description,
      image: `${siteUrl}${images.about}`,
      telephone: brand.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: brand.city,
        addressRegion: brand.region,
        addressCountry: "BR",
      },
      worksFor: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: `${brand.name} - ${brand.title}`,
      description: brand.description,
      image: `${siteUrl}${images.hero}`,
      url: siteUrl,
      telephone: brand.telephone,
      areaServed: brand.areaServed,
      openingHours: brand.openingHours,
      address: {
        "@type": "PostalAddress",
        addressLocality: brand.city,
        addressRegion: brand.region,
        addressCountry: "BR",
      },
      medicalSpecialty: "Physiotherapy",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: `${brand.name} - ${brand.title}`,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export function SeoServicePage({ page }: { page: SeoPage }) {
  return (
    <>
      <Header />
      <main className="bg-[#fffaf7]">
        <section className="mx-auto grid min-h-[720px] w-full max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionLabel>{brand.city}, {brand.region}</SectionLabel>
            <h1 className="text-5xl font-semibold leading-[1.04] text-[#3f3431] sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-9 text-[#6a5752]">{page.hero}</p>
            <TrackedWhatsAppLink href={whatsappHref} eventName="hero_whatsapp" className={`${buttonClass} mt-8`}>
              Agendar avaliação
            </TrackedWhatsAppLink>
          </div>
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#eadfd9] shadow-[0_30px_80px_rgba(63,52,49,0.16)]">
            <Image src={page.image} alt={page.title} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-top" />
          </div>
        </section>
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionLabel>Conteúdo local</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight text-[#3f3431]">
                Atendimento especializado em Salvador com plano individual.
              </h2>
            </div>
            <div>
              <p className="text-lg font-light leading-9 text-[#6a5752]">{page.intro}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {page.focus.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#eadfd9] bg-[#fffaf7] p-5">
                    <p className="font-semibold text-[#4a3a36]">{item}</p>
                  </div>
                ))}
              </div>
              <TrackedWhatsAppLink href={whatsappHref} eventName="middle_whatsapp" className={`${buttonClass} mt-8`}>
                Chamar no WhatsApp
              </TrackedWhatsAppLink>
            </div>
          </div>
        </section>
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
