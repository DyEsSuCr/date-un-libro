// import { Form } from '@/components/Form'
import { Reviews } from '@/components/Review'
import { getBook } from '@/services/books'

interface Props {
  params: {
    id: string
  }
}

export default async function Book ({ params }: Props) {
  const book = await getBook(params.id)

  return (
    <>
      <section className='flex gap-4'>
        <figure className='w-80'>
          <img src={book.image_url} alt={book.title} />
        </figure>
        <aside className='w-full flex flex-col gap-4'>
          <header className='flex flex-col gap-4'>
            <h3 className='text-2xl'>{book.title}</h3>
            <p className='text-slate-600'>
              Author: <span className='text-white'>{book.author}</span>
            </p>
          </header>
          <p className='text-lg'>
            {book.description.split(' ').slice(0, 50).join(' ')}
          </p>
          <p className='font-medium text-zinc-500'>
            Generos: <span className='text-white'>{book.genres.map((genre) => genre).join(', ')}</span>
          </p>
          <p className='text-slate-600'>
            Paginas: <span className='text-white'>{book.num_pages}</span>
          </p>
        </aside>
      </section>

      <section>
        <Reviews id={params.id} />
        {/* <Form /> */}
      </section>
    </>
  )
}
