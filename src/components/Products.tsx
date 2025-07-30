import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const Products = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const products: Product[] = [
    {
      id: 1,
      name: "Shampoo Premium Cães",
      description: "Shampoo hipoalergênico para todos os tipos de pelo",
      price: 25.90,
      category: "Higiene",
      image: "🧴"
    },
    {
      id: 2,
      name: "Coleira Antipulgas",
      description: "Proteção duradoura contra pulgas e carrapatos",
      price: 35.50,
      category: "Saúde",
      image: "🎀"
    },
    {
      id: 3,
      name: "Ração Premium 15kg",
      description: "Ração super premium para cães adultos",
      price: 120.00,
      category: "Alimentação",
      image: "🥘"
    },
    {
      id: 4,
      name: "Brinquedo Corda",
      description: "Brinquedo resistente para diversão e limpeza dental",
      price: 18.90,
      category: "Brinquedos",
      image: "🪀"
    },
    {
      id: 5,
      name: "Condicionador Pelos Longos",
      description: "Condicionador especial para pelos longos e sedosos",
      price: 32.90,
      category: "Higiene",
      image: "🧴"
    },
    {
      id: 6,
      name: "Petisco Natural",
      description: "Petiscos naturais sem conservantes artificiais",
      price: 15.50,
      category: "Petiscos",
      image: "🦴"
    }
  ];

  const updateQuantity = (productId: number, change: number) => {
    setCart(prev => {
      const newQuantity = (prev[productId] || 0) + change;
      if (newQuantity <= 0) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newQuantity };
    });
  };

  const sendWhatsAppOrder = () => {
    const orderItems = Object.entries(cart).map(([productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return `${quantity}x ${product?.name} - R$ ${((product?.price || 0) * quantity).toFixed(2)}`;
    });

    const total = Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product?.price || 0) * quantity;
    }, 0);

    const message = `🛒 *Pedido Pet Shop Banho Cão*\n\n${orderItems.join('\n')}\n\n💰 *Total: R$ ${total.toFixed(2)}*\n\nGostaria de finalizar este pedido!`;
    
    const phone = "5512999999999"; // Substitua pelo número real
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product?.price || 0) * quantity;
    }, 0);
  };

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Produtos para seu Pet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção especial de produtos de qualidade para o cuidado e bem-estar do seu companheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-border/50"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{product.image}</div>
                <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
                <p className="text-2xl font-bold text-pet-blue">R$ {product.price.toFixed(2)}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={!cart[product.id]}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {cart[product.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6 bg-card rounded-lg shadow-[var(--shadow-card)] p-4 border border-border/50 z-50">
            <div className="text-center mb-3">
              <p className="text-sm text-muted-foreground">
                {getTotalItems()} item(s) no carrinho
              </p>
              <p className="text-lg font-bold text-pet-blue">
                Total: R$ {getTotalPrice().toFixed(2)}
              </p>
            </div>
            <Button 
              variant="whatsapp" 
              onClick={sendWhatsAppOrder}
              className="w-full"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Finalizar Pedido
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;