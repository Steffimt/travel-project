import {Hero, About, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections';
import Nav from './components/Nav';
const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide">
      <Hero/>
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="bg-pale-blue sm:px-36 py-40 padding-x">
      <Services/>
    </section>
    <section className="sm:px-40 padding-x pt-28 pb-36">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-purple padding-x padding-t padding-b">
      <Footer/>
    </section>
  </main>
);

export default App;
