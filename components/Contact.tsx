"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    ecole: '',
    niveau: '',
    specialite: '',
    recherche: '',
    source: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully! We'll be in touch soon.");
      } else {
        toast.error('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="py-32 px-4 md:px-8 bg-[#001f3f] relative overflow-hidden">
      <BackgroundLines />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
            Get in Touch
          </h2>
          <Card className="p-8 bg-white/5 backdrop-blur-lg border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Input
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="ecole"
                placeholder="École"
                value={formData.ecole}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <select
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                <option value="">Niveau d&apos;études (L1, L2, L3, M1, M2)</option>
                <option value="L1" className='text-black'>L1</option>
                <option value="L2" className='text-black'>L2</option>
                <option value="L3" className='text-black'>L3</option>
                <option value="M1" className='text-black'>M1</option>
                <option value="M2" className='text-black'>M2</option>
              </select>
              <Input
                name="specialite"
                placeholder="Spécialité"
                value={formData.specialite}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <select
                name="recherche"
                value={formData.recherche}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                <option value="">Êtes-vous à la recherche :</option>
                <option value="stage" className='text-black'>D&apos;un stage</option>
                <option value="emploi" className='text-black'>D&apos;un emploi</option>
                <option value="apprentissage" className='text-black'>D&apos;un apprentissage</option>
                <option value="information" className='text-black'>Juste d&apos;information</option>
              </select>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                
                <option value="officialPage" className='text-black'>Via page officielle</option>
                <option value="website" className='text-black'>Via site web</option>
                <option value="email" className='text-black'>Par e-mail</option>
                <option value="radio" className='text-black'>Via radio</option>
                <option value="socialMedia" className='text-black'>Sur les réseaux sociaux (Facebook, Instagram, LinkedIn)</option>
                <option value="friend" className='text-black'>Par un(e) ami(e) ou un(e) camarade de classe</option>
              </select>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-[#001f3f] hover:bg-blue-50 h-12 text-lg font-semibold"
              >
                Submit <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundLines() {
  return (
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500"
          animate={{
            x: [0, Math.random() * 100, 0],
            y: [0, Math.random() * 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            width: Math.random() * 300 + 50,
            height: 2,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            transform: 'rotate(' + Math.random() * 360 + 'deg)',
          }}
        />
      ))}
    </div>
  );
}
