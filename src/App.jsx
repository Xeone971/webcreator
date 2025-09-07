import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Star, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const handleContactClick = () => {
    toast({
      title: "Contact",
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pourrez la retrouver rapidement ! 🚀"
    });
  };

  const handleProjectClick = () => {
    toast({
      title: "Projet",
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pourrez la retrouver rapidement ! 🚀"
    });
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web",
      description: "Sites web modernes et performants avec les dernières technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Interfaces utilisateur élégantes et expériences utilisateur optimales"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Sites parfaitement adaptés à tous les appareils et écrans"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimisation Performance",
      description: "Sites ultra-rapides optimisés pour le SEO et la conversion"
    }
  ];

  const projects = [
    {
      title: "CYBERBAT",
      category: "Web App",
      description: "Centre de sécurité numérique pédagogique",
      image: "images/cyberbat.png"
    },
    {
      title: "Portfolio Créatif",
      category: "Site vitrine",
      description: "Portfolio interactif dans le thème du hacking",
      image: "images/shadowlink.png"
    },
    {
      title: "VideoShorts AI",
      category: "Web App",
      description: "Création de vidéos courtes avec IA pour TikTok",
      image: "images/tiktokshort.png"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      content: "Un travail exceptionnel ! Notre site web a dépassé toutes nos attentes.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Entrepreneur",
      content: "Professionnel, créatif et à l'écoute. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Artiste",
      content: "Mon portfolio n'a jamais été aussi beau. Merci pour ce travail magnifique !",
      rating: 5
    }
  ];

  // Validation des champs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    return newErrors;
  };

  // Gestion des changements dans les inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Supprimer l'erreur si l'utilisateur commence à corriger
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi (remplace par ton service d'email)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Succès
      toast({
        title: "Message envoyé ! ✅",
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      // Reset du formulaire
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Création de Sites Web Professionnels</title>
        <meta name="description" content="Développeur web spécialisé dans la création de sites web modernes, performants et sur-mesure. Services de développement, design UI/UX et optimisation." />
        <meta property="og:title" content="Portfolio - Création de Sites Web Professionnels" />
        <meta property="og:description" content="Développeur web spécialisé dans la création de sites web modernes, performants et sur-mesure. Services de développement, design UI/UX et optimisation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                WebCreator
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#accueil" className="text-white hover:text-cyan-300 transition-colors">Accueil</a>
                <a href="#services" className="text-white hover:text-cyan-300 transition-colors">Services</a>
                <a href="#projets" className="text-white hover:text-cyan-300 transition-colors">Projets</a>
                <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact</a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="accueil" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                    Créateur de
                  </span>
                  <br />
                  <span className="text-white">Sites Web</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Je transforme vos idées en expériences web exceptionnelles.
                  Développement moderne, design créatif et performance optimale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"                >
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleProjectClick}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"                >
                  Voir mes projets
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <img
                    className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
                    alt="Exemple de site web moderne et élégant"
                    src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des solutions complètes pour donner vie à vos projets web
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Projets <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Récents</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez quelques-unes de mes réalisations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      alt={`Aperçu du projet ${project.title}`}
                      src={project.image} />
                  </div>
                  <div className="p-6">
                    <div className="text-cyan-400 text-sm font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      onClick={handleProjectClick}
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                    >
                      Voir le projet
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Témoignages <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clients</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ce que disent mes clients de mon travail
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Travaillons <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ensemble</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Prêt à donner vie à votre projet ? Contactez-moi dès aujourd'hui !
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                    <span className="text-gray-300">contact@webcreator.fr</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <span className="text-gray-300">+33 6 41 53 21 41</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                    <span className="text-gray-300">Paris, Dijon, Vesoul, France</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                      asChild>
                      <a
                        href="https://github.com/xeone971"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                      asChild>
                      <a
                        href="https://www.linkedin.com/in/lucca-collas-b9ba8222b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'
                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'
                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'
                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none transition-colors`}
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              WebCreator
            </div>
            <p className="text-gray-400 mb-6">
              Créateur de sites web modernes et performants
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 WebCreator. Tous droits réservés.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;