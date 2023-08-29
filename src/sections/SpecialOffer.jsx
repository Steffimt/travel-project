import promos from '../assets/images/promos.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import Button from '../components/Button';
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center  max-xl:flex-col-reverse gap-24">
      <div className="flex-1"> 
        <img src={promos} width={522} height={436} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-purple"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Through carefully crafted travel guides and expert tips, we're committed to helping you infuse your life with the richness of exploration.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Buy now" iconURL={arrowRight}/>
          <Button label ="View details" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer