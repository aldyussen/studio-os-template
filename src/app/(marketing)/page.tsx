import Link from 'next/link'
import { RegistrationForm } from '@/components/sections/ukolova/RegistrationForm'

const NAV = [
  { label: 'О тренинге', href: '#about' },
  { label: 'Метод', href: '#method' },
  { label: 'Результаты', href: '#results' },
  { label: 'Спикер', href: '#speaker' },
  { label: 'Регистрация', href: '#form' },
]

function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-[family-name:var(--font-logo)] text-2xl font-bold tracking-[0.05em] ${className}`}
    >
      УКОЛОВА
    </span>
  )
}

function PortraitPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#c7a379_0%,#9c7c58_55%,#5e4a34_100%)]">
      <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/70">
        {label}
      </span>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-[#1b1b24]">
      {/* ═══════════ HERO (dark) ═══════════ */}
      <header id="about" className="relative overflow-hidden bg-[#0d0d10] text-white">
        {/* golden glow behind portrait */}
        <div
          className="pointer-events-none absolute -right-40 top-[-120px] h-[900px] w-[900px] rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(199,163,121,0.55) 0%, rgba(199,163,121,0.10) 45%, transparent 70%)',
          }}
        />

        {/* top bar */}
        <div className="relative z-20 mx-auto flex max-w-[1280px] items-center justify-between px-5 py-6 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#form"
            className="hidden rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-[#c7a379] hover:text-white lg:inline-flex"
          >
            +1 (000) 000-00-00
          </Link>
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-10 lg:pb-24 lg:pt-10">
          {/* left column */}
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#c7a379]">
              Закрытый онлайн-тренинг Екатерины Уколовой
            </p>

            <h1 className="mb-7 text-[clamp(2.3rem,5vw,3.75rem)] font-extrabold uppercase leading-[1.05] tracking-tight">
              Сделать из бизнесмена
              <br />
              <span className="text-[#c7a379]">долларового миллионера</span>
            </h1>

            <p className="mb-9 max-w-xl text-[17px] leading-relaxed text-white/65">
              С помощью системы: 8 шагов масштабирования, которые должен внедрить каждый владелец
              бизнеса с оборотом от&nbsp;$10&nbsp;000.
            </p>

            {/* beige CTA card */}
            <div className="max-w-xl rounded-2xl bg-[linear-gradient(135deg,#cdb699_0%,#b89876_100%)] p-7 text-[#2a2118] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="mb-5 flex items-center gap-4">
                <span className="rounded-lg bg-[#ff2828] px-3 py-1.5 text-sm font-bold text-white">
                  −50%
                </span>
                <p className="text-[15px] font-medium leading-snug">
                  Успейте зарегистрироваться
                  <br />
                  <span className="font-bold uppercase tracking-wide">бесплатно</span>
                </p>
              </div>

              <Link
                href="#form"
                className="flex h-[64px] w-full items-center justify-center rounded-xl bg-[#1b1b24] text-[16px] font-bold uppercase tracking-wide text-white transition hover:bg-black"
              >
                Зарегистрироваться
              </Link>

              {/* countdown */}
              <div className="mt-6 flex items-center justify-center gap-3 text-[#2a2118]">
                {[
                  { v: '00', l: 'часов' },
                  { v: '04', l: 'минут' },
                  { v: '52', l: 'секунд' },
                ].map((t, i) => (
                  <div key={t.l} className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="font-mono text-[42px] font-bold leading-none tabular-nums">
                        {t.v}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-wide opacity-70">
                        {t.l}
                      </div>
                    </div>
                    {i < 2 && <span className="-mt-3 text-[34px] font-bold opacity-50">:</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* stats */}
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-[44px] font-extrabold leading-none text-[#c7a379]">1000</p>
                <p className="mt-1 max-w-[180px] text-sm text-white/55">
                  Специализация в разных сферах бизнеса
                </p>
              </div>
              <div>
                <p className="text-[44px] font-extrabold leading-none text-[#c7a379]">200+</p>
                <p className="mt-1 max-w-[160px] text-sm text-white/55">Реализованные проекты</p>
              </div>
            </div>
          </div>

          {/* right column — portrait + name card */}
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[640px]">
            <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-2xl lg:inset-x-6">
              <PortraitPlaceholder label="Фото — Екатерина Уколова" />
            </div>

            <div className="absolute bottom-6 right-0 w-[300px] max-w-[80%] rounded-2xl bg-white/95 p-5 text-[#1b1b24] shadow-2xl backdrop-blur lg:right-2">
              <p className="text-lg font-bold uppercase tracking-wide">Екатерина Уколова</p>
              <p className="mt-1 text-sm leading-snug text-[#1b1b24]/65">
                Выступала на 6000 человек, 8500 клиентов в 50 странах мира, автор 7&nbsp;книг.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════ BOOK GIFT (light) ═══════════ */}
      <section className="bg-[#f4f1ec] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl">
            <PortraitPlaceholder label="Книга «10 принципов миллиардеров»" />
          </div>
          <div>
            <h2 className="mb-8 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-tight">
              Каждому участнику тренинга в подарок новая книга Екатерины{' '}
              <span className="text-[#c7a379]">Уколовой</span>
            </h2>
            <Link
              href="#form"
              className="inline-flex h-[64px] items-center justify-center rounded-xl bg-[#ff2828] px-12 text-[16px] font-bold uppercase tracking-wide text-white transition hover:bg-[#e21d1d]"
            >
              Принять участие
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT YOU GET (dark) ═══════════ */}
      <section className="bg-[#0d0d10] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="rounded-[28px] bg-[#16161b] p-8 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="mb-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold uppercase leading-tight">
                  На тренинге <span className="text-[#c7a379]">вы получите</span>
                </h2>
                <p className="mb-9 text-[15px] text-white/55">
                  Конкретные инструменты, которые внедряются сразу после тренинга.
                </p>

                <ul className="space-y-5">
                  {[
                    'Как выстроить отдел продаж, который стабильно выполняет план',
                    'Как масштабировать бизнес без потери качества и управляемости',
                    'Как сделать маркетинг системой, а не «рекламой в плюс-минус»',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#c7a379]/15 text-[#c7a379]">
                        ✓
                      </span>
                      <span className="text-[16px] leading-relaxed text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="h-[230px] w-[230px] overflow-hidden rounded-full">
                  <PortraitPlaceholder label="Фото" />
                </div>
                <div className="rounded-2xl bg-white p-6 text-center text-[#1b1b24] shadow-xl">
                  <p className="text-[15px] font-semibold leading-snug">
                    Только то, что работает в бизнесе с выручкой
                    <br />
                    от&nbsp;$10&nbsp;000 до&nbsp;$25&nbsp;млн&nbsp;/&nbsp;мес
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ METHOD (light) ═══════════ */}
      <section id="method" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold leading-tight text-[#1b1b24]">
              Метод Уколовой из 8 шагов <span className="text-[#ff2828]">х2 увеличения</span>
              <br />
              личной прибыли в бизнесе
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[#1b1b24]/55">
              Метод работает как с компаниями №1 на рынке, так и на малом и среднем бизнесе.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#edeef6] p-8 lg:p-14">
            <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold uppercase italic leading-[1.05] text-[#20203a]">
                Технология на 1 млн
                <br />
                долларов прибыли
              </h3>
              <p className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold uppercase italic leading-tight text-[#ff2828] lg:text-right">
                Разберём систему
                <br />
                масштабирования Уколовой
              </p>
            </div>

            <div className="mb-8 flex items-end gap-3">
              <span className="text-[64px] font-extrabold leading-none text-[#20203a]">8</span>
              <span className="mb-2 text-[clamp(1.2rem,2.4vw,1.8rem)] font-bold uppercase italic text-[#20203a]">
                шагов
              </span>
            </div>

            {/* timeline */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-[#d7b3bb] lg:block" />
              <ol className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 lg:gap-y-0">
                {[
                  'Фундамент',
                  'Панель управления',
                  'Трафик',
                  'Мотивация',
                  'Технология',
                  'Реализация',
                  'Система обучения',
                  'Автоматизация',
                ].map((step, i) => (
                  <li key={step} className="relative flex flex-col items-center text-center">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[#edeef6] text-lg font-bold"
                      style={{ borderColor: '#e0556e', color: '#e0556e' }}
                    >
                      {i + 1}
                    </span>
                    <span className="mt-3 max-w-[120px] text-[13px] font-medium leading-snug text-[#20203a]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ RESULTS (light) ═══════════ */}
      <section id="results" className="bg-[#f7f7fa] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold uppercase italic text-[#20203a]">
            Система даёт кратный рост
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Рост Х3 до 7,5 млн $/год', descr: 'Продажа металлопроката' },
              { title: 'Рост Х12 до 60К $/мес', descr: 'Банкротство физ.лиц' },
              { title: 'Рост Х10 до 12k $/мес', descr: 'Автоворонки / чат-боты' },
            ].map((c) => (
              <article
                key={c.title}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
              >
                <div className="aspect-[3/2] w-full">
                  <PortraitPlaceholder label="Кейс клиента" />
                </div>
                <div className="p-7 text-center">
                  <h3 className="text-xl font-extrabold leading-snug text-[#20203a]">{c.title}</h3>
                  <p className="mt-3 text-sm text-[#1b1b24]/55">{c.descr}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#form"
              className="inline-flex h-[72px] items-center justify-center rounded-full bg-[#ff2828] px-12 text-[16px] font-bold text-white transition hover:bg-[#e21d1d]"
            >
              Показать ещё результаты моих клиентов
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FORM (dark) ═══════════ */}
      <section id="form" className="bg-[#0d0d10] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <h2
                id="speaker"
                className="mb-9 text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-[1.05]"
              >
                Регистрируйтесь
                <br />
                на <span className="text-[#c7a379]">закрытый тренинг</span>
              </h2>
              <div className="rounded-2xl bg-white p-6 lg:p-8">
                <RegistrationForm />
              </div>
              <p className="mt-5 max-w-md text-xs text-white/40">
                Нажимая кнопку, вы соглашаетесь с политикой в отношении обработки персональных данных.
              </p>
            </div>

            <div className="relative min-h-[440px]">
              <div className="absolute right-0 top-0 z-10 flex items-center gap-3 rounded-xl bg-[#16161b] px-5 py-3 text-sm">
                <span className="text-[#c7a379]">📅</span>
                <span className="font-medium">пн, 29 июля&nbsp;|&nbsp;17:15 мск</span>
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <PortraitPlaceholder label="Фото — Екатерина Уколова" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER (dark) ═══════════ */}
      <footer className="bg-[#070707] py-8 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 text-center lg:flex-row lg:px-10 lg:text-left">
          <Logo className="text-xl" />
          <Link href="#" className="text-sm text-white/50 transition hover:text-white/80">
            Политика в отношении обработки персональных данных
          </Link>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Екатерина Уколова</p>
        </div>
      </footer>
    </div>
  )
}
