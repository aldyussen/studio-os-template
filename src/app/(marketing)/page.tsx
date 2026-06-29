import { HeroCentered } from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <HeroCentered
        eyebrow="Первая в Казахстане конференция для бьюти-бизнеса"
        eyebrowVariant="pill"
        title="Как в бьюти бизнесе выйти на 5–10+ млн чистыми"
        description="2-дневный интенсив для владельцев салонов и мастеров, которые хотят выйти на новый уровень дохода и построить системный бизнес."
        primary={{ label: 'Оставить заявку', href: '#form' }}
        secondary={{ label: 'Программа', href: '#program', variant: 'outline' }}
      />
    </>
  )
}
