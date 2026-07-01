import type {
  Barrier,
  DiagnosticAnswers,
  Niche,
  Role,
  ScoreHint,
  Turnover,
} from '@/types/lead'

export interface Option<T extends string> {
  value: T
  label: string
}

export interface SingleStep<T extends string> {
  id: 'niche' | 'barrier' | 'turnover'
  kind: 'single'
  title: string
  hint?: string
  options: Option<T>[]
}

export interface MultiStep {
  id: 'pains'
  kind: 'multi'
  title: string
  hint?: string
  options: Option<string>[]
}

export interface DiagnosticConfig {
  hero: {
    ctaLine1: string
    ctaLine2: string
    ariaLabel: string
  }
  intro: {
    title: string
    body: string
    start: string
  }
  nav: {
    back: string
    next: string
    finish: string
  }
  progressLabel: (current: number, total: number) => string
  steps: {
    niche: SingleStep<Niche>
    barrier: SingleStep<Barrier>
    turnover: SingleStep<Turnover>
    pains: MultiStep
  }
  result: {
    eyebrow: string
    buildLine: (a: DiagnosticAnswers) => string
    scratch: {
      title: string
      reveal: string
      overlayText: string
    }
    prize: {
      badge: string
      title: string
      subtitle: string
      file: string
    }
    form: {
      title: string
      nameLabel: string
      namePlaceholder: string
      phoneLabel: string
      phonePlaceholder: string
      roleLabel: string
      roleOptions: Option<Role>[]
      submit: string
      submitting: string
      consent: string
    }
  }
  success: {
    title: string
    body: string
    fileCtaLabel: string
    close: string
  }
}

const NICHE_LABELS: Record<Niche, string> = {
  'lashes-brows': 'ресницы и брови',
  hair: 'парикмахерская',
  nails: 'ногтевой сервис',
  'beauty-complex': 'бьюти-комплекс',
  barbershop: 'барбершоп',
}

const TURNOVER_LABELS: Record<Turnover, string> = {
  'lt-10k': 'до $10k',
  '10-50k': '$10–50k',
  '50-200k': '$50–200k',
  'gt-200k': '$200k+',
}

const BARRIER_FOCUS: Record<Barrier, string> = {
  'team-chaos': 'выстроить структуру команды и снять хаос',
  'income-ceiling': 'пробить потолок дохода через систему, а не через ручной труд',
  'no-sales-system': 'собрать управляемую систему продаж',
  'few-leads': 'наладить поток заявок и его окупаемость',
}

export const vadimDiagnostic: DiagnosticConfig = {
  hero: {
    ctaLine1: 'Пройти экспресс-диагностику салона',
    ctaLine2: 'Собрать план роста за 60 сек →',
    ariaLabel: 'Пройти экспресс-диагностику салона',
  },
  intro: {
    title: 'За 60 секунд соберём план роста под твой салон',
    body: '4 коротких вопроса — и ты получишь персональный фокус роста и гарантированный файл с инструментами. Без звонков и обязательств.',
    start: 'Начать',
  },
  nav: {
    back: 'Назад',
    next: 'Далее',
    finish: 'Показать результат',
  },
  progressLabel: (current, total) => `Шаг ${current} из ${total}`,
  steps: {
    niche: {
      id: 'niche',
      kind: 'single',
      title: 'Что за салон?',
      options: [
        { value: 'lashes-brows', label: 'Ресницы и брови' },
        { value: 'hair', label: 'Парикмахерская' },
        { value: 'nails', label: 'Ногтевой сервис' },
        { value: 'beauty-complex', label: 'Бьюти-комплекс' },
        { value: 'barbershop', label: 'Барбершоп' },
      ],
    },
    barrier: {
      id: 'barrier',
      kind: 'single',
      title: 'Главный барьер в росте?',
      options: [
        { value: 'team-chaos', label: 'Хаос в команде' },
        { value: 'income-ceiling', label: 'Потолок дохода' },
        { value: 'no-sales-system', label: 'Нет системы продаж' },
        { value: 'few-leads', label: 'Мало заявок' },
      ],
    },
    turnover: {
      id: 'turnover',
      kind: 'single',
      title: 'Оборот салона в месяц?',
      hint: 'Нужно, чтобы подобрать инструменты под твой масштаб',
      options: [
        { value: 'lt-10k', label: 'До $10k' },
        { value: '10-50k', label: '$10–50k' },
        { value: '50-200k', label: '$50–200k' },
        { value: 'gt-200k', label: '$200k+' },
      ],
    },
    pains: {
      id: 'pains',
      kind: 'multi',
      title: 'Что мешает больше всего?',
      hint: 'Можно выбрать несколько',
      options: [
        { value: 'hiring', label: 'Трудно нанимать и удерживать людей' },
        { value: 'admin', label: 'Администратор не продаёт' },
        { value: 'ads', label: 'Реклама сливает бюджет' },
        { value: 'retention', label: 'Клиенты не возвращаются' },
        { value: 'finance', label: 'Нет финансового учёта' },
        { value: 'delegation', label: 'Всё завязано на мне' },
      ],
    },
  },
  result: {
    eyebrow: 'Твой персональный фокус',
    buildLine: (a) => {
      const niche = a.niche ? NICHE_LABELS[a.niche] : 'салона'
      const turnover = a.turnover ? TURNOVER_LABELS[a.turnover] : ''
      const focus = a.barrier ? BARRIER_FOCUS[a.barrier] : 'навести системный порядок'
      const turnoverPart = turnover ? ` с оборотом ${turnover}` : ''
      return `Для «${niche}»${turnoverPart} следующий шаг — ${focus}.`
    },
    scratch: {
      title: 'Твой гарантированный бонус',
      reveal: 'Открыть',
      overlayText: 'Стереть',
    },
    prize: {
      badge: 'Бонус для всех',
      title: 'ТОП-10 инструментов роста салона',
      subtitle: 'PDF-подборка, которую внедряют участники интенсива',
      file: '/files/top-10-instrumentov.pdf',
    },
    form: {
      title: 'Куда прислать файл?',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Имя',
      phoneLabel: 'WhatsApp',
      phonePlaceholder: '+7 (7__) ___-__-__',
      roleLabel: 'Ваша роль в салоне',
      roleOptions: [
        { value: 'owner', label: 'Собственник' },
        { value: 'manager', label: 'Управляющий' },
        { value: 'master', label: 'Мастер' },
        { value: 'admin', label: 'Админ' },
      ],
      submit: 'Забрать файл',
      submitting: 'Отправляем…',
      consent: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    },
  },
  success: {
    title: 'Готово — файл ваш',
    body: 'Продублировали доступ в WhatsApp. Менеджер интенсива на связи, если понадобится помощь с внедрением.',
    fileCtaLabel: 'Открыть ТОП-10 инструментов',
    close: 'Закрыть',
  },
}

export function computeScoreHint(turnover: Turnover, role: Role): ScoreHint {
  if (turnover === 'lt-10k') return 'cold'
  const highTurnover = turnover === '50-200k' || turnover === 'gt-200k'
  const decisionMaker = role === 'owner' || role === 'manager'
  if (highTurnover && decisionMaker) return 'hot'
  return 'warm'
}
