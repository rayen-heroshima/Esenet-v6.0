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
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    university: '',
    heardAboutUs: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="university"
                
                placeholder="your university"
                value={formData.university}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="heardAboutUs"
                
                placeholder="where did you hear About Us ?"
                value={formData.heardAboutUs}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
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
