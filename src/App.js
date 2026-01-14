import React, { useState } from 'react';
import { Heart, PawPrint, Home, Users, ArrowRight, Menu, X, CheckCircle, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { label: 'Animals Rescued', value: '12,400+' },
    { label: 'Happy Adoptions', value: '8,500+' },
    { label: 'Active Volunteers', value: '450+' },
    { label: 'Shelters Supported', value: '24' },
  ];

  const services = [
    {
      title: 'Rescue & Rehabilitation',
      description: 'We rescue animals from dangerous situations and provide medical care and love.',
      icon: <PawPrint className="w-8 h-8 text-orange-500" />,
    },
    {
      title: 'Adoption Program',
      description: 'Finding forever homes for our furry friends through a careful matching process.',
      icon: <Home className="w-8 h-8 text-orange-500" />,
    },
    {
      title: 'Community Outreach',
      description: 'Educating the public about animal welfare and responsible pet ownership.',
      icon: <Users className="w-8 h-8 text-orange-500" />,
    },
  ];

  const animals = [
    { name: 'Luna', breed: 'Golden Retriever', age: '2 years', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Oliver', breed: 'Tabby Cat', age: '6 months', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bella', breed: 'Beagle Mix', age: '4 years', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <PawPrint className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-stone-800">PawsHope</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-stone-600 hover:text-orange-600 font-medium transition-colors">About</a>
              <a href="#adopt" className="text-stone-600 hover:text-orange-600 font-medium transition-colors">Adopt</a>
              <a href="#impact" className="text-stone-600 hover:text-orange-600 font-medium transition-colors">Impact</a>
              <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
                Donate Now
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 p-4 space-y-4">
            <a href="#about" className="block text-stone-600 font-medium">About</a>
            <a href="#adopt" className="block text-stone-600 font-medium">Adopt</a>
            <a href="#impact" className="block text-stone-600 font-medium">Impact</a>
            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold">Donate Now</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4" /> Every Life Matters
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 leading-tight">
                Give a Voice to the <span className="text-orange-500">Voiceless.</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Join our mission to create a world where every animal is treated with kindness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2">
                  Start Donating <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-stone-800 border-2 border-stone-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                  Volunteer Today
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800" 
                alt="Happy dog and human" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500">{stat.value}</div>
                <div className="text-stone-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-stone-900">How We Make a Difference</h2>
            <p className="text-lg text-stone-600">Our comprehensive approach ensures that every animal gets the second chance they deserve.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-all group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-900">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Section */}
      <section id="adopt" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-bold text-stone-900">Meet Our Residents</h2>
              <p className="text-lg text-stone-600">These beautiful souls are looking for their forever homes. Could you be the one?</p>
            </div>
            <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Animals <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-72 overflow-hidden">
                  <img src={animal.image} alt={animal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-orange-600">
                    Ready for Adoption
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">{animal.name}</h3>
                  <p className="text-stone-500 mb-4">{animal.breed} | {animal.age}</p>
                  <button className="w-full py-3 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-500 hover:text-white transition-all">
                    Meet {animal.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Your Support Saves Lives Every Single Day</h2>
                <p className="text-orange-50 text-lg opacity-90">
                  From emergency surgeries to daily meals, your contribution directly impacts the welfare of animals in our care.
                </p>
                <div className="space-y-3">
                  {['100% of donations go to animal care', 'Tax-deductible contributions', 'Secure payment processing'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-200" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl text-stone-900 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {['$25', '$50', '$100'].map((amount) => (
                    <button key={amount} className="py-3 rounded-xl border-2 border-stone-100 font-bold hover:border-orange-500 hover:text-orange-600 transition-all">
                      {amount}
                    </button>
                  ))}
                </div>
                <input 
                  type="number" 
                  placeholder="Custom Amount" 
                  className="w-full p-4 rounded-xl bg-stone-50 border border-stone-100 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">
                  Complete Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <PawPrint className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">PawsHope</span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                A non-profit organization dedicated to the protection and welfare of all animals.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-orange-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-stone-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Adopt a Pet</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-stone-400">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-500" /> hello@pawshope.org</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-orange-500" /> 123 Rescue Lane, CA</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-stone-400 mb-4">Stay updated with our latest rescues and news.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-stone-800 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-orange-500" />
                <button className="bg-orange-500 p-2 rounded-xl hover:bg-orange-600 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            <p>(c) 2025 PawsHope Charity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
