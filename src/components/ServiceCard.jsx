const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[320px] sm:min-w-[320px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-white">
      <div className="w-11 h-11 flex justify-center items-center bg-purple rounded-full">
        <img src={imgURL} alt={label} width={24} height={24}/>
      </div>
      <h3 className="mt-5 text-3xl leading-normal font-bold font-poppins">{label}</h3>
      <p className="mt-3 break-words font-poppins text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard