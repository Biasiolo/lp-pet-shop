import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cao2.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pet-light-blue to-pet-light-green">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="relative z-10 text-center max-w-4xl p-8 rounded-3xl bg-neutral-500/30 backdrop-blur-lg border border-white/20 shadow-xl mx-auto">
  <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 drop-shadow-lg">
    PET CARE
  </h1>
  <p className="text-3xl md:text-3xl text-stone-300 font-bold mb-12 drop-shadow-md max-w-3xl mx-auto">
    O melhor cuidado para o seu amigo! 
  </p>
  <p className="text-2xl md:text-2xl text-white font-bold mb-4 drop-shadow-md max-w-4xl mx-auto">
    Banho, tosa e muito carinho em um ambiente profissional e acolhedor.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button 
      variant="hero" 
      size="lg"
      onClick={() => scrollToSection('agendamento')}
      className="text-lg px-8 py-4"
    >
      Agendar Banho
    </Button>
    <Button 
      variant="outline" 
      size="lg"
      onClick={() => scrollToSection('servicos')}
      className="text-lg px-8 py-4 bg-white/90 text-primary border-white/50 hover:bg-white"
    >
      Ver Serviços
    </Button>
  </div>
</div>

    </section>
  );
};

export default Hero;