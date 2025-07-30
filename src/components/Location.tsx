import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  const openGoogleMaps = () => {
    const address = "Rua Síria, 25, São José dos Campos, SP";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  const openWhatsApp = () => {
    const phone = "5512999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de mais informações sobre os serviços do Pet Shop Banho Cão.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos localizados em um ponto de fácil acesso em São José dos Campos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de Localização */}
            <Card className="bg-card shadow-[var(--shadow-card)] border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-pet-blue" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pet-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Pet Shop Banho Cão</h3>
                      <p className="text-muted-foreground">
                        Rua Síria, 25<br />
                        São José dos Campos - SP<br />
                        CEP: 12345-678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pet-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sábado: 8h às 18h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-pet-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Contato</h3>
                      <p className="text-muted-foreground">
                        WhatsApp: (12) 99999-9999<br />
                        Instagram: @banhocao_sjc
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="default" 
                    className="w-full" 
                    onClick={openGoogleMaps}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={openWhatsApp}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mapa Placeholder */}
            <Card className="bg-card shadow-[var(--shadow-card)] border-border/50">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pet-light-blue to-pet-light-green rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-pet-blue mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Rua Síria, 25
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      São José dos Campos - SP
                    </p>
                    <Button variant="outline" onClick={openGoogleMaps}>
                      Ver Localização
                    </Button>
                  </div>
                  {/* Decorative map-like grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-pet-blue/20"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações Adicionais */}
          <Card className="mt-8 bg-muted/50 border-border/50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  🚗 Facilidades de Acesso
                </h3>
                <p className="text-muted-foreground">
                  Estacionamento gratuito na frente • Próximo ao centro da cidade • 
                  Fácil acesso por transporte público • Localização segura e bem sinalizada
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;