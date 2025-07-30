import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog.jpg";

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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Banho Cão
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
          O melhor cuidado para o seu melhor amigo! Banho, tosa e muito carinho em um ambiente profissional e acolhedor.
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