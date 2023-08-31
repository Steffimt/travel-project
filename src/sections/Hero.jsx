import background from '../assets/images/background.svg';
import Button from '../components/Button';
const Hero = () => {
  return (
    <section id="home" className="w-full xl:flex-row flex justify-center pt-24">
      <div className="relative w-full">
        <img src={background}
        alt="background"
        className="w-full"
        />
        <div className="text-center absolute lg:top-[40%] top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-purple md:text-3xl sm:text-xl leading-none lg:text-[48px] lg:leading-[58px] font-poppins font-semibold">
            Explore<span className="text-black"> the world</span>
          </h1>
          <p className="font-poppins max-w-[32rem] text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] mt-4 md:mb-7 mb-4">
            Let's transform those daydreams into unforgettable experiences and turn your longing for adventure into a reality you can treasure.
          </p>
          <div className="items-center flex justify-center text-center">
            <Button label="Tell me more" className="justify-center items-center flex"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero