import Image from 'next/image'
import Link from 'next/link'

function PinkBtn({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_oklch(0.58_0.26_335/0.5)] transition-all hover:shadow-[0_0_60px_oklch(0.58_0.26_335/0.7)] hover:brightness-110 ${className}`}
    >
      {children}
    </Link>
  )
}

function GhostBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-all hover:border-primary/60 hover:text-white"
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#080808]">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[700px] w-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.50 0.28 335 / 0.55) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[650px] w-[650px] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.40 0.24 295 / 0.45) 0%, transparent 70%)' }} />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-32 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="mb-7 flex items-center gap-3">
              <Image src="/images/trophy-kz.png" alt="" width={28} height={28} className="object-contain" />
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur-sm sm:text-[11px]">
                Первая офлайн-конференция для бьюти-бизнеса в Казахстане
              </span>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">от</span>
              <Image src="/images/figma/innova-wordmark.png" alt="Vadim Innova" width={150} height={37} className="object-contain" />
            </div>

            <h1 className="mb-7 font-heading text-[clamp(2.6rem,6.5vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Как в бьюти<br />
              бизнесе выйти на{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, oklch(0.72 0.30 340) 0%, oklch(0.55 0.28 300) 100%)' }}
              >
                5–10+ млн
              </span>{' '}
              чистыми
            </h1>

            <p className="mb-9 max-w-lg text-base text-white/50 sm:text-lg">
              Двухдневный интенсив — все инструменты, чтобы выйти на новый уровень
              и сделать x2 в своём бизнесе.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <PinkBtn href="#form">Оставить заявку</PinkBtn>
              <GhostBtn href="#program">Программа</GhostBtn>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              {[
                { n: '200+', t: 'участников' },
                { n: '2', t: 'дня практики' },
                { n: '15+', t: 'студий спикера' },
                { n: '1.1 млрд', t: 'выручка сети' },
              ].map((s) => (
                <div key={s.n}>
                  <p className="font-heading text-2xl font-black text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">{s.t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, oklch(0.52 0.28 335 / 0.55) 0%, transparent 70%)' }} />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_120px_-20px_oklch(0.50_0.26_335/0.55)]">
              <Image
                src="/images/figma/vadim-hero.png"
                alt="Вадим Innova — спикер интенсива"
                width={1100}
                height={760}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. BENEFITS ═══════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 -z-20">
          <Image src="/images/benefits-bg.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#080808]/70" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.38 0.20 305 / 0.35) 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">результат</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[1] text-white">
              ЧТО ВЫ ПОЛУЧИТЕ<br />ЗА 2 ДНЯ
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/40 sm:text-base">
              Уникальную структуру роста продаж, выход на новый уровень и большой отрыв от конкурентов
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              { img: '/images/benefit-trends.png',  tag: 'ТРЕНДЫ',   text: 'Последние тренды маркетинга в бьюти сфере' },
              { img: '/images/benefit-money.png',   tag: 'ПРОДАЖИ',  text: 'Эффективный отдел продаж, который выполняет планы' },
              { img: '/images/benefit-plan.png',    tag: 'ПЛАН',     text: 'Пошаговая инструкция как сделать X2 в бизнесе' },
              { img: '/images/benefit-team.png',    tag: 'КОМАНДА',  text: 'Команда мечты для захвата рынка' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/[0.07]">
                <span className="rounded-full bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_0_20px_oklch(0.58_0.26_335/0.5)]">
                  {item.tag}
                </span>
                <div className="relative h-44 w-44 transition-transform duration-500 group-hover:scale-105">
                  <Image src={item.img} alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
                <p className="text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <PinkBtn href="#form">Оставить заявку — получить +1 билет</PinkBtn>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. WHO IS FOR ═══════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="pointer-events-none absolute -left-64 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.40 0.22 310 / 0.30) 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">аудитория</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[1] text-white">
              ДЛЯ КОГО ИНТЕНСИВ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { num: '01', title: 'РУКОВОДИТЕЛЬ САЛОНА',    img: '/images/whofor-location.png',  text: 'Хочешь открыть новый салон или улучшить текущий бизнес и кратно увеличить прибыль' },
              { num: '02', title: 'ПРОБЛЕМА С РЕКЛАМОЙ',    img: '/images/whofor-ads.png',       text: 'Сливаешь деньги на рекламу, а клиентов нет. Не знаешь какие каналы работают' },
              { num: '03', title: 'ФИНАНСОВЫЙ ПОТОЛОК',     img: '/images/whofor-ceiling.png',   text: 'Уже много зарабатываешь, но не знаешь как масштабироваться дальше' },
              { num: '04', title: 'НЕТ ИНСТРУМЕНТОВ',       img: '/images/whofor-location2.png', text: 'Нет чёткой системы продаж, управления командой и инструментов для роста' },
            ].map((card) => (
              <div
                key={card.num}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/[0.06]"
              >
                <div className="absolute right-0 top-0 h-52 w-52 opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90">
                  <Image src={card.img} alt="" fill className="object-contain object-right-top" />
                </div>
                <div className="relative z-10">
                  <span className="mb-4 block font-heading text-7xl font-black leading-none text-white/8">{card.num}</span>
                  <h3 className="mb-3 font-heading text-lg font-black uppercase leading-tight text-white">{card.title}</h3>
                  <p className="max-w-[260px] text-sm leading-relaxed text-white/50">{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <PinkBtn href="#form">Оставить заявку</PinkBtn>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. PROGRAM ═══════════ */}
      <section id="program" className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 -z-20">
          <Image src="/images/section-bg.jpg" alt="" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-[#080808]/80" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">расписание</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[1] text-white">
              ПРОГРАММА
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              {
                day: 'ДЕНЬ 1', tag: 'ПРОДАЖИ',
                tagClass: 'bg-primary shadow-[0_0_20px_oklch(0.58_0.26_335/0.5)]',
                items: [
                  'Фундамент продаж: правила для успешных переговоров',
                  'Структура отдела продаж и его роли',
                  'Как набрать правильных сотрудников',
                  'Мотивация, KPI и бонусная система',
                  'Скрипты продаж и отработка возражений',
                  'Аудит и корректировка текущего отдела',
                  'Боевые стратегии и инструменты закрытия сделок',
                  'Рабочие инструменты для роста выручки',
                ],
              },
              {
                day: 'ДЕНЬ 2', tag: 'МАРКЕТИНГ',
                tagClass: 'bg-[oklch(0.45_0.22_295)] shadow-[0_0_20px_oklch(0.45_0.22_295/0.5)]',
                items: [
                  'Воронки трипваер: как они работают в бьюти',
                  'Воронки на подписки и удержание клиентов',
                  'Клиентский путь: воронка, которая продаёт сама',
                  'Каналы привлечения клиентов в 2025 году',
                  'Как построить команду для масштабирования X10',
                  'Финансовое планирование и бюджет',
                  'Как удвоить средний чек — стратегии X2',
                  'Как собрать аудиторию и монетизировать её',
                ],
              },
            ].map((day) => (
              <div key={day.day} className="rounded-2xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="font-heading text-3xl font-black uppercase text-white">{day.day}</h3>
                  <span className={`rounded-full ${day.tagClass} px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white`}>
                    {day.tag}
                  </span>
                </div>
                <ul className="space-y-4">
                  {day.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] font-black text-primary">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-white/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <PinkBtn href="#form">Оставить заявку</PinkBtn>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. SPEAKER ═══════════ */}
      <section id="speaker" className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 -z-20"
          style={{ background: 'radial-gradient(ellipse 120% 100% at 50% 60%, oklch(0.22 0.16 300) 0%, oklch(0.07 0 0) 60%)' }} />
        <div className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.50 0.26 335 / 0.25) 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-60"
                style={{ background: 'radial-gradient(ellipse at center, oklch(0.45 0.24 305 / 0.40) 0%, transparent 70%)' }} />
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3]">
                  <Image src="/images/speaker-event2.png" alt="Вадим Innova" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">спикер</p>
              <h2 className="font-heading text-[clamp(3.5rem,8vw,6rem)] font-black uppercase leading-[0.9] text-white">
                ВАДИМ
              </h2>
              <div className="mb-8 mt-2">
                <Image src="/images/innova-logo.png" alt="INNOVA" width={240} height={68} className="object-contain" />
              </div>

              <ul className="mb-10 space-y-4">
                {[
                  '15+ лет в бьюти индустрии',
                  '15 собственных студий в 8 городах Казахстана',
                  '68 000+ довольных клиентов',
                  'Выручка сети — 1.1 млрд тенге в год',
                  'Основатель первого бьюти-акселератора в Казахстане',
                  'Спикер топовых бьюти-конференций СНГ',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="h-px w-6 flex-shrink-0 bg-primary" />
                    <span className="text-sm text-white/65">{item}</span>
                  </li>
                ))}
              </ul>

              <PinkBtn href="#form">Оставить заявку</PinkBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 6. STATS ═══════════ */}
      <section id="results" className="relative overflow-hidden py-28 sm:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 50%, oklch(0.18 0.08 300 / 0.50) 0%, transparent 60%)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">цифры</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[1] text-white">
              НАШИ РЕЗУЛЬТАТЫ
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { val: '15',   unit: '',      label: 'собственных студий\nв 8 городах Казахстана' },
              { val: '68K',  unit: '',      label: 'довольных\nклиентов' },
              { val: '1.1',  unit: ' млрд', label: 'тенге выручки\nсети за год' },
            ].map((s) => (
              <div key={s.val} className="flex flex-col items-center gap-3 py-12 text-center sm:py-0">
                <div className="flex items-end gap-1">
                  <span
                    className="font-heading font-black leading-none bg-clip-text text-transparent"
                    style={{
                      fontSize: 'clamp(4rem,12vw,8rem)',
                      backgroundImage: 'linear-gradient(135deg, oklch(0.72 0.30 340) 0%, oklch(0.52 0.25 300) 100%)',
                    }}
                  >
                    {s.val}
                  </span>
                  {s.unit && (
                    <span className="mb-3 text-2xl font-bold text-primary/70">{s.unit}</span>
                  )}
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. GALLERY ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">атмосфера</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[1] text-white">
              КАК ПРОХОДИТ<br />ИНТЕНСИВ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-video">
                <Image src="/images/speaker-event1.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                <div className="h-16 w-16 overflow-hidden rounded-full shadow-[0_0_40px_oklch(0.58_0.26_335/0.8)]">
                  <Image src="/images/play-btn.png" alt="" width={64} height={64} />
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-video">
                <Image src="/images/speaker-event2.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 8. MARQUEE ═══════════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/gradient-bar.png" alt="" fill className="object-cover" />
        </div>
        <div className="flex py-4" style={{ animation: 'marquee 22s linear infinite' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="mx-6 flex-shrink-0 font-heading text-base font-black uppercase tracking-[0.15em] text-white">
              ИНТЕНСИВ ДЛЯ БЬЮТИ БИЗНЕСА&nbsp;&nbsp;•
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════ 9. FOOTER CTA ═══════════ */}
      <section id="form" className="relative overflow-hidden py-28 sm:py-40">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.42 0.24 310 / 0.55) 0%, transparent 65%)' }} />

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <Image src="/images/innova-logo.png" alt="INNOVA" width={180} height={52} className="object-contain opacity-80" />
            <Image src="/images/trophy-kz.png" alt="" width={40} height={40} className="object-contain opacity-60" />
          </div>

          <h2 className="mb-4 font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.95] text-white">
            ОСТАВЬ ЗАЯВКУ<br />И ПОЛУЧИ
          </h2>
          <p
            className="mb-10 font-heading font-black uppercase leading-[0.95] bg-clip-text text-transparent"
            style={{
              fontSize: 'clamp(2rem,6vw,4.5rem)',
              backgroundImage: 'linear-gradient(135deg, oklch(0.72 0.30 340) 0%, oklch(0.52 0.25 300) 100%)',
            }}
          >
            +1 БИЛЕТ В ПОДАРОК
          </p>

          <PinkBtn href="#form" className="px-12 py-5 text-base">
            Оставить заявку прямо сейчас
          </PinkBtn>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {[
              { n: '200+', t: 'участников' },
              { n: '2', t: 'дня' },
              { n: '15+', t: 'студий спикера' },
            ].map((s) => (
              <div key={s.n} className="flex items-center gap-2">
                <span className="font-heading text-lg font-black text-primary">{s.n}</span>
                <span className="text-xs uppercase tracking-widest text-white/30">{s.t}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-white/20">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

    </main>
  )
}
