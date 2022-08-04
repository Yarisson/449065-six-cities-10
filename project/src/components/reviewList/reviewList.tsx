import { ReviewType } from '../../types/reviewType';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[],
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => <Review key={item.id} {...item} />)}
    </ul>
  );
}

export default ReviewList;
