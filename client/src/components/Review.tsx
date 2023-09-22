import { getReviews } from '@/services/reviews'

interface Props {
  id: string
}

export async function Reviews ({ id }: Props) {
  const reviews = await getReviews(id)

  return (
    reviews.map((review) => (
      <div key={review._id}>w
        <span>{review.userId.username}</span>
        <p>{review.plot}</p>
      </div>
    ))
  )
}
