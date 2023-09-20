import { getBook } from '@/services/books'

interface Props {
  params: {
    id: string
  }
}

export default async function Book ({ params }: Props) {
  const book = await getBook()

  return (
    <>
      <section className='grid grid-cols-5 px-4 shadow-2xl'>
        <h2>hola</h2>
      </section>

      <section>
        <h2 className='font-semibold text-8xl'>Reseñas</h2>
      </section>
    </>
  )
}
