import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import img1 from "../assets/img1.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img17 from "../assets/img17.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProducts = [
    {
      title: "L'élégance de la truffe",
      description:
        "Truffes veloutées au chocolat noir avec une pointe de sel de mer",
      image: img7,
      price: "",
      rating: 4.8,
    },
    {
      title: "Paradis de la praline",
      description:
        "Pralines délicates fourrées à la crème de noisettes torréfiées",
      image: img8,
      price: "",
      rating: 4.9,
    },
    {
      title: "Artisan Bars",
      description:
        "Des barres de chocolat d'origine unique, fabriquées à la perfection",
      image: img17,
      price: "",
      rating: 4.7,
    },
  ];

  const testimonials = [
    {
      quote:
        "Hello ! Merci beaucoup ! Alors c'était très très bon !!! Mais j'avoue que j'ai plus aimé la mousse! C'est une turie!!!",
      author: "Marie L.",
    },
    {
      quote: "La mousse était très bonne et a eu beaucoup de succès",
      author: "Jean-Pierre D.",
    },
    {
      quote: "C'était une tuerie!! Bravo !",
      author: "Sophie M.",
    },
    {
      quote:
        "Merci beaucoup pour la mousse qui était excellente. Bravo!!! Nous n'avons pas encore goûté les chocolats. Bon We! Sylvie & Pascal",
      author: "Sylvie & Pascal R.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L'Atelier TONKA",
    description:
      "Artisan chocolatier spécialisé dans la création de chocolats, entremets et confiseries de luxe.",
    url: "https://www.ateliertonka.com",
    logo: "https://www.ateliertonka.com/logo.png",
    sameAs: [
      "https://www.facebook.com/ateliertonka",
      "https://www.instagram.com/ateliertonka",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Rue du Chocolat",
      addressLocality: "Paris",
      postalCode: "75001",
      addressCountry: "FR",
    },
    offers: {
      "@type": "Offer",
      itemOffered: featuredProducts.map((product) => ({
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.image,
        offers: {
          "@type": "Offer",
          price: product.price.replace("€", ""),
          priceCurrency: "EUR",
        },
      })),
    },
  };

  return (
    <div className="bg-[#1a0f0f] text-[#e6ccb2]">
      <Helmet>
        <title>
          L'Atelier TONKA | Chocolats Artisanaux et Entremets Créatifs
        </title>
        <meta
          name="description"
          content="Découvrez l'art du chocolat artisanal chez L'Atelier TONKA. Nos créations uniques allient tradition et innovation pour une expérience gustative inoubliable."
        />
        <meta
          name="keywords"
          content="chocolat artisanal, entremets, confiserie, L'Atelier TONKA, pralines, truffes, barres chocolatées"
        />
        <link rel="canonical" href="https://www.ateliertonka.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[80vh] md:min-h-screen relative flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={img1}
            className="object-cover w-full h-full"
            alt="Assortiment de chocolats artisanaux L'Atelier TONKA"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-[#e6ccb2]">
              Chocolat entremets créatif
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-[#d4b08c] px-4">
              Découvrez l'art de l'artisanat du chocolat chez L'Atelier TONKA,
              où chaque pièce raconte une histoire de passion et de tradition
            </p>
            <Link to={"/products"}>
              <Button
                size="lg"
                className="bg-[#8B4513] hover:bg-[#654321] text-[#e6ccb2] px-6 py-3 text-base md:text-lg"
              >
                Explorez Notre Collection <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Marquee Section */}
      <Marquee
        gradient={false}
        speed={50}
        className="bg-[#2c1a0f] py-4 md:py-6 text-[#e6ccb2]"
      >
        <div className="flex space-x-8 md:space-x-12">
          {[
            "Excellence Artisanale",
            "Ingrédients Premium",
            "Qualité Artisanale",
            "Méthodes Traditionnelles",
            "Approvisionnement Durable",
          ].map((text) => (
            <span
              key={text}
              className="text-base md:text-xl font-semibold mx-4 md:mx-8"
            >
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      {/* Featured Products */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[#e6ccb2]"
          >
            Notre Collection Signature
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#e6ccb2]">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#d4b08c] mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-[#e6ccb2]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-[#2c1a0f]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[#e6ccb2]"
          >
            Ce que disent nos clients
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1a0f0f] p-6 md:p-8 rounded-xl shadow-lg"
              >
                <p className="text-base md:text-lg mb-4 text-[#d4b08c] italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-right text-[#8B4513] font-semibold">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-[#e6ccb2]"
          >
            Prêt à vous faire plaisir ?
          </motion.h2>
          <p className="text-base md:text-xl mb-8 md:mb-12 text-[#d4b08c] max-w-2xl mx-auto">
            Rejoignez notre communauté d'amateurs de chocolat et soyez les
            premiers informés de nos dernières créations et offres exclusives.
          </p>
          <Button
            size="lg"
            className="bg-[#8B4513] hover:bg-[#654321] text-[#e6ccb2] px-6 py-3 text-base md:text-lg"
          >
            Abonnez-vous maintenant <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
