import decor from '../assets/images/decor.svg';
const About = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full pl-[5rem] pr-[3rem]">
      <div className="flex flex-1 flex-col">
        <h2 className="font-pompiere text-[60px] pb-4">
          You Are Here Because
        </h2>
        <p className="mt-4 lg:max-w-lg font-poppins text-lg leading-7 text-black">
        You've checked all the boxes of a typical life trajectory yet despite your success, you sense something is missing. Perhaps you've daydreamed of travelling but aren't quite sure what to do about it. 
        <br/><br/>
        That is why we're here — to bridge the gap between the life you've built and the adventures you crave. Our purpose is to be your compass, guiding you through the uncharted territories of possibilities. Welcome to a world where the journey begins with a single step — and that step starts here.
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img 
        src={decor}
        alt="decor"
        width={843}
        height={696}
        />
      </div>
    </section>
  )
}

export default About