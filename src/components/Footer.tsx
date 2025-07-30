import { Heart, MapPin, Phone, Instagram, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const phone = "5512999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de mais informações sobre os serviços do Pet Shop Banho Cão.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/banhocao_sjc', '_blank');
  };

  const openGoogleMaps = () => {
    const address = "Rua Síria, 25, São José dos Campos, SP";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações da Empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pet-blue">Banho Cão</h3>
            <p className="text-background/80">
              Cuidando do seu melhor amigo com amor, carinho e profissionalismo há mais de 10 anos em São José dos Campos.
            </p>
            <div className="flex items-center gap-2 text-pet-green">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Feito com amor para pets</span>
            </div>
          </div>

          {/* Contato Rápido */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pet-orange">Contato</h4>
            <div className="space-y-3">
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(12) 99999-9999</span>
              </button>
              <button 
                onClick={openInstagram}
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@banhocao_sjc</span>
              </button>
              <button 
                onClick={openGoogleMaps}
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Rua Síria, 25 - São José dos Campos</span>
              </button>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pet-green">Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pet-blue" />
                <div className="text-background/80">
                  <p className="text-sm">Segunda a Sábado</p>
                  <p className="text-sm font-medium">8h às 18h</p>
                </div>
              </div>
              <div className="text-background/60 text-sm">
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-background/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Pet Shop Banho Cão. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              Desenvolvido com 🐾 para pets felizes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;