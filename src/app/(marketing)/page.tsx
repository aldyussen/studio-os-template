import Image from 'next/image'
import Link from 'next/link'

function Btn({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <Link
      href={href}
      className={
        outline
          ? 'inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-primary hover:text-primary'
          : 'inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90'
      }
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-bg.jpg" alt="" fill priority className="object-cover object-center" />
        </div>
        {/* Extra pink glow bottom-left */}
        <div className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 10% 100%, oklch(0.45 0.25 330 / 0.7) 0%, transparent 55%)' }} />

        <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Image src="/images/trophy-kz.png" alt="" width={36} height={36} className="object-contain" />
              <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                Первая в Казахстане конференция для бьюти-бизнеса
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Как в бьюти<br />
              бизнесе выйти<br />
              на <span className="text-primary">5–10+ млн</span><br />
              чистыми
            </h1>

            <p className="mb-10 max-w-lg text-base text-white/60 sm:text-lg">
              Двухдневный интенсив, который даст тебе все инструменты
              и большой отрыв от конкурентов. Выйди на новый уровень
              и сделай x2 в своём бизнесе.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Btn href="#form">Оставить заявку</Btn>
              <Btn href="#program" outline>Программа</Btn>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { val: '200+', label: 'Участников' },
                { val: '2', label: 'Дня практики' },
                { val: '15+', label: 'Студий спикера' },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-2">
                  <span className="text-xl font-black text-primary">{s.val}</span>
                  <span className="text-sm text-white/50">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. BENEFITS — ЧТО ВЫ ПОЛУЧИТЕ
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/benefits-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
            ЧТО ВЫ ПОЛУЧИТЕ<br />В РЕЗУЛЬТАТЕ 2Х ДНЕЙ
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-sm text-white/50 sm:text-base">
            Уникальную структуру увеличения продаж и построения бизнеса в сфере бьюти,
            выход на новый уровень и большой отрыв от конкурентов, а так же:
          </p>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              {
                img: '/images/benefit-trends.png',
                tag: '/images/tag-trends.png',
                text: 'Последние тренды маркетинга и продаж в бьюти сфере',
              },
              {
                img: '/images/benefit-money.png',
                tag: '/images/tag-sales.png',
                text: 'Как построить эффективный отдел продаж, который выполняет планы',
              },
              {
                img: '/images/benefit-plan.png',
                tag: null,
                text: 'Пошаговую инструкцию, как сделать X2 в вашем бизнесе',
              },
              {
                img: '/images/benefit-team.png',
                tag: null,
                text: 'Как нанять команду мечты и собрать армию для захвата рынка',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-52 w-52">
                  {item.tag && (
                    <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                      <Image src={item.tag} alt="" width={80} height={32} className="object-contain" />
                    </div>
                  )}
                  <Image src={item.img} alt="" fill className="object-contain" />
                </div>
                <p className="text-sm font-medium text-white/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Btn href="#form">Оставить заявку и получить +1 билет в подарок</Btn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. WHO IS FOR — ДЛЯ КОГО ИНТЕНСИВ
          ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/section-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-black uppercase text-white sm:text-5xl">
            ДЛЯ КОГО ИНТЕНСИВ
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                num: '01',
                title: 'РУКОВОДИТЕЛЬ САЛОНА',
                img: '/images/whofor-location.png',
                text: 'Хочешь открыть новый салон или улучшить свой текущий бизнес и значительно увеличить прибыль',
              },
              {
                num: '02',
                title: 'ПРОБЛЕМА С РЕКЛАМОЙ',
                img: '/images/whofor-ads.png',
                text: 'Сливаешь деньги, а результата нет. Сложно, дорого, непонятно — каналы продвижения не работают',
              },
              {
                num: '03',
                title: 'УПЕРСЯ В ФИНАНСОВЫЙ ПОТОЛОК',
                img: '/images/whofor-ceiling.png',
                text: 'Ты уже много зарабатываешь, но не знаешь как масштабироваться и выйти на следующий уровень',
              },
              {
                num: '04',
                title: 'НЕТ ПРАВИЛЬНЫХ ИНСТРУМЕНТОВ',
                img: '/images/whofor-location2.png',
                text: 'Нет чёткой системы продаж, управления командой и инструментов для масштабирования бизнеса',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="absolute right-0 top-0 h-44 w-44 opacity-90 transition-transform duration-500 group-hover:scale-110">
                  <Image src={card.img} alt="" fill className="object-contain object-right-top" />
                </div>
                <div className="relative">
                  <span className="mb-2 block text-6xl font-black leading-none text-white/10">{card.num}</span>
                  <h3 className="mb-3 text-base font-black uppercase text-white">{card.title}</h3>
                  <p className="max-w-xs text-sm text-white/50">{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Btn href="#form">Оставить заявку</Btn>
            <p className="mt-3 text-xs text-white/30">уже записались 200+ человек</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. PROGRAM — ПРОГРАММА
          ════════════════════════════════════════ */}
      <section id="program" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-black uppercase text-white sm:text-5xl">
            ПРОГРАММА
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                day: 'ДЕНЬ 1',
                color: 'bg-primary',
                tag: 'ПРОДАЖИ',
                items: [
                  'Фундамент продаж: правила для успешных переговоров',
                  'Структура отдела продаж и его роли',
                  'Как набрать сотрудников в отдел продаж',
                  'Мотивация сотрудников: бонусы, KPI, геймификация',
                  'Скрипты продаж и отработка возражений',
                  'Аудит текущего отдела продаж',
                  'Боевые стратегии и инструменты закрытия сделок',
                  'Рабочие инструменты для роста выручки',
                ],
              },
              {
                day: 'ДЕНЬ 2',
                color: 'bg-[#7B2FBE]',
                tag: 'МАРКЕТИНГ',
                items: [
                  'Воронки трипваер: как они работают в бьюти',
                  'Воронки на подписки и удержание клиентов',
                  'Клиентский путь: как создать воронку, которая продаёт',
                  'Каналы привлечения клиентов 2025 года',
                  'Как построить команду для масштабирования X10',
                  'Финансовое планирование и управление бюджетом',
                  'Как удвоить средний чек — стратегии X2',
                  'Как собрать свою аудиторию и монетизировать её',
                ],
              },
            ].map((day) => (
              <div key={day.day} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <h3 className="text-2xl font-black uppercase text-white">{day.day}</h3>
                  <span className={`rounded-full ${day.color} px-4 py-1 text-xs font-bold uppercase tracking-widest text-white`}>
                    {day.tag}
                  </span>
                </div>
                <ul className="space-y-4">
                  {day.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Btn href="#form">Оставить заявку</Btn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. SPEAKER — ВАДИМ INNOVA
          ════════════════════════════════════════ */}
      <section id="speaker" className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.28 0.18 300) 0%, oklch(0.07 0 0) 65%)' }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/speaker-event2.png"
                  alt="Вадим Innova"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="mb-1 text-6xl font-black uppercase text-white sm:text-7xl">ВАДИМ</h2>
              <div className="mb-6">
                <Image src="/images/innova-logo.png" alt="INNOVA" width={260} height={72} className="object-contain" />
              </div>

              <ul className="mb-8 space-y-3">
                {[
                  'Управляющий сетью студий, 15+ лет в индустрии',
                  '15 собственных студий в 8 городах Казахстана',
                  'Выручка сети свыше 1.1 млрд тенге в год',
                  '68 000+ довольных клиентов',
                  'Основатель первого бьюти-акселератора Казахстана',
                  'Спикер крупнейших бьюти-конференций СНГ',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Btn href="#form">Оставить заявку</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. STATS — НАШИ РЕЗУЛЬТАТЫ
          ════════════════════════════════════════ */}
      <section id="results" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/section-bg.jpg" alt="" fill className="object-cover opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-4xl font-black uppercase text-white sm:text-5xl">
            НАШИ РЕЗУЛЬТАТЫ
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { val: '15', unit: '', label: '15 собственных студий\nв 8 городах Казахстана' },
              { val: '68K', unit: '', label: '60 500 довольных\nклиентов' },
              { val: '1.1', unit: 'млрд', label: '1.1 миллиарда тенге —\nвыручка сети за год' },
            ].map((s) => (
              <div
                key={s.val}
                className="flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-6 py-10 text-center"
              >
                <div className="flex items-end gap-1">
                  <span className="text-7xl font-black leading-none text-primary sm:text-8xl">{s.val}</span>
                  {s.unit && <span className="mb-2 text-2xl font-bold text-primary/70">{s.unit}</span>}
                </div>
                <p className="whitespace-pre-line text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. GALLERY — КАК ПРОХОДИТ
          ════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-black uppercase text-white sm:text-5xl">
            КАК ПРОХОДИТ ИНТЕНСИВ?
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/images/speaker-event1.png" alt="Интенсив Вадим Innova" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image src="/images/play-btn.png" alt="Смотреть" width={64} height={64} />
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/images/speaker-event2.png" alt="Интенсив Вадим Innova" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. MARQUEE TICKER
          ════════════════════════════════════════ */}
      <div className="relative overflow-hidden py-5">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/gradient-bar.png" alt="" fill className="object-cover" />
        </div>
        <div
          className="flex"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 flex-shrink-0 text-lg font-black uppercase tracking-widest text-white"
            >
              ИНТЕНСИВ ДЛЯ БЬЮТИ БИЗНЕСА&nbsp;&nbsp;•
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`d${i}`}
              className="mx-6 flex-shrink-0 text-lg font-black uppercase tracking-widest text-white"
            >
              ИНТЕНСИВ ДЛЯ БЬЮТИ БИЗНЕСА&nbsp;&nbsp;•
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          9. FOOTER CTA
          ════════════════════════════════════════ */}
      <section id="form" className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 100%, oklch(0.40 0.22 305 / 0.65) 0%, transparent 60%)' }}
        />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
            {[
              { val: '200+', label: 'участников' },
              { val: '2', label: 'дня' },
              { val: '15+', label: 'студий спикера' },
            ].map((s) => (
              <div key={s.val} className="flex items-center gap-2">
                <span className="text-lg font-black text-primary">{s.val}</span>
                <span className="text-sm text-white/40">{s.label}</span>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase text-white sm:text-5xl">
            Оставь заявку и получи
          </h2>
          <p className="mb-8 text-4xl font-black uppercase text-primary sm:text-5xl">
            +1 билет в подарок
          </p>

          <Btn href="#form">Оставить заявку прямо сейчас</Btn>
          <p className="mt-4 text-xs text-white/30">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

    </div>
  )
}
