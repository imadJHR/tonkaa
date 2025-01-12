import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { MapPin, Clock, Phone, Mail, Navigation2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import img23 from "../assets/img23.jpg";
import img14 from "../assets/img14.jpg";

const stores = [
  {
    id: 1,
    name: "L'atelier Tonka",
    description:
      "Notre magasin phare au cœur de Casablanca, présentant notre collection complète et des créations exclusives.",
    address: "Casablanca 20000, Maroc",
    hours: "Lun-Sam: 10h-19h, Dim: 11h-17h",
    phone: "+212 661-150994",
    email: "ghizlanama@gmail.com",
    image: img14,
    position: { lat: 33.5731, lng: -7.5898 },
  },
];

const Stores = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  

  return (
    <div className="min-h-screen bg-[#1a0f0f] text-[#e6ccb2]">
      <Helmet>
        <title>Notre Magasin | L'atelier Tonka - Chocolatier Artisanal au Maroc</title>
        <meta
          name="description"
          content="Découvrez nos magasins L'atelier Tonka au Maroc. Visitez-nous à Casablanca et Marrakech pour déguster nos chocolats artisanaux et nos créations exclusives."
        />
        <meta
          name="keywords"
          content="L'atelier Tonka, chocolatier, Casablanca, Marrakech, chocolat artisanal, boutique chocolat"
        />
        <link rel="canonical" href="https://www.ateliertonka.com/stores" />
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
            backgroundImage: `url(${img23})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            Visitez nos magasins
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto px-4"
          >
            Découvrez l'art du chocolat dans nos élégantes boutiques à Casablanca et Marrakech
          </motion.p>
        </div>
      </motion.section>

      {/* Interactive Map */}
      <section className="py-20 bg-[#1a0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nos emplacements</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[60vh] rounded-xl overflow-hidden shadow-2xl mb-20"
          >
            {/* Embed Google Maps using iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1420.841389746577!2d-7.643363471395772!3d33.51145080660166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1736620902558!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Store Listings */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {stores.map((store) => (
              <motion.div
                key={store.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-[#241515] rounded-xl overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={store.image}
                    alt={`L'atelier Tonka - ${store.name}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4 bg-[#8B4513] p-2 rounded-full">
                    <Navigation2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{store.name}</h3>
                  <p className="text-gray-400 mb-6">{store.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#8B4513] mt-1" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#8B4513] mt-1" />
                      <span>{store.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#8B4513]" />
                      <a href={`tel:${store.phone}`} className="hover:underline">{store.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#8B4513]" />
                      <a href={`mailto:${store.email}`} className="hover:underline">{store.email}</a>
                    </div>
                  </div>
                  <a href="https://maps.app.goo.gl/TxRbC88PjQ7jdaNA9" target="_blank">
                  <Button className="mt-6 w-full bg-[#8B4513] hover:bg-[#654321] text-white">
                    Obtenir l'itinéraire <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional SEO Content */}
      <section className="py-20 bg-[#241515]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">L'expérience L'atelier Tonka</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Chez L'atelier Tonka, nous vous invitons à vivre une expérience chocolatée unique. Nos magasins ne sont pas de simples points de vente, mais de véritables havres de paix pour les amateurs de chocolat.
            </p>
            <p className="text-lg mb-6">
              Dans chacune de nos boutiques, vous serez accueillis par nos experts en chocolat passionnés, prêts à vous guider à travers notre collection exquise. Découvrez nos créations exclusives, assistez à des démonstrations de fabrication de chocolat, et laissez-vous tenter par nos dégustations quotidiennes.
            </p>
            <p className="text-lg">
              Que vous soyez à la recherche d'un cadeau spécial, d'une expérience gustative mémorable, ou simplement curieux de découvrir l'art du chocolat artisanal, L'atelier Tonka vous attend pour un voyage sensoriel inoubliable au cœur du Maroc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stores;
