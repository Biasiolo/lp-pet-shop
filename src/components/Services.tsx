import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Scissors, Sparkles, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Banho Completo",
      description: "Banho com shampoo premium, condicionador e secagem profissional",
      price: "R$ 35 - R$ 85",
      details: "Inclui limpeza de ouvidos e corte de unhas"
    },
    {
      icon: Scissors,
      title: "Tosa Higiênica",
      description: "Tosa nas áreas íntimas para melhor higiene do seu pet",
      price: "R$ 25 - R$ 45",
      details: "Essencial para a saúde e conforto"
    },
    {
      icon: Sparkles,
      title: "Tosa Completa",
      description: "Tosa artística personalizada conforme a raça do seu pet",
      price: "R$ 55 - R$ 120",
      details: "Inclui banho, secagem e acabamento"
    },
    {
      icon: Heart,
      title: "Pacote VIP",
      description: "Banho + tosa + hidratação + perfume + laço decorativo",
      price: "R$ 85 - R$ 150",
      details: "O tratamento mais completo para seu pet"
    }
  ];

  const openWhatsApp = (service: string) => {
    const message = `Olá! Gostaria de agendar o serviço: ${service}`;
    const phone = "5512999999999"; // Substitua pelo número real
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para deixar seu pet limpo, bonito e feliz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-pet-blue to-pet-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-2xl font-bold text-pet-blue">{service.price}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <p className="text-sm text-pet-green font-medium">{service.details}</p>
                  <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={() => openWhatsApp(service.title)}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;