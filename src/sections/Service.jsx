import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorSmartphone, 
  ShoppingBag, 
  LayoutDashboard, 
  ServerCog, 
  CreditCard, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Fullstack Web Apps",
    short: "End-to-end development",
    description: "End-to-end web application development using modern frameworks like React and Node.js. I build scalable, high-performance systems from the ground up, ensuring seamless integration between the frontend interface and backend logic.",
    icon: MonitorSmartphone
  },
  {
    id: 2,
    title: "E-commerce Development",
    short: "Custom digital storefronts",
    description: "Creating custom storefronts, comprehensive seller dashboards, robust cart management, and secure checkout flows. Tailored solutions that focus on conversion rates and premium shopping experiences.",
    icon: ShoppingBag
  },
  {
    id: 3,
    title: "SaaS Dashboards",
    short: "Data-heavy interfaces",
    description: "Designing and building intuitive, data-heavy admin panels and user dashboards. Features include real-time analytics, complex data visualization, and secure role-based access controls.",
    icon: LayoutDashboard
  },
  {
    id: 4,
    title: "Backend APIs",
    short: "Robust & secure endpoints",
    description: "Developing highly secure and performant RESTful and GraphQL APIs. My focus is on fast response times, optimized database queries, scalable microservices, and clean, documented architecture.",
    icon: ServerCog
  },
  {
    id: 5,
    title: "Payment Integration",
    short: "Seamless transactions",
    description: "Integrating reliable payment gateways like Stripe, Razorpay, and PayPal. Expert in handling complex payment flows including recurring subscriptions, webhooks, and secure transactional data.",
    icon: CreditCard
  },
  {
    id: 6,
    title: "Authentication Systems",
    short: "Secure access control",
    description: "Implementing bulletproof secure login flows using JWT, OAuth providers (Google, GitHub), and session management. Ensuring your user data and platform routes are fully protected.",
    icon: ShieldCheck
  }
];

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      className={`cursor-pointer bg-[#1a1a1a] border ${isExpanded ? 'border-[#FF4500]' : 'border-[#2a2a2a] hover:border-white/30'} rounded-2xl p-6 md:p-8 transition-colors flex flex-col`}
    >
      <motion.div layout className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:text-[#FF4500] transition-colors">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <motion.h4 layout className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF4500] transition-colors">
            {service.title}
          </motion.h4>
          <motion.p layout className="text-sm font-mono text-[#FF4500] uppercase tracking-wider mt-1">
            {service.short}
          </motion.p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="h-px w-full bg-white/10 mb-4"></div>
            <p className="text-white/70 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div layout className="mt-6 flex items-center text-white/40 text-sm font-medium group">
        <span className="mr-2">{isExpanded ? 'Show Less' : 'Explore Service'}</span>
        <motion.span 
          animate={{ rotate: isExpanded ? 180 : 0 }} 
          transition={{ duration: 0.3 }}
        >
          ↓
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const Service = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-sm font-mono text-[#FF4500] tracking-widest uppercase mb-4">What I Do</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">My Services.</h3>
          </div>
          <p className="text-white/60 max-w-md mt-6 md:mt-0 md:text-right">
            Delivering robust, scalable, and visually stunning digital solutions from front to back.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;