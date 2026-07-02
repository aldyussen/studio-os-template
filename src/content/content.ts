// Весь контент лендинга. Заменяется на данные клиента без правки разметки.

export const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL ?? '#'

export interface HeroContent {
  logoSrc: string
  logoAlt: string
  brandLines: string[]
  audienceNote: string[]
  badge: { icon: string; label: string }
  titleLines: string[]
  subtitle: string
  soundNote: { bold: string; light: string }
}

export interface VideoContent {
  // Плейсхолдер: клиент даст ссылку на видео (вертикальное, 432×720, соотношение 3:5)
  videoUrl: string
  posterAlt: string
}

export const hero: HeroContent = {
  logoSrc: '/images/logo-ukolova.svg',
  logoAlt: 'Уколова Mastery',
  brandLines: ['МАСШТАБИРОВАНИЕ', 'БИЗНЕСА С ЕКАТЕРИНОЙ', 'УКОЛОВОЙ'],
  audienceNote: [
    '*** ТОЛЬКО ДЛЯ ВЛАДЕЛЬЦЕВ БИЗНЕСА, ОТ 10 000$/МЕС',
    'ГОТОВЫХ РАСТИ Х2 ЗА 90 ДНЕЙ',
  ],
  badge: { icon: '/images/icon-clock.svg', label: 'ПРОВОЖУ 1 РАЗ В ГОД' },
  titleLines: ['Превратите перегруженный', 'бизнес в масштабируемую систему'],
  subtitle: 'без сложных воронок, выгорания и миллионных бюджетов',
  soundNote: {
    bold: '🔊 Убедитесь, что звук включён',
    light: '🎥 (Подождите, пока видео полностью загрузится)',
  },
}

export interface OfferContent {
  datePill: string
  badge: { icon: string; label: string }
  title: string
  limitNote: string
  prices: { old: string; older: string; current: string }
  payButtons: { label: string; variant: 'visa' | 'rf' }[]
  clientsTitle: string
  clientLogos: { src: string; alt: string; bg?: string }[]
}

export const offer: OfferContent = {
  datePill: '19-24 ИЮЛЯ 2026',
  badge: { icon: '/images/icon-clock.svg', label: 'ПРОВОЖУ 1 РАЗ В ГОД' },
  title: '5 дней личной работы над вашим бизнесом с Екатериной',
  limitNote: 'Количество мест по такой стоимости ограничено:',
  prices: { older: '10 000 $', old: '99 $', current: '19 $' },
  payButtons: [
    { label: 'ОПЛАТА КАРТОЙ VISA/MASTERCARD', variant: 'visa' },
    { label: 'ОПЛАТА КАРТОЙ РФ', variant: 'rf' },
  ],
  clientsTitle: 'С кем работали:',
  clientLogos: [
    { src: '/images/client-1.png', alt: 'HeadHunter' },
    { src: '/images/client-2.png', alt: 'Dufa' },
    { src: '/images/client-3.png', alt: 'BMW' },
    { src: '/images/client-4.png', alt: 'iiko' },
    { src: '/images/client-8.png', alt: 'EY' },
    { src: '/images/client-5.png', alt: 'Victoria’s Secret' },
    { src: '/images/client-7.png', alt: 'Alcon' },
    { src: '/images/client-6.png', alt: 'Softline' },
    { src: '/images/client-sber.png', alt: 'Сбербанк', bg: '#f2f2f2' },
    { src: '/images/client-computer.png', alt: 'ЛСР' },
    { src: '/images/client-goodwood.png', alt: 'Good Wood', bg: '#227633' },
    { src: '/images/client-novosib.png', alt: 'Новосибирский хладокомбинат', bg: '#f2f2f2' },
  ],
}

export interface CountdownContent {
  titleLines: string[]
  deadlineLabel: string
  units: { hours: string; minutes: string; seconds: string }
  // Смещение часового пояса дедлайна (часы от UTC); отсчёт до ближайших 00:00 этого пояса
  utcOffsetHours: number
}

export const countdown: CountdownContent = {
  titleLines: ['Специальное предложение доступно до'],
  deadlineLabel: '00:00 +3 UTC',
  units: { hours: 'Часов', minutes: 'Минут', seconds: 'Секунд' },
  utcOffsetHours: 3,
}

export interface CaseCard {
  image: string
  alt: string
  title: string
  // Начало title, набранное жирнее (как в макете), например 'Рост Х2'
  boldPrefix?: string
  subtitle?: string
}

export const cases: CaseCard[] = [
  {
    image: '/images/case-1.png',
    alt: 'Татьяна Вяткина',
    title: 'Рост Х2 до 13 млн $/год',
    boldPrefix: 'Рост Х2',
    subtitle: 'Производство упаковки',
  },
  {
    image: '/images/case-2.png',
    alt: 'Александр Федоров',
    title: 'Рост Х3 до 20 млн $/год',
    boldPrefix: 'Рост Х3',
    subtitle: 'Опт стройматерилы',
  },
  {
    image: '/images/case-3.png',
    alt: 'Александр Загоскин',
    title: 'Рост Х15 до 20 млн $/год',
    boldPrefix: 'Рост Х15',
    subtitle: 'Импорт станков ЧПУ',
  },
  {
    image: '/images/case-4.png',
    alt: 'Булат',
    title: 'Рост до 13 млн $/год',
    boldPrefix: 'Рост',
    subtitle: 'Мед.центры',
  },
  {
    image: '/images/case-5.png',
    alt: 'Ольга Гоголадзе',
    title: 'Рост с 63k $/мес до 13 млн $/год',
    subtitle: 'финансовая школа/приложение',
  },
  {
    image: '/images/case-6.png',
    alt: 'Кейс Уколовой',
    title: 'Рост с 380k $/мес до 750k $/мес',
  },
]

export const casesExtra: CaseCard[] = [
  {
    image: '/images/case-7.png',
    alt: 'Поливанов Олег',
    title: 'Рост Х3 до 7,5 млн $/год',
    boldPrefix: 'Рост Х3',
    subtitle: 'Продажа металлопроката',
  },
  {
    image: '/images/case-8.png',
    alt: 'Елена Шакирова',
    title: 'Рост Х12 до 60К $/мес',
    boldPrefix: 'Рост Х12',
    subtitle: 'Банкротство физ.лиц',
  },
  {
    image: '/images/case-9.png',
    alt: 'Василий Кокин',
    title: 'Рост Х10 до 12k $/мес',
    boldPrefix: 'Рост Х10',
    subtitle: 'Автоворонки/чат-боты',
  },
]

// TODO: поведение кнопки не задано в макете (вероятно, раскрытие доп. кейсов) — уточнить у клиента
export const moreResultsLabel = 'Показать еще результаты моих клиентов'

export interface NichesContent {
  // Части заголовков; accent рендерится цветом #bc9b80
  top: { accent1: string; mid: string; accent2: string; tail: string; line2: string }
  image: { src: string; alt: string }
  bottom: { accent: string; tail: string }
}

export const niches: NichesContent = {
  top: {
    accent1: '8 561',
    mid: ' компаний из ',
    accent2: '50',
    tail: ' стран мира',
    line2: 'масштабировали бизнес',
  },
  image: { src: '/images/niches-folders.png', alt: 'Папки с оцифрованными бизнес-нишами' },
  bottom: { accent: '+ 1 000 бизнес ниш', tail: ' с оцифрованным алгоритмом масштабирования' },
}

export interface StatsContent {
  heading: { accent: string; rest: string; lines: string[] }
  cards: { value: string; label: string; body: string; mobileOrder: number }[]
}

export const stats: StatsContent = {
  heading: {
    accent: 'Наша система',
    rest: ' помогает владельцам',
    lines: ['систематизировать и масштабировать', 'бизнесы, выходить на новый уровень'],
  },
  cards: [
    {
      value: '8 561',
      label: 'компании масштабировались по нашей системе',
      body: 'Мы внедряем только проверенные бизнес-инструменты, которые эффективно работают у наших клиентов по всему миру',
      mobileOrder: 1,
    },
    {
      value: 'на 39%',
      label: 'в среднем растет доход после внедрения бизнес-инструментов',
      body: 'Наши клиенты масштабируют бизнес и растут в разы быстрее, чем их конкуренты, у которых отсутствует порядок и система в бизнесе',
      mobileOrder: 3,
    },
    {
      value: '> $3 млрд.',
      label: 'суммарный оборот наших клиентов в год',
      body: 'Бизнес-инструменты эффективно работают в любой компании. Оборот наших клиентов от $150 тыс. до $72 млн. в год.',
      mobileOrder: 2,
    },
  ],
}

export interface MethodologyContent {
  bg: { src: string; alt: string }
  titleLines: string[]
  cta: string
  stats: { value: string; label: string }[]
  captionLines: string[]
  hallLine: string
}

export const methodology: MethodologyContent = {
  bg: { src: '/images/methodology-bg.jpg', alt: 'Екатерина Уколова на сцене форума' },
  titleLines: ['Уникальная', 'методология', 'масштабирования', 'бизнеса'],
  cta: 'ПРИНЯТЬ УЧАСТИЕ В ПРАКТИКУМЕ',
  stats: [
    { value: '8 000', label: 'клиентов' },
    { value: '1 000', label: 'бизнес-ниш в методологии' },
    { value: '50', label: 'стран мира' },
  ],
  captionLines: ['Выступление Tashkent Global', 'Forum MEGATRENING 2022 da'],
  hallLine: 'ЗАЛ — 6 000 человек',
}

export interface BonusesContent {
  heading: { before: string; accent: string; after: string }
  note: string
  checkIcon: string
  groups: {
    label: string
    badge: string
    backImage: string
    frontImage: string
    alt: string
    tallImages: boolean
  }[]
}

export const bonuses: BonusesContent = {
  heading: { before: 'Бонусы ', accent: 'первым 10 оплатившим', after: ' практикум' },
  note: 'Пакет регламентов, должностных инструкций и 2 книг Екатерины Уколовой',
  checkIcon: '/images/icon-check.svg',
  groups: [
    {
      label: 'Инструменты масштабирования',
      badge: '8 шт',
      backImage: '/images/bonus-tools-1.jpg',
      frontImage: '/images/bonus-tools-2.jpg',
      alt: 'Примеры инструментов масштабирования',
      tallImages: true,
    },
    {
      label: 'Книги Екатерины',
      badge: '2 шт',
      backImage: '/images/bonus-books-1.jpg',
      frontImage: '/images/bonus-books-2.jpg',
      alt: 'Книги Екатерины Уколовой',
      tallImages: false,
    },
    {
      label: 'Другие бланки',
      badge: '6 шт',
      backImage: '/images/bonus-blanks-1.jpg',
      frontImage: '/images/bonus-blanks-2.jpg',
      alt: 'Примеры бланков',
      tallImages: true,
    },
  ],
}

export interface FormatContent {
  headline: { before: string; accent: string; after: string }
  limitNote: string
  urgencyNote: string
  datePill: string
  photo: { src: string; alt: string; glow: string }
  formatHeading: { accent: string; rest: string }
  bullets: { text: string; mobileOrder: number }[]
}

export const format: FormatContent = {
  headline: {
    before: 'УЗНАЙТЕ, КАК ПОПАСТЬ В',
    accent: ' «ВЫСШУЮ ЛИГУ»',
    after: ' И ВЫЙТИ В БИЗНЕСЕ НА НОВЫЙ УРОВЕНЬ',
  },
  limitNote: 'Количество мест по такой стоимости ограничено:',
  urgencyNote: 'Количество мест ограничено, оплатите сейчас, чтобы гарантировать себе участие',
  datePill: '19-24 ИЮЛЯ 2026',
  photo: {
    src: '/images/format-photo.png',
    alt: 'Екатерина Уколова',
    glow: '/images/format-glow.png',
  },
  formatHeading: { accent: 'Формат', rest: ' прохождения практикума' },
  bullets: [
    { text: 'Онлайн, в любой комфортной для вас обстановке', mobileOrder: 2 },
    { text: '5 дней без отрыва от бизнес-задач', mobileOrder: 1 },
    { text: 'Разбор элементов системы масштабирования от Екатерины Уколовой', mobileOrder: 4 },
    { text: 'Практика под руководством эксперта', mobileOrder: 3 },
  ],
}

export interface FinalCtaContent {
  bg: { src: string; alt: string }
  titleLines: string[]
  cta: string
}

export const finalCta: FinalCtaContent = {
  bg: { src: '/images/final-cta-bg.jpg', alt: 'Зал участников программы' },
  titleLines: ['У 85% участников', 'программ рост', 'выручки в 2 раза уже', 'через 4 месяца'],
  cta: 'Присоединиться сейчас',
}

export const video: VideoContent = {
  videoUrl: '', // TODO: ссылка клиента на видео
  posterAlt: 'Видео Екатерины Уколовой',
}
