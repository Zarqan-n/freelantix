import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    price: 150,
    description: 'Perfect for small businesses and startups',
    features: [
      { text: 'Responsive website design', included: true },
      { text: 'Content management system', included: true },
      { text: 'Basic SEO optimization', included: true },
      { text: 'Contact form & Google Maps', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Premium support', included: false },
      { text: 'E-commerce functionality', included: false },
    ],
    cta: 'Choose Basic',
  },
  {
    name: 'Standard Plan',
    price: 300,
    description: 'Great for growing businesses',
    features: [
      { text: 'Responsive website design', included: true },
      { text: 'Content management system', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'Contact form & Google Maps', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Premium support', included: true },
      { text: 'E-commerce functionality', included: false },
    ],
    cta: 'Choose Standard',
    popular: false,
  },
  {
    name: 'Premium Plan',
    price: 500,
    description: 'For businesses with complex needs',
    features: [
      { text: 'Responsive website design', included: true },
      { text: 'Content management system', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'Contact form & Google Maps', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Premium support', included: true },
      { text: 'E-commerce functionality', included: true },
    ],
    cta: 'Choose Premium',
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-medium mb-2">Pricing</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
            Choose the right plan for your business
          </h2>
          <p className="text-neutral-600 text-lg">
            We offer flexible pricing options that can be tailored to meet your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/70 shadow-lg relative z-10 scale-105 bg-white' 
                  : 'border-neutral-200 shadow-sm bg-white hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 font-medium text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 lg:p-8">
                <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="font-heading font-bold text-4xl text-neutral-800">${plan.price}</span>
                  <span className="text-neutral-500 ml-2">/project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span 
                        className={`mr-3 mt-1 rounded-full p-1 ${
                          feature.included ? 'text-green-500 bg-green-50' : 'text-neutral-300 bg-neutral-50'
                        }`}
                      >
                        <Check size={16} />
                      </span>
                      <span className={feature.included ? 'text-neutral-700' : 'text-neutral-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? 'bg-primary border border-green-500 hover:bg-white' : 'bg-white border border-green-500 hover:bg-primary'
                  }`}
                  size="lg"
                >
                  <Link href="/contact">
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-500 mb-4">
            Need a custom solution? We can create a tailor-made package just for you.
          </p>
          <Button asChild className="border border-green-600">
            <Link href="/contact">
              Get a Custom Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;