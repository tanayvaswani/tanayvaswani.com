import HeroSection from "@/components/sections/hero-section";
import QuoteComponent from "@/components/sections/quote-section";

const HomePage = () => {
  return (
    <main className="flex flex-col items-start gap-8 md:gap-16">
      <HeroSection />
      <QuoteComponent
        quote={
          "To be insanely hopeful even after all that, you call it madness, I call it strength."
        }
      />
    </main>
  );
};

export default HomePage;
