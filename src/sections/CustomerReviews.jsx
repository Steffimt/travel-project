import ReviewCard from "../components/ReviewCard";
import {reviews} from '../constants';
const CustomerReviews = () => {
  return (
    <section>
      <h3 className="font-poppins text-center text-4xl font-bold">
        What Our
        <span className="text-purple"> Travelers</span> Say?
      </h3>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard
          key = {review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews