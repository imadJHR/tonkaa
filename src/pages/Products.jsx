import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import A from "../assets/A.jpg"
import B from "../assets/B.jpg"
import C from "../assets/C.jpg"
import D from "../assets/D.jpg"
import E from "../assets/E.jpg"
import F from "../assets/F.jpg"
import G from "../assets/G.jpg"
import H from "../assets/H.jpg"
import I from "../assets/I.jpg"
import J from "../assets/J.jpg"
import K from "../assets/K.jpg"
import L from "../assets/L.jpg"
import M from "../assets/M.jpg"
import N from "../assets/N.jpg"
import O from "../assets/O.jpg"
import P from "../assets/P.jpg"
import Q from "../assets/Q.jpg"
import R from "../assets/R.jpg"
import S from "../assets/S.jpg"
import T from "../assets/T.jpg"
import U from "../assets/U.jpg"
import V from "../assets/V.jpg"
import W from "../assets/W.jpg"
import X from "../assets/X.jpg"
import Y from "../assets/Y.jpg"
import Z from "../assets/Z.jpg"
import img9 from "../assets/img9.jpg"

const Products = () => {
  const products = [
    {
      name: "les Tablettes",
      description: "",
      image:A ,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: " La Tablette à casser",
      description: "",
      image: B,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "La Square fourée",
      description: "",
      image: C,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "BOITES",
      description: "",
      image: D,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "Boite à chapeau prestige",
      description: "",
      image: E,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coffert inca",
      description: "",
      image: F,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection coya",
      description: "",
      image: G,
      category: "",
      price: "",
      weight: ""
    },
    
    {
      name: "collection intihuatana",
      description: "",
      image: H,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection inti",
      description: "",
      image: I,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection huaca",
      description: "",
      image: J,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection pizarro",
      description: "",
      image: K,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection yucatan",
      description: "",
      image: L,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection zama",
      description: "",
      image: M,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupe coba",
      description: "",
      image: N,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection cozumel",
      description: "",
      image: O,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection tulum",
      description: "",
      image: P,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection zama",
      description: "",
      image: Q,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection yucatan",
      description: "",
      image: R,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupe ajua",
      description: "",
      image: S,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupe tankah",
      description: "",
      image: T,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupe xelha",
      description: "",
      image: U,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "plateaux itzel",
      description: "",
      image: V,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupe itzia",
      description: "",
      image: W,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: " vases pakal",
      description: "",
      image: X,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "collection maya",
      description: "",
      image: Y,
      category: "",
      price: "",
      weight: ""
    },
    {
      name: "coupes izamal",
      description: "",
      image: Z,
      category: "",
      price: "",
      weight: ""
    },
    
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
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0f] to-[#2a1f1f] text-[#e6ccb2]">
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
            backgroundImage: `url(${img9})`,
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
            className="text-6xl md:text-7xl font-bold mb-6 font-serif"
          >
            Notre Collection
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto px-4 font-light"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-[#2a1f1f] rounded-xl overflow-hidden shadow-2xl hover:shadow-[#8B4513]/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#e6ccb2] group-hover:text-[#8B4513] transition-colors duration-300">
                  {product.name}
                </h3>
                {product.category && (
                  <p className="text-sm text-[#8B4513] font-medium mb-2">
                    {product.category}
                  </p>
                )}
                {product.description && (
                  <p className="text-sm text-[#e6ccb2]/80 line-clamp-2 group-hover:text-[#e6ccb2] transition-colors duration-300">
                    {product.description}
                  </p>
                )}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="h-0.5 bg-[#8B4513] mt-4 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quality Statement Section */}
      <section className="bg-[#241515] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            Notre Engagement envers la Qualité
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-[#e6ccb2]/90">
            <p className="text-lg leading-relaxed">
              Chez L'Atelier TONKA, nous nous engageons à offrir une expérience chocolatée incomparable. Chaque produit de notre collection est le fruit d'un savoir-faire artisanal, utilisant les meilleurs ingrédients sourcés de manière éthique et durable.
            </p>
            <p className="text-lg leading-relaxed">
              Nos maîtres chocolatiers combinent des techniques traditionnelles avec des innovations modernes pour créer des saveurs uniques qui raviront vos papilles. De la sélection des fèves de cacao à l'emballage final, chaque étape est réalisée avec le plus grand soin pour garantir une qualité exceptionnelle.
            </p>
            <p className="text-lg leading-relaxed">
              Que vous choisissiez nos truffes au chocolat noir intense, nos pralines au lait onctueux ou nos créations fruitées, vous pouvez être assuré que chaque bouchée est une célébration de l'art du chocolat.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B4513]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B4513]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
};

export default Products;

