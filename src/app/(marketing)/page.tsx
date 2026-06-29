import { HeroCentered } from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <HeroCentered
        eyebrow="Интенсив для бьюти-бизнеса"
        eyebrowVariant="pill"
        title={
          <>
            Как в бьюти бизнесе
            <br />
            выйти на{' '}
            <span className="text-primary">5–10+ млн</span>
            <br />
            чистыми
          </>
        }
        description="2-дневный интенсив для владельцев салонов и мастеров, которые хотят выйти на новый уровень дохода и построить системный бизнес."
        primary={{ label: 'Оставить заявку', href: '#form' }}
        secondary={{ label: 'Программа', href: '#program', variant: 'outline' }}
        variant="glow"
      />
    </>
  )
}
