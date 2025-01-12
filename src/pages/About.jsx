import React from "react";
import { motion } from "framer-motion";
import { Award, Leaf, Heart } from "lucide-react";
import { Helmet } from "react-helmet";
import img20 from "../assets/img20.jpg";
import img19 from "../assets/img19.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-[#8B4513]" />,
      title: "Approvisionnement durable",
      description:
        "Nous travaillons en partenariat avec des producteurs de cacao éthiques pour garantir un approvisionnement durable et responsable de nos ingrédients.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#8B4513]" />,
      title: "Artisanal Excellence",
      description:
        "Chaque chocolat est fabriqué à la main par nos maîtres chocolatiers avec des décennies d'expérience.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#8B4513]" />,
      title: "La passion de la qualité",
      description:
        "Nous mettons tout notre cœur dans chaque création, garantissant que seuls les meilleurs chocolats parviennent à nos clients.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L'Atelier TONKA",
    description:
      "Artisan chocolatier spécialiste de la fève de cacao dans tous ses états. Créateur de bonbons chocolat, confiserie et entremets.",
    foundingDate: "2010",
    url: "https://www.ateliertonka.com",
    sameAs: [
      "https://www.facebook.com/ateliertonka",
      "https://www.instagram.com/ateliertonka",
    ],
    founder: {
      "@type": "Person",
      name: "Jean Dupont",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Rue du Chocolat",
      addressLocality: "Paris",
      postalCode: "75001",
      addressCountry: "FR",
    },
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>
          À propos de L'Atelier TONKA | Artisan Chocolatier d'Excellence
        </title>
        <meta
          name="description"
          content="Découvrez l'histoire et les valeurs de L'Atelier TONKA, artisan chocolatier d'excellence. Approvisionnement durable, artisanat traditionnel et passion pour la qualité."
        />
        <meta
          name="keywords"
          content="chocolatier, artisanal, cacao durable, confiserie, entremets, L'Atelier TONKA"
        />
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
            <h2 className="text-4xl font-bold mb-8">
              Notre Héritage : L'Art du Chocolat à{" "}
              <span className="text-[#e3ccbc]">l'Atelier TONKA</span>
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Plongez dans l'univers enchanteur créé par Ghizlane Amazzal, la
              créatrice talentueuse derrière notre fabrique de chocolat
              artisanal TONKA. Sous son regard attentif, chaque bouchée devient
              une célébration de l'innovation et de l'artisanat, confectionnée
              avec soin pour être aussi gouteuse qu'inoubliable. Ghizlane veille
              à offrir des créations uniques et propose des recettes sur mesure
              pour satisfaire les envies les plus raffinées. Cette année, notre
              maître chocolatier a repoussé les limites du goût avec des
              recettes originales, fusionnant savoir-faire traditionnel et
              créativité débordante. Nos nouvelles créations vous promettent une
              explosion de saveurs, de textures et d'émotions, à chaque bonbon
              chocolat !
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Mais ce n'est pas tout. Pour sublimer ces douceurs, nous avons
              imaginé une collection de packaging inspirée par l'histoire
              fascinante du chocolat, remontant aux anciennes traditions mayas.
              Nous avons choisi de vous raconter l'histoire et l'évolution du
              cacao à travers les années. Le cacao, bien plus qu'un simple
              ingrédient, était au cœur des croyances et des pratiques
              culturelles des Mayas, qui voyaient dans le chocolat un véritable
              don des dieux. Chaque emballage de notre nouvelle collection
              raconte une partie de cette épopée, de la culture des cacaoyers
              dans les luxuriantes forêts tropicales aux rituels sacrés qui
              honoraient les divinités. Ces illustrations rendent hommage aux
              fresques et aux symboles qui ornaient les temples mayas, rappelant
              l'héritage de cette ancienne civilisation.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={img19}
                alt="Processus de fabrication du chocolat à L'Atelier TONKA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-10">
              <p className="text-lg mb-8 text-gray-300">
              Parcourez notre catalogue et vous découvrirez notre collection de contenants, garnis de nos délicieux chocolats, qui se distingue par sa variété et son élégance. Nous proposons des formats pour toutes les envies, des petites boîtes raffinées aux coffrets plus généreux, chacun pensé pour offrir une expérience unique. Les formes, tantôt classiques tantôt audacieuses, se mêlent pour répondre à toutes les occasions, qu'il s'agisse d'un cadeau ou d'un plaisir personnel.

Côté matières, nous avons fait le choix de jouer sur les contrastes. Vous trouverez des contenants en matières brutes, telles que le bois ou la céramique, qui apportent une touche naturelle et authentique, mais aussi des matières plus classiques, comme le métal poli ou le carton élégant, pour une touche de tradition revisitée.

              </p>
              <p className="text-lg mb-8 text-gray-300">
              Nous souhaitons, à travers cette collection, faire voyager vos sens et votre esprit, en vous plongeant au cœur de cette histoire millénaire qui a donné naissance au chocolat que nous connaissons aujourd'hui.

TONKA, la fabrique du chocolat, vous souhaite d'excellentes fêtes de fin d'année sous le signe de la découverte et de l'exploration de l'histoire du cacao!
              </p>
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#241515] p-6 rounded-lg"
            >
              <p className="text-lg mb-4">
                "Les chocolats de L'Atelier TONKA sont tout simplement divins.
                Chaque bouchée est une explosion de saveurs."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#241515] p-6 rounded-lg"
            >
              <p className="text-lg mb-4">
                "La qualité et l'originalité des créations de L'Atelier TONKA
                sont incomparables. Un vrai régal pour les yeux et le palais."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
