import { Heart, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sobre o Pet's Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Há mais de 10 anos cuidando dos pets de São José dos Campos com amor, dedicação e profissionalismo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card to-muted/30 shadow-[var(--shadow-card)]">
            <div className="w-16 h-16 bg-pet-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Amor e Carinho</h3>
            <p className="text-muted-foreground">
              Tratamos cada pet como se fosse nosso, com todo o amor e cuidado que eles merecem.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card to-muted/30 shadow-[var(--shadow-card)]">
            <div className="w-16 h-16 bg-pet-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Qualidade Premium</h3>
            <p className="text-muted-foreground">
              Utilizamos apenas produtos de alta qualidade e técnicas profissionais de grooming.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card to-muted/30 shadow-[var(--shadow-card)]">
            <div className="w-16 h-16 bg-pet-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Experiência</h3>
            <p className="text-muted-foreground">
              Mais de uma década de experiência no cuidado e bem-estar dos seus companheiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;