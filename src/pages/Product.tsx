import React from "react";
import { Star, Zap, Coins, Lock, Globe } from "lucide-react";
import ThreeBackground from '@/components/ThreeBackground';
import ProductHeader from '@/components/ProductHeader';
import FeatureCard from '@/components/FeatureCard';

interface IFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  wrapperClass: string;
  iconWrapperClass: string;
  iconClass: string;
};

const FEATURES: IFeature[] = [
  {
    id: 'military-security',
    title: 'Military-Grade Security',
    description:
      'Hardware security modules, multi-signature authentication, and biometric protection ensure your digital assets are safe from hackers and unauthorized access.',
    icon: Lock,
    wrapperClass:
      'bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]',
    iconWrapperClass:
      'text-primary mb-6 group-hover:scale-110 transition-transform duration-300',
    iconClass: 'h-8 w-8 text-primary mx-auto',
  },
  {
    id: 'multi-chain',
    title: 'Multi-Chain Support',
    description:
      'Support for 50+ blockchain networks including Ethereum, Bitcoin, Solana, and Polygon. Seamlessly manage all your digital assets in one secure interface.',
    icon: Globe,
    wrapperClass:
      'bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]',
    iconWrapperClass:
      'text-secondary mb-6 group-hover:scale-110 transition-transform duration-300',
    iconClass: 'h-8 w-8 text-secondary mx-auto',
  },
  {
    id: 'defi-integration',
    title: 'DeFi Integration',
    description:
      'Built-in DeFi protocols for yield farming, staking, and liquidity provision. Automatically optimize your returns while maintaining full control of your private keys.',
    icon: Zap,
    wrapperClass:
      'bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]',
    iconWrapperClass:
      'text-success mb-6 group-hover:scale-110 transition-transform duration-300',
    iconClass: 'h-8 w-8 text-success mx-auto',
  },
];

const Product: React.FC = () => {
  return (
    <div className="min-h-screen text-foreground">
      <ThreeBackground />
      <ProductHeader />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Future of
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Digital Assets
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the next generation of cryptocurrency management with
            CryptoVault Pro - your secure digital wallet that protects, manages,
            and optimizes your blockchain portfolio across multiple networks.
          </p>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-2xl border border-primary/30 glow-primary">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-card rounded-xl flex items-center justify-center border border-border">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-background rounded-lg flex items-center justify-center border border-primary/50">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center pulse-glow">
                    <Coins className="w-16 h-16 md:w-20 md:h-20 text-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section id="description" className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Revolutionary Blockchain Technology
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CryptoVault Pro combines cutting-edge encryption, multi-chain
              support, and intuitive design to provide comprehensive digital
              asset management. Secure your Bitcoin, Ethereum, and 1000+
              cryptocurrencies with military-grade security. Our advanced DeFi
              integration and yield farming algorithms automatically optimize
              your portfolio for maximum returns while maintaining complete
              custody of your assets.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Key Features
            </h3>
            <p className="text-lg text-muted-foreground">
              Everything you need for secure crypto management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.id}
                title={f.title}
                description={f.description}
                Icon={f.icon}
                wrapperClass={f.wrapperClass}
                iconClass={f.iconClass}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border glow-primary">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Secure Your Digital Assets?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of crypto enthusiasts who have already secured
              their digital wealth with CryptoVault Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber px-8 py-3 rounded-lg font-semibold transition-all">
                Get Started - Free
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors">
                View Demo
              </button>
            </div>
            <div className="flex justify-center items-center mt-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-current" />
              ))}
              <span className="ml-2 text-muted-foreground">
                4.9/5 from 12,847 users
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                CryptoVault Pro
              </h4>
              <p className="text-muted-foreground">
                Revolutionizing digital asset security with cutting-edge
                blockchain technology and military-grade encryption.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Contact Information
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 support@cryptovaultpro.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Blockchain Avenue, Crypto City, CC 12345</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Follow Us
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>🐦 @CryptoVaultPro</p>
                <p>📘 Facebook.com/CryptoVaultPro</p>
                <p>📷 @CryptoVaultPro</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CryptoVault Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
