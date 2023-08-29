import star from '../assets/icons/star.svg';
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <div className="mt-5 flex justify-center items-center gap-1">
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"
            />
            <p className="text-xl font-poppins">({rating})</p>
        </div>
        <h3 className="mt-1 font-poppins text-3xl text-center font-bold">{customerName}</h3>
        <p className="mt-3 max-w-[20.5rem] text-center font-pompiere text-slate-gray text-2xl leading-7">{feedback}</p>
    </div>
  )
}

export default ReviewCard