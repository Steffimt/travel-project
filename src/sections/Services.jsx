import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section id="services" className="flex justify-center flex-wrap gap-20 w-full">
      <div className="w-full text-center">
        <h1 className="text-black text-3xl leading-none lg:text-[48px] lg:leading-[58px] font-poppins font-semibold">
          Our<span className="text-purple"> Services</span>
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-9 w-full">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
      </div>
    </section>
  );
};

export default Services;