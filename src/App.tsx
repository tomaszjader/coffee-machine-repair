import React, { useState } from 'react';
import { Coffee, PenTool as Tools, Clock, Shield, Phone, Mail, Calendar } from 'lucide-react';
import emailjs from "@emailjs/browser";

interface FormData {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sqig1hj",
        "template_3u7q00n",
        formData,
        "dJikGHNH4gxm2Viwc"
      )
      .then(
        () => {
          alert("Wiadomość wysłana! 🎉");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Błąd wysyłania: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Profesjonalny Serwis Ekspresów do Kawy</h1>
            <p className="text-xl mb-8">Ekspercka konserwacja i naprawa wszystkich komercyjnych ekspresów do kawy</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Umów Serwis
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nasze Usługi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Tools className="w-8 h-8 text-amber-600" />}
            title="Konserwacja i Naprawa"
            description="Kompleksowa diagnostyka i naprawa wszystkich głównych marek ekspresów do kawy"
          />
          <ServiceCard
            icon={<Clock className="w-8 h-8 text-amber-600" />}
            title="Regularne Serwisowanie"
            description="Planowana konserwacja zapewniająca najwyższą wydajność urządzenia"
          />
          <ServiceCard
            icon={<Shield className="w-8 h-8 text-amber-600" />}
            title="Wymiana Części"
            description="Wymiana oryginalnych części z gwarancją"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Telefon"
                info="+48 555 123 456"
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                info="serwis@ekspresydokawy.pl"
              />
              <ContactInfo
                icon={<Calendar className="w-6 h-6" />}
                title="Godziny otwarcia"
                info="Pon-Pt: 8:00 - 18:00"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Wiadomość"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.message}
                name="message"
                onChange={handleChange}
                required
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Wyślij Wiadomość
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-6 h-6" />
            <span className="font-bold text-xl">Serwis Ekspresów do Kawy</span>
          </div>
          <p className="text-gray-400">© 2024 Serwis Ekspresów do Kawy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

function ContactInfo({ icon, title, info }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-amber-600 p-3 rounded-full text-white">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
}

export default App;