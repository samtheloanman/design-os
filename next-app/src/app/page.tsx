import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 border-b border-secondary">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 leading-[0.9] max-w-4xl tracking-tighter">
              FinTech Real Estate <br />
              & Finance Agency
            </h1>
            <p className="text-lg md:text-xl font-semibold text-primary/70 mb-10 max-w-2xl leading-relaxed">
              Modern digital mortgages with a human touch. We provide innovative capital solutions
              for residential and commercial investments nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-primary transition-all rounded-sm shadow-md flex items-center gap-2">
                Start Your Application <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-primary hover:text-white transition-all rounded-sm">
                View Loan Programs
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 text-sm font-bold text-primary/60 uppercase tracking-widest">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> FAST CLOSING</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> NATIONWIDE</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> NO INCOME DOCS</span>
            </div>
          </div>
        </section>

        {/* Featured Programs Grid */}
        <section className="py-24 bg-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">Our Core Offerings</h2>
                <div className="h-2 w-24 bg-accent"></div>
              </div>
              <button className="hidden sm:block text-accent font-bold uppercase tracking-widest text-sm hover:underline">
                View All Programs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "No Income Verification", desc: "Non-QM loans for self-employed and investors without tax returns." },
                { title: "Hard Money Loans", desc: "Fast capital for fix-and-flip, purchase, or bridge financing." },
                { title: "Commercial Real Estate", desc: "SBA, Multi-family, Industrial and Office building financing." },
                { title: "Residential Mortgage", desc: "Competitive Conventional, FHA, VA and Jumbo loan programs." }
              ].map((prog, i) => (
                <div key={i} className="bg-white p-8 border border-secondary hover:border-accent transition-colors group cursor-pointer shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4 leading-none group-hover:text-accent transition-colors">{prog.title}</h3>
                  <p className="text-[15px] font-semibold text-primary/70 mb-6 leading-relaxed">
                    {prog.desc}
                  </p>
                  <span className="text-accent font-bold uppercase tracking-widest text-xs flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Funded Preview */}
        <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary inline-block relative">
              Recently Funded
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/20"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dynamic content would go here */}
            <div className="aspect-video bg-secondary animate-pulse"></div>
            <div className="aspect-video bg-secondary animate-pulse"></div>
            <div className="aspect-video bg-secondary animate-pulse"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
