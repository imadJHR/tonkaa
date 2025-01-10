import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ChefHat, Gift, Store, Utensils, GraduationCap, Users } from 'lucide-react';
import img3 from "../assets/img3.jpg";
import img12 from "../assets/img12.jpg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpg";

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="w-12 h-12 text-[#8B4513]" />,
      title: "Création de chocolat sur mesure",
      description:
        "Travaillez avec nos maîtres chocolatiers pour créer votre propre chef-d'œuvre en chocolat unique.",
      price: "",
      image: img12,
    },
    {
      icon: <Gift className="w-12 h-12 text-[#8B4513]" />,
      title: "Cadeaux en chocolat de luxe",
      description: "Offrez des cadeaux en chocolat personnalisés pour toutes les occasions spéciales.",
      price: "",
      image: img21,
    },
    {
      icon: <Store className="w-12 h-12 text-[#8B4513]" />,
      title: "Événements privés",
      description:
        "Organisez votre occasion spéciale dans nos élégants salons de chocolat.",
      price: "",
      image: img22,
    },
  ];

  const experiences = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Séances de dégustation",
      description:
        "Expériences de dégustation de chocolat guidées avec nos experts",
      price: "",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Ateliers Chocolat",
      description:
        "Apprenez l'art de la fabrication du chocolat dans notre cuisine professionnelle",
      price: "",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Création d'équipe",
      description:
        "Activités de fabrication de chocolat amusantes et engageantes pour les groupes",
      price: "",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      ...services,
      ...experiences
    ].map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": item.title,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('À partir de ', '').replace('€', ''),
          "priceCurrency": "EUR"
        }
      }
    }))
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Services de Chocolaterie de Luxe | L'Atelier TONKA</title>
        <meta name="description" content="Découvrez nos services de chocolaterie de luxe : création sur mesure, cadeaux personnalisés, événements privés, dégustations et ateliers. Une expérience chocolatée unique." />
        <meta name="keywords" content="chocolaterie, services, création sur mesure, cadeaux en chocolat, événements privés, dégustation, ateliers chocolat, team building" />
        <link rel="canonical" href="https://www.ateliertonka.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Découvrez l'art du chocolat comme jamais auparavant avec nos services exclusifs
          </motion.p>
        </div>
      </motion.section>

      {/* Main Services */}
      <section className="py-20 bg-[#1a0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Services Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#241515] rounded-lg overflow-hidden group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">{service.icon}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-[#8B4513] font-semibold mb-4">{service.price}</p>
                  <div className="mt-auto">
                    <Button className="bg-[#8B4513] hover:bg-[#654321]">
                      Réserver
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-[#241515]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Expériences Chocolatées
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-lg bg-[#1a0f0f] hover:bg-[#2a1f1f] transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#8B4513] flex items-center justify-center">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{experience.title}</h3>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <p className="text-[#8B4513] font-semibold">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a0f0f]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à vivre l'expérience chocolatée ultime ?
            </h2>
            <p className="text-gray-400 mb-8">
              Rejoignez-nous pour un voyage chocolaté inoubliable. Réservez
              votre expérience dès aujourd'hui et laissez-nous éveiller vos sens.
            </p>
            <Button size="lg" className="bg-[#8B4513] hover:bg-[#654321]">
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

