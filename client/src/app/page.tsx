import { getBooks } from '@/services/books'
import Link from 'next/link'

export default async function Home () {
  const books = await getBooks()

  return (
    <>
      <section>
        <h2 className='font-semibold text-8xl'>Somos Date un libro Editorial</h2>
        <p>
          Exploramos las vastas fronteras del conocimiento literario, erigiendo puentes entre la erudición y la imaginación, para deleitar las mentes más ávidas con el esplendor de nuestras obras literarias.
        </p>
      </section>

      <section className='grid grid-cols-5 px-4 shadow-2xl h-fit'>
        {
            books.slice(0, 20).map((book) => (
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              <Link className='max-w-[120px]' key={book._id} href={`/book/${book._id}`}>
                <figure className='figure'>
                  <img className='object-cover' src={book.image_url} />
                </figure>
              </Link>
            ))
          }
      </section>
    </>
  )
}
