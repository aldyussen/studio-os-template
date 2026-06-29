'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  email: z.string().email('Неверный e-mail'),
  phone: z.string().min(6, 'Введите номер'),
  role: z.string().min(1, 'Выберите роль'),
  revenue: z.string().min(1, 'Выберите оборот'),
})

type FormValues = z.infer<typeof schema>

const fieldBase =
  'h-[60px] w-full rounded-xl border border-black/10 bg-white px-5 text-[15px] text-[#1b1b24] outline-none transition focus:border-[#c7a379] focus:ring-2 focus:ring-[#c7a379]/30'

const labelBase = 'mb-2 block text-[13px] font-medium text-[#1b1b24]/60'

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-white p-10 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#c7a379]/15 text-3xl">
          ✓
        </div>
        <h3 className="mb-2 text-2xl font-bold text-[#1b1b24]">Заявка отправлена</h3>
        <p className="max-w-sm text-[15px] text-[#1b1b24]/60">
          Спасибо! Мы свяжемся с вами в WhatsApp и пришлём детали закрытого тренинга.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelBase}>
          Введите Ваше имя
        </label>
        <input id="name" className={fieldBase} placeholder="Имя" {...register('name')} />
        {errors.name && <p className="mt-1.5 text-xs text-[#ff2828]">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Ваша почта
        </label>
        <input
          id="email"
          type="email"
          className={fieldBase}
          placeholder="email@example.com"
          {...register('email')}
        />
        {errors.email && <p className="mt-1.5 text-xs text-[#ff2828]">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelBase}>
          Напишите номер WhatsApp
        </label>
        <div className="flex items-center gap-2">
          <span className="flex h-[60px] items-center rounded-xl border border-black/10 bg-white px-4 text-[15px] text-[#1b1b24]/70">
            +1
          </span>
          <input
            id="phone"
            type="tel"
            className={fieldBase}
            placeholder="(000) 000-00-00"
            {...register('phone')}
          />
        </div>
        {errors.phone && <p className="mt-1.5 text-xs text-[#ff2828]">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="role" className={labelBase}>
          Ваша роль в компании?
        </label>
        <select id="role" className={fieldBase} defaultValue="" {...register('role')}>
          <option value="" disabled>
            Выберите вариант
          </option>
          <option>Владелец бизнеса</option>
          <option>Руководитель</option>
          <option>Топ-менеджер</option>
          <option>Самозанятый / эксперт</option>
        </select>
        {errors.role && <p className="mt-1.5 text-xs text-[#ff2828]">{errors.role.message}</p>}
      </div>

      <div>
        <label htmlFor="revenue" className={labelBase}>
          Ваш оборот ($ / мес)
        </label>
        <select id="revenue" className={fieldBase} defaultValue="" {...register('revenue')}>
          <option value="" disabled>
            Выберите вариант
          </option>
          <option>до $10 000</option>
          <option>$10 000 – $50 000</option>
          <option>$50 000 – $250 000</option>
          <option>от $250 000</option>
        </select>
        {errors.revenue && <p className="mt-1.5 text-xs text-[#ff2828]">{errors.revenue.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 h-[64px] w-full rounded-xl bg-[#c7a379] text-[16px] font-bold uppercase tracking-wide text-white transition hover:bg-[#b88f63] disabled:opacity-60"
      >
        {isSubmitting ? 'Отправляем…' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}
