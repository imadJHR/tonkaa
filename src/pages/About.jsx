import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet';
import img20 from "../assets/img20.jpg";
import img19 from "../assets/img19.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-[#8B4513]" />,
      title: "Approvisionnement durable",
      description: "Nous travaillons en partenariat avec des producteurs de cacao éthiques pour garantir un approvisionnement durable et responsable de nos ingrédients."
    },
    {
      icon: <Award className="w-8 h-8 text-[#8B4513]" />,
      title: "Artisanal Excellence",
      description: "Chaque chocolat est fabriqué à la main par nos maîtres chocolatiers avec des décennies d'expérience."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#8B4513]" />,
      title: "La passion de la qualité",
      description: "Nous mettons tout notre cœur dans chaque création, garantissant que seuls les meilleurs chocolats parviennent à nos clients."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "L'Atelier TONKA",
    "description": "Artisan chocolatier spécialiste de la fève de cacao dans tous ses états. Créateur de bonbons chocolat, confiserie et entremets.",
    "foundingDate": "2010",
    "url": "https://www.ateliertonka.com",
    "sameAs": [
      "https://www.facebook.com/ateliertonka",
      "https://www.instagram.com/ateliertonka"
    ],
    "founder": {
      "@type": "Person",
      "name": "Jean Dupont"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue du Chocolat",
      "addressLocality": "Paris",
      "postalCode": "75001",
      "addressCountry": "FR"
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>À propos de L'Atelier TONKA | Artisan Chocolatier d'Excellence</title>
        <meta name="description" content="Découvrez l'histoire et les valeurs de L'Atelier TONKA, artisan chocolatier d'excellence. Approvisionnement durable, artisanat traditionnel et passion pour la qualité." />
        <meta name="keywords" content="chocolatier, artisanal, cacao durable, confiserie, entremets, L'Atelier TONKA" />
        <link rel="canonical" href="https://www.ateliertonka.com/about" />
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
          backgroundImage: `url(${img20})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
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
            Notre histoire
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Une passion pour le chocolat depuis plus d'une décennie
          </motion.p>
        </div>
      </motion.section>

      {/* History Section */}
      <section className="py-20 bg-[#1a0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Notre Héritage : L'Art du Chocolat à <span className='text-[#e3ccbc]'>l'Atelier TONKA</span></h2>
            <p className="text-lg mb-8 text-gray-300">
              L'Atelier TONKA, fondé en 2010 par le maître chocolatier Jean Dupont, est devenu un artisan chocolatier renommé, spécialiste de la fève de cacao dans tous ses états. Notre passion pour l'excellence et l'innovation nous a permis de créer une gamme unique de produits, allant des bonbons chocolat raffinés aux entremets sophistiqués.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Nous vous invitons à voyager dans notre monde de goûts et de saveurs fraîches, fines et naturelles. Chaque création est le fruit d'un savoir-faire artisanal transmis de génération en génération, combiné à une recherche constante de nouvelles saveurs et textures pour satisfaire les palais les plus exigeants.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={img19}
                alt="Processus de fabrication du chocolat à L'Atelier TONKA"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#241515]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Nos valeurs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1a0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#241515] p-6 rounded-lg"
            >
              <p className="text-lg mb-4">"Les chocolats de L'Atelier TONKA sont tout simplement divins. Chaque bouchée est une explosion de saveurs."</p>
        
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#241515] p-6 rounded-lg"
            >
              <p className="text-lg mb-4">"La qualité et l'originalité des créations de L'Atelier TONKA sont incomparables. Un vrai régal pour les yeux et le palais."</p>
           
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

