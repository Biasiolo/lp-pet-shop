import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, Clock, Heart } from "lucide-react";
import dogImageW from '../assets/cao4.jpg';

const Contact = () => {
  const openWhatsApp = () => {
    const phone = "5512999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de mais informações sobre os serviços do Pet Shop Banho Cão.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/banhocao_sjc', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-muted/30 relative py-20 bg-muted/30 bg-cover bg-center"
      style={{ backgroundImage: `url(${dogImageW})` }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 p-8  mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Estamos sempre prontos para atender você e seu pet com o carinho que vocês merecem!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <Card className="bg-card shadow-[var(--shadow-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-pet-blue" />
                  Fale Conosco
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">(12) 99999-9999</p>
                      <p className="text-sm text-pet-green">Resposta rápida e atendimento personalizado</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Instagram</h3>
                      <p className="text-muted-foreground">@banhocao_sjc</p>
                      <p className="text-sm text-pet-blue">Acompanhe nosso trabalho e novidades</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-pet-orange rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sábado: 8h às 18h</p>
                      <p className="text-sm text-pet-orange">Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    className="w-full"
                    onClick={openWhatsApp}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full"
                    onClick={openInstagram}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir no Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Diferenciais */}
            <Card className="bg-card shadow-[var(--shadow-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pet-blue" />
                  Por que nos escolher?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pet-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experiência e Carinho</h4>
                      <p className="text-sm text-muted-foreground">
                        Mais de 10 anos cuidando dos pets com amor e dedicação
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pet-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Produtos Premium</h4>
                      <p className="text-sm text-muted-foreground">
                        Utilizamos apenas produtos de alta qualidade e seguros
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pet-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Ambiente Seguro</h4>
                      <p className="text-sm text-muted-foreground">
                        Instalações modernas e protocolos de segurança rigorosos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pet-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Preços Justos</h4>
                      <p className="text-sm text-muted-foreground">
                        Qualidade premium com preços acessíveis para todos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pet-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Atendimento Personalizado</h4>
                      <p className="text-sm text-muted-foreground">
                        Cada pet é único e merece cuidados especiais
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/50 rounded-lg text-center">
                  <p className="text-sm font-medium text-foreground">
                    "Seu pet em boas mãos, sempre! 🐾"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;