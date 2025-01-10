import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Truffes au chocolat noir",
      description: "Truffes au chocolat noir riches avec un cœur de ganache lisse, faites à la main par nos maîtres chocolatiers",
      image: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Collection Signature",
      price: "24,99€",
      weight: "200g"
    },
    {
      name: "Pralines au chocolat au lait",
      description: "Pralines au chocolat au lait crémeuses remplies de crème de noisette, un parfait équilibre entre douceur et noisette",
      image: "https://images.unsplash.com/photo-1548907040-4d42bfc0c5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Collection Classique",
      price: "22,99€",
      weight: "180g"
    },
    {
      name: "Barres au chocolat blanc et framboise",
      description: "Barres de chocolat blanc lisses avec un cœur de framboise acidulée, un contraste délicieux de saveurs",
      image: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Fusion Fruitée",
      price: "19,99€",
      weight: "150g"
    },
    {
      name: "Bonbons au caramel salé",
      description: "Bonbons au chocolat noir luxueux remplis de notre caramel salé signature, un parfait mélange sucré-salé",
      image: "https://images.unsplash.com/photo-1605525299832-ecd9f1c5bfb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Sélection Gourmet",
      price: "27,99€",
      weight: "220g"
    },
    {
      name: "Écorce de chocolat pistache",
      description: "Écorce de chocolat noir artisanale parsemée de pistaches grillées et d'une pointe de sel de mer",
      image: "https://images.unsplash.com/photo-1613806497096-c1f6a51e0d7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Créations Artisanales",
      price: "21,99€",
      weight: "175g"
    },
    {
      name: "Truffes à l'orange",
      description: "Truffes délicates au chocolat noir infusées de zestes d'orange naturelle pour une touche rafraîchissante",
      image: "https://images.unsplash.com/photo-1605525298899-6e4e8b1c6f0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Collection Signature",
      price: "25,99€",
      weight: "200g"
    }
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "price": product.price.replace('€', ''),
          "priceCurrency": "EUR"
        }
      }
    }))
  };
  

  return (
    <div className="min-h-screen bg-[#1a0f0f] text-[#e6ccb2]">
      <Helmet>
        <title>Luxury Chocolate Collection | L'Atelier TONKA</title>
        <meta name="description" content="Discover our exquisite collection of handcrafted chocolates. From rich dark chocolate truffles to creamy milk chocolate pralines, indulge in the artistry of fine chocolate making." />
        <meta name="keywords" content="luxury chocolates, artisan chocolates, chocolate truffles, pralines, chocolate bars, gourmet chocolates" />
        <link rel="canonical" href="https://www.ateliertonka.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            Notre Collection
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto px-4"
          >
            Découvrez l'art de la chocolaterie fine, où chaque pièce est une œuvre d'art gustative
          </motion.p>
        </div>
      </motion.section>

      {/* Products Showcase */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-6">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                >
                  <div>
                    <p className="text-sm text-[#8B4513] font-medium mb-2">
                      {product.category}
                    </p>
                    <p className="text-white text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-[#8B4513] font-medium mb-2">
                  {product.category}
                </p>
                
                
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-[#8B4513]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#8B4513]/10 rounded-full blur-3xl" />

      {/* Additional SEO Content */}
      <section className="bg-[#241515] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Notre Engagement envers la Qualité</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Chez L'Atelier TONKA, nous nous engageons à offrir une expérience chocolatée incomparable. Chaque produit de notre collection est le fruit d'un savoir-faire artisanal, utilisant les meilleurs ingrédients sourcés de manière éthique et durable.
            </p>
            <p className="text-lg mb-6">
              Nos maîtres chocolatiers combinent des techniques traditionnelles avec des innovations modernes pour créer des saveurs uniques qui raviront vos papilles. De la sélection des fèves de cacao à l'emballage final, chaque étape est réalisée avec le plus grand soin pour garantir une qualité exceptionnelle.
            </p>
            <p className="text-lg">
              Que vous choisissiez nos truffes au chocolat noir intense, nos pralines au lait onctueux ou nos créations fruitées, vous pouvez être assuré que chaque bouchée est une célébration de l'art du chocolat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

