import Button2 from '../components/Button2';
const Subscribe = () => {
  return (
    <section id="contact" className="flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-poppins leading-[68px] font-bold lg:max-w-2xl">Sign Up and Stay
      <span className="text-purple"> Updated</span> with Us</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text"
        placeholder="Subscribe@travel.co"
        className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button2 label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe