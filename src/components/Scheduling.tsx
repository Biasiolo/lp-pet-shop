import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, User, Phone, Dog } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ptBR } from "date-fns/locale";

const Scheduling = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    time: '',
    service: '',
    petName: '',
    petSize: '',
    clientName: '',
    phone: '',
    observations: ''
  });

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const services = [
    "Banho Simples",
    "Banho Completo",
    "Tosa Higiênica",
    "Tosa Completa",
    "Pacote VIP"
  ];

  const petSizes = [
    "Pequeno (até 10kg)",
    "Médio (10-25kg)",
    "Grande (25-40kg)",
    "Gigante (acima de 40kg)"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendWhatsAppScheduling = () => {
    if (!date || !formData.time || !formData.service || !formData.petName || !formData.clientName || !formData.phone) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR });
    const dayOfWeek = format(date, "EEEE", { locale: ptBR });
    
    const message = `🐕 *Agendamento Pet Shop Banho Cão*\n\n` +
      `📅 *Data:* ${dayOfWeek}, ${formattedDate}\n` +
      `⏰ *Horário:* ${formData.time}\n` +
      `🛁 *Serviço:* ${formData.service}\n\n` +
      `🐾 *Dados do Pet:*\n` +
      `Nome: ${formData.petName}\n` +
      `Porte: ${formData.petSize}\n\n` +
      `👤 *Dados do Cliente:*\n` +
      `Nome: ${formData.clientName}\n` +
      `Telefone: ${formData.phone}\n` +
      (formData.observations ? `\n📝 *Observações:* ${formData.observations}\n` : '') +
      `\nGostaria de confirmar este agendamento!`;

    const phone = "5512999999999"; // Substitua pelo número real
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Agende o Banho do seu Pet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a data, horário e nos conte sobre seu pet. Entraremos em contato para confirmar!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card shadow-[var(--shadow-card)] border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground flex items-center justify-center gap-2">
              <CalendarIcon className="w-6 h-6 text-pet-blue" />
              Formulário de Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Data */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Data *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0 // Disable past dates and Sundays
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Horário */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horário *
                </Label>
                <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Serviço */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Dog className="w-4 h-4" />
                Serviço Desejado *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Dados do Pet */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="petName">Nome do Pet *</Label>
                <Input
                  id="petName"
                  placeholder="Ex: Rex, Luna..."
                  value={formData.petName}
                  onChange={(e) => handleInputChange('petName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Porte do Pet *</Label>
                <Select value={formData.petSize} onValueChange={(value) => handleInputChange('petSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o porte" />
                  </SelectTrigger>
                  <SelectContent>
                    {petSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dados do Cliente */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Seu Nome *
                </Label>
                <Input
                  id="clientName"
                  placeholder="Seu nome completo"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp *
                </Label>
                <Input
                  id="phone"
                  placeholder="(12) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-2">
              <Label htmlFor="observations">Observações</Label>
              <Textarea
                id="observations"
                placeholder="Alguma informação especial sobre seu pet? (temperamento, alergias, etc.)"
                value={formData.observations}
                onChange={(e) => handleInputChange('observations', e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={sendWhatsAppScheduling}
              className="w-full text-lg py-6"
            >
              Enviar Agendamento via WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              * Campos obrigatórios. Entraremos em contato para confirmar disponibilidade.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Scheduling;