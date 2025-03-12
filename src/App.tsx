import React, { useState, useEffect } from 'react';
import { Coffee, Clock, MapPin, Phone, Instagram, Facebook, Twitter, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'menu', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Friday from 7am to 7pm, and weekends from 8am to 6pm."
    },
    {
      question: "Do you offer vegan options?",
      answer: "Yes! We have a variety of plant-based milk alternatives and vegan pastries available daily."
    },
    {
      question: "Is your coffee ethically sourced?",
      answer: "Absolutely. We work directly with small-scale farmers and cooperatives to ensure fair prices and sustainable practices."
    },
    {
      question: "Do you have Wi-Fi?",
      answer: "Yes, we offer free high-speed Wi-Fi to all our customers."
    }
  ];

  const menuItems = [
    {
      category: "Coffee",
      items: [
        { name: "Espresso", price: "$3.50", description: "Strong, concentrated coffee served in a small cup" },
        { name: "Cappuccino", price: "$4.50", description: "Equal parts espresso, steamed milk, and milk foam" },
        { name: "Latte", price: "$4.75", description: "Espresso with steamed milk and a light layer of foam" },
        { name: "Mocha", price: "$5.25", description: "Espresso with chocolate, steamed milk, and whipped cream" }
      ]
    },
    {
      category: "Specialty Drinks",
      items: [
        { name: "Caramel Macchiato", price: "$5.50", description: "Vanilla-flavored espresso with caramel drizzle" },
        { name: "Hazelnut Latte", price: "$5.25", description: "Espresso with hazelnut syrup and steamed milk" },
        { name: "Chai Tea Latte", price: "$4.75", description: "Spiced tea concentrate with steamed milk" },
        { name: "Matcha Latte", price: "$5.00", description: "Japanese green tea powder with steamed milk" }
      ]
    },
    {
      category: "Pastries",
      items: [
        { name: "Croissant", price: "$3.25", description: "Buttery, flaky pastry" },
        { name: "Blueberry Muffin", price: "$3.50", description: "Moist muffin loaded with blueberries" },
        { name: "Cinnamon Roll", price: "$4.25", description: "Soft roll with cinnamon swirl and cream cheese frosting" },
        { name: "Chocolate Chip Cookie", price: "$2.75", description: "Freshly baked cookie with chocolate chunks" }
      ]
    }
  ];

  return (
    <div className="font-sans text-mocha-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream-100/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-mocha-700" />
              <span className="ml-2 text-2xl font-serif font-bold text-mocha-800">Mocha Haven</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-colors ${
                    activeSection === item ? 'text-mocha-700 border-b-2 border-mocha-700' : 'text-mocha-600 hover:text-mocha-800'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation Toggle */}
            <button 
              className="md:hidden text-mocha-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream-100/95 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {['home', 'about', 'menu', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`py-2 font-medium transition-colors ${
                      activeSection === item ? 'text-mocha-700 border-l-4 border-mocha-700 pl-2' : 'text-mocha-600 hover:text-mocha-800 pl-3'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-pattern flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mocha-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 py-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mocha-900 leading-tight">
                Crafting Perfect <span className="text-mocha-700">Coffee</span> Moments
              </h1>
              <p className="mt-6 text-lg text-mocha-800 max-w-md">
                A cozy neighborhood café serving artisanal coffee, homemade pastries, and warm community vibes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="px-6 py-3 bg-mocha-700 text-cream-50 rounded-md hover:bg-mocha-800 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Menu
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-mocha-700 text-mocha-700 rounded-md hover:bg-mocha-50 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Find Us
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-mocha-700/10 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Coffee shop atmosphere" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 about-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mocha-900">Our Story</h2>
            <div className="w-24 h-1 bg-mocha-700 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative">
                <div className="absolute inset-0 bg-mocha-700/10 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Coffee beans and brewing" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-serif font-semibold text-mocha-800 mb-4">From Bean to Cup</h3>
              <p className="text-mocha-700 mb-6">
                Founded in 2015, Mocha Haven began as a small passion project with a simple mission: to serve exceptional coffee in a warm, welcoming space where community thrives.
              </p>
              <p className="text-mocha-700 mb-6">
                We carefully source our beans from sustainable farms around the world, roast them in small batches to bring out their unique flavors, and craft each drink with precision and care.
              </p>
              <p className="text-mocha-700">
                Beyond coffee, we're committed to creating a space where neighbors become friends, ideas are exchanged, and everyone feels at home.
              </p>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-cream-100/80 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <Coffee className="h-10 w-10 text-mocha-700 mb-4" />
                  <h4 className="font-serif font-semibold text-mocha-800 text-xl mb-2">Quality Beans</h4>
                  <p className="text-mocha-600">Ethically sourced and expertly roasted for perfect flavor.</p>
                </div>
                <div className="bg-cream-100/80 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-mocha-700 mb-4" />
                  <h4 className="font-serif font-semibold text-mocha-800 text-xl mb-2">Crafted Slowly</h4>
                  <p className="text-mocha-600">Each cup prepared with patience and precision.</p>
                </div>
                <div className="bg-cream-100/80 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <MapPin className="h-10 w-10 text-mocha-700 mb-4" />
                  <h4 className="font-serif font-semibold text-mocha-800 text-xl mb-2">Local Heart</h4>
                  <p className="text-mocha-600">Deeply rooted in our community and culture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 menu-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mocha-900">Our Menu</h2>
            <div className="w-24 h-1 bg-mocha-700 mx-auto mt-4"></div>
            <p className="mt-4 text-mocha-700 max-w-2xl mx-auto">
              Discover our selection of handcrafted beverages and freshly baked goods, made with love and the finest ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-cream-100/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-mocha-700 py-4 px-6">
                  <h3 className="text-xl font-serif font-semibold text-cream-50">{category.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="border-b border-mocha-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-mocha-800 text-lg">{item.name}</h4>
                            <p className="text-mocha-600 text-sm mt-1">{item.description}</p>
                          </div>
                          <span className="font-serif font-semibold text-mocha-700">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-semibold text-mocha-900">Frequently Asked Questions</h3>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center bg-cream-100/90 backdrop-blur-sm p-4 rounded-lg shadow-md hover:bg-cream-200/90 transition-colors"
                  >
                    <span className="font-medium text-mocha-800">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-mocha-700" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-mocha-700" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="bg-cream-50/90 backdrop-blur-sm p-4 rounded-b-lg shadow-md border-t border-mocha-200">
                      <p className="text-mocha-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 contact-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mocha-900">Visit Us</h2>
            <div className="w-24 h-1 bg-mocha-700 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <div className="bg-cream-100/90 backdrop-blur-sm p-8 rounded-lg shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold text-mocha-800 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-mocha-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-mocha-800">Address</h4>
                      <p className="text-mocha-600 mt-1">123 Coffee Lane, Brewville, CA 94123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-mocha-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-mocha-800">Hours</h4>
                      <p className="text-mocha-600 mt-1">Monday - Friday: 7am - 7pm</p>
                      <p className="text-mocha-600">Saturday - Sunday: 8am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-mocha-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-mocha-800">Contact</h4>
                      <p className="text-mocha-600 mt-1">Phone: (555) 123-4567</p>
                      <p className="text-mocha-600">Email: hello@mochahaven.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-mocha-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-mocha-700 text-cream-50 rounded-full hover:bg-mocha-800 transition-colors transform hover:scale-110">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-mocha-700 text-cream-50 rounded-full hover:bg-mocha-800 transition-colors transform hover:scale-110">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-mocha-700 text-cream-50 rounded-full hover:bg-mocha-800 transition-colors transform hover:scale-110">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-cream-100/90 backdrop-blur-sm p-8 rounded-lg shadow-xl h-full transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold text-mocha-800 mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-mocha-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-cream-50/50 border border-mocha-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mocha-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-mocha-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-cream-50/50 border border-mocha-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mocha-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-mocha-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w- full px-4 py-2 bg-cream-50/50 border border-mocha-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mocha-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="button"
                    className="px-6 py-3 bg-mocha-700 text-cream-50 rounded-md hover:bg-mocha-800 transition-colors font-medium w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={() => alert('Message sent! (This is a demo)')}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mocha-900 text-cream-100 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Coffee className="h-8 w-8 text-cream-200" />
              <span className="ml-2 text-2xl font-serif font-bold">Mocha Haven</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-cream-300">© {new Date().getFullYear()} Mocha Haven. All rights reserved.</p>
              <p className="text-cream-400 text-sm mt-1">Crafting perfect coffee moments since 2015</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;