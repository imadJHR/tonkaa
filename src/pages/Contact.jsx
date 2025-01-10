import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const storeLocations = [
    {
      name: "L'atelier Tonka - Casablanca",
      address: "123 Boulevard Mohammed V, Casablanca 20000, Maroc",
      phone: "+212 661-150994",
      email: "contact@ateliertonka.com",
      hours: "Lun-Sam: 10h-19h, Dim: 11h-17h",
    },
    {
      name: "L'atelier Tonka - Marrakech",
      address: "45 Rue Moulay Ismail, Marrakech 40000, Maroc",
      phone: "+212 524-456789",
      email: "marrakech@ateliertonka.com",
      hours: "Lun-Sam: 9h-20h, Dim: 10h-18h",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L'atelier Tonka",
    url: "https://www.ateliertonka.com",
    logo: "https://www.ateliertonka.com/logo.png",
    contactPoint: storeLocations.map((location) => ({
      "@type": "ContactPoint",
      telephone: location.phone,
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["French", "Arabic", "English"],
    })),
    address: storeLocations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.address.split(",")[1].trim().split(" ")[0],
      postalCode: location.address.split(",")[1].trim().split(" ")[1],
      addressCountry: "MA",
    })),
  };

  return (
    <div className="bg-[#1a0f0f] text-[#e6ccb2] min-h-screen">
      <Helmet>
        <title>
          Contactez L'atelier Tonka | Chocolatier Artisanal au Maroc
        </title>
        <meta
          name="description"
          content="Contactez L'atelier Tonka, votre chocolatier artisanal au Maroc. Trouvez nos magasins à Casablanca et Marrakech, ou envoyez-nous un message pour toute question."
        />
        <meta
          name="keywords"
          content="L'atelier Tonka, contact, chocolatier, Casablanca, Marrakech, formulaire de contact, adresse"
        />
        <link rel="canonical" href="https://www.ateliertonka.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#241515] py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-[#d4b08c]">
          Nous sommes à votre écoute pour toute question ou suggestion
        </p>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Store Locations */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Nos magasins</h2>
            <div className="space-y-8">
              {storeLocations.map((location, index) => (
                <div
                  key={index}
                  className="bg-[#241515] p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {location.name}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-1 text-[#8B4513]" />
                      <span>{location.address}</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-[#8B4513]" />
                      <a
                        href={`tel:${location.phone}`}
                        className="hover:underline"
                      >
                        {location.phone}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-[#8B4513]" />
                      <a
                        href={`mailto:${location.email}`}
                        className="hover:underline"
                      >
                        {location.email}
                      </a>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-1 text-[#8B4513]" />
                      <span>{location.hours}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Formulaire de Contact</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nom
                </label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  className="bg-[#241515] border-[#8B4513] text-[#e6ccb2]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-[#241515] border-[#8B4513] text-[#e6ccb2]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Sujet de votre message"
                  className="bg-[#241515] border-[#8B4513] text-[#e6ccb2]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message ici..."
                  className="bg-[#241515] border-[#8B4513] text-[#e6ccb2]"
                  rows={6}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#8B4513] hover:bg-[#654321] text-[#e6ccb2]"
              >
                Envoyer le message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.section>
        </div>

        {/* Map */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Trouvez-nous</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6852558442824!2d-7.6457601237105095!3d33.50956507336607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62da5ef011969%3A0xbf443e02283c638b!2sR%C3%A9sidence%20Les%20Collines!5e0!3m2!1sfr!2sma!4v1736478976972!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Carte des emplacements de L'atelier Tonka"
            ></iframe>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Proposez-vous des visites de votre atelier ?
              </h3>
              <p>
                Oui, nous organisons des visites guidées de notre atelier sur
                réservation. Contactez-nous pour plus d'informations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Faites-vous des livraisons à domicile ?
              </h3>
              <p>
                Nous proposons des livraisons à domicile dans certaines zones.
                Veuillez nous contacter pour vérifier si votre adresse est
                éligible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Puis-je commander des chocolats personnalisés ?
              </h3>
              <p>
                Absolument ! Nous adorons créer des chocolats sur mesure pour
                nos clients. Contactez-nous pour discuter de vos idées.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Contact;
