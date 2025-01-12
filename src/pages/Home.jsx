import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/img1.jpg";
import img8 from "../assets/img8.jpg";
import home3 from "../assets/home3.jpg";
import { Link } from "react-router-dom";
import home1 from "../assets/Home1.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const Home = () => {
  const featuredProducts = [
    {
      title: "ART DE LA TABLE CERAMIQUE",
      description: "Élégants articles en céramique pour une table raffinée.",
      image: home1,
      price: "",
      rating: 4.8,
    },
    {
      title: "Nos Boites Et Coffrets",
      description: "Boîtes et coffrets pratiques et stylés.",
      image: img8,
      price: "",
      rating: 4.9,
    },
    {
      title: "ART DE LA TABLE METAL",
      description: "Articles en métal pour une touche moderne.",
      image: home3,
      price: "",
      rating: 4.7,
    },
  ];

  const testimonials = [
    {
      quote:
        "Hello ! Merci beaucoup ! Alors c'était très très bon !!! Mais j'avoue que j'ai plus aimé la mousse! C'est une turie!!!",
    },
    {
      quote: "La mousse était très bonne et a eu beaucoup de succès",
    },
    {
      quote: "C'était une tuerie!! Bravo !",
    },
    {
      quote:
        "Merci beaucoup pour la mousse qui était excellente. Bravo!!! Nous n'avons pas encore goûté les chocolats. Bon We! Sylvie & Pascal",
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
            <Link to="/collection">
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
      {/* Video Reels Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a0f00] via-[#2d1810] to-[#1a0f00] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI0NTEzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-[pan_20s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-16 text-center text-[#e6ccb2] relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e6ccb2] via-[#d4b08c] to-[#e6ccb2] animate-gradient">
              Nos Dernières Créations
            </span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {[
              {
                video: video1,
                title: "Truffes Signature",
                description:
                  "Notre collection exclusive de truffes artisanales",
              },
              {
                video: video2,
                title: "Pralinés Maison",
                description: "L'art du praliné traditionnel revisité",
              },
              {
                video: video3,
                title: "Tablettes Artisanales",
                description: "Des saveurs uniques à partager",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B4513] via-[#d4b08c] to-[#8B4513] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy overflow-hidden" />
                <div className="relative rounded-xl overflow-hidden bg-[#1a0f0f] ring-1 ring-gray-900/5 leading-none">
                  <div className="aspect-[9/16] overflow-hidden">
                    <video
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={item.video} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a0f00] via-[#2d1810] to-[#1a0f00] relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI0NTEzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-[pan_20s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center text-[#e6ccb2] relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e6ccb2] via-[#d4b08c] to-[#e6ccb2] animate-gradient">
                Notre Collection Signature
              </span>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </motion.div>

          <Link
            to="/collection"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B4513] via-[#d4b08c] to-[#8B4513] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy overflow-hidden" />

                <div className="relative rounded-xl overflow-hidden bg-[#1a0f0f] ring-1 ring-gray-900/5 leading-none">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[300px] object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Content overlay with glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-bold text-[#e6ccb2] mb-3"
                      >
                        {product.title}
                      </motion.h3>
                      <p className="text-[#d4b08c] text-sm md:text-base leading-relaxed lg:opacity-0 lg:group-hover:opacity-100  transition-opacity duration-500 delay-100">
                        {product.description}
                      </p>
                      <div className="mt-10 transform -translate-y-full group-hover:translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-200">
                        <Button
                          size="sm"
                          className="bg-[#8B4513] hover:bg-[#654321] text-[#e6ccb2]"
                        >
                          Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Link>
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
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1a0f0f] p-6 md:p-8 rounded-xl shadow-lg"
              >
                <p className="text-base md:text-lg mb-4 text-[#d4b08c] italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
