'use client'

import { useState } from 'react'
import { ArrowRight, Zap, TrendingUp, MapPin, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Homepage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const featuredPrograms = [
    {
      id: 1,
      name: 'FHA Mortgage',
      highlights: ['3.5% down', 'Credit 580+', 'First-time buyers'],
      minCredit: 580,
      rate: '6.5-7.2%',
    },
    {
      id: 2,
      name: 'VA Mortgage',
      highlights: ['0% down', 'No PMI', 'Veterans only'],
      minCredit: 620,
      rate: '6.0-6.7%',
    },
    {
      id: 3,
      name: 'Conventional',
      highlights: ['20% down', 'Best rates', 'Excellent credit'],
      minCredit: 740,
      rate: '5.5-6.5%',
    },
    {
      id: 4,
      name: 'SBA Commercial',
      highlights: ['Small business', 'Flexible terms', 'Fast funding'],
      minCredit: 680,
      rate: '7.0-9.0%',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Martinez',
      location: 'Austin, TX',
      rating: 5,
      quote: "CMRE made my homeownership dream come true. The process was smooth and the team was incredibly helpful!",
    },
    {
      name: 'James Chen',
      location: 'Seattle, WA',
      rating: 5,
      quote: 'Pre-approved in 2 days. The rates are competitive and the service is outstanding. Highly recommended!',
    },
    {
      name: 'Rachel Thompson',
      location: 'Denver, CO',
      rating: 5,
      quote: 'First-time homebuyer and they guided me through everything. Professional, friendly, and fast!',
    },
  ]

  const recentDeals = [
    {
      title: '$285,000 FHA Purchase',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1570129477492-45ac003c4de0?w=400&h=300&fit=crop',
    },
    {
      title: '$450,000 VA Mortgage',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    },
    {
      title: '$325,500 Construction Loan',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1580587771525-78991c7a0de8?w=400&h=300&fit=crop',
    },
    {
      title: '$1.2M Commercial',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    },
  ]

  const programCategories = [
    { type: 'Residential', count: 45, icon: '🏠' },
    { type: 'Commercial', count: 28, icon: '🏢' },
    { type: 'Hard Money', count: 12, icon: '⚡' },
    { type: 'NonQM', count: 35, icon: '📋' },
    { type: 'Reverse Mortgage', count: 8, icon: '👴' },
    { type: 'Construction', count: 18, icon: '🏗️' },
  ]

  const faqItems = [
    {
      q: 'How long does pre-qualification take?',
      a: 'Most borrowers are pre-qualified within 24 hours. You can start the process online and our team will reach out with next steps.',
    },
    {
      q: 'What credit score do I need?',
      a: 'It depends on the program. We have options for credit scores as low as 500+. Popular programs start at 580-620.',
    },
    {
      q: 'Can I apply with a bankruptcy?',
      a: 'Yes! FHA and many other programs accept borrowers with bankruptcy history. Timing requirements vary by program.',
    },
    {
      q: 'Do you service loans nationwide?',
      a: 'Yes, we operate in 50+ markets across the United States with local specialists in each area.',
    },
  ]

  const nextCarouselIndex = (carouselIndex + 1) % featuredPrograms.length
  const prevCarouselIndex = carouselIndex === 0 ? featuredPrograms.length - 1 : carouselIndex - 1

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 dark:from-cyan-800 dark:via-cyan-900 dark:to-cyan-950 px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Find Your Perfect Loan Program
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            179+ programs for homebuyers, investors, and businesses. Get pre-qualified in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-cyan-600 font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-colors text-lg">
              Browse Programs
            </button>
            <button className="px-8 py-4 bg-cyan-500 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-cyan-600 transition-colors text-lg border border-cyan-400">
              Get Pre-Qualified
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white">$10B+</div>
              <div className="text-cyan-100 text-sm md:text-base">Funded</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
              <div className="text-cyan-100 text-sm md:text-base">Closings</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-cyan-100 text-sm md:text-base">Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '⚡', title: 'Fast & Easy', desc: 'Pre-qualified in 24 hours with our quick online process' },
            { icon: '🎯', title: '179+ Programs', desc: 'Every loan type for homebuyers, investors, and businesses' },
            { icon: '👥', title: 'Expert Support', desc: 'Specialists in 50+ markets ready to help you' },
          ].map((prop, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3
                className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2 uppercase tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {prop.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Programs Carousel */}
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Featured Programs
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {featuredPrograms.map((program, i) => (
                <div
                  key={program.id}
                  className={`bg-white dark:bg-slate-900 rounded-lg p-6 border-2 transition-all ${
                    i === carouselIndex
                      ? 'border-cyan-600 shadow-lg'
                      : 'border-slate-200 dark:border-slate-700 opacity-60'
                  }`}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">{program.name}</h3>
                  <ul className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    {program.highlights.map((h, j) => (
                      <li key={j}>✓ {h}</li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Min Credit</div>
                      <div className="font-bold text-slate-900 dark:text-slate-50">{program.minCredit}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Rates</div>
                      <div className="font-bold text-cyan-600">{program.rate}</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-cyan-600 text-white font-bold uppercase tracking-wide rounded hover:bg-cyan-700 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCarouselIndex(prevCarouselIndex)}
                className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {featuredPrograms.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === carouselIndex ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCarouselIndex(nextCarouselIndex)}
                className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="text-center mt-8">
              <a href="#" className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:gap-3 transition-all">
                View All Programs <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: 1, title: 'Get Pre-Qualified', desc: 'Quick online application' },
            { num: 2, title: 'Compare Options', desc: 'Explore available programs' },
            { num: 3, title: 'Choose Program', desc: 'Select best fit for you' },
            { num: 4, title: 'Close Your Loan', desc: 'Funding in days' },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-lg p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-cyan-100">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 text-cyan-600 dark:text-cyan-400">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Program Categories */}
      <div className="bg-slate-50 dark:bg-slate-800 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Loan Programs by Category
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programCategories.map((cat, i) => (
              <button
                key={i}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 text-center hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{cat.type}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cat.count} programs</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          What Borrowers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-slate-900 dark:text-slate-50">{testimonial.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Deals */}
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Recently Funded Deals
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {recentDeals.map((deal, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{deal.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{deal.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:gap-3 transition-all">
              View All Deals <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center uppercase tracking-wide"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-slate-50 text-left">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-cyan-600 transition-transform ${expandedFAQ === i ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFAQ === i && (
                <div className="px-6 py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-800 dark:to-cyan-900 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
            Get pre-qualified in minutes and take the first step toward your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-cyan-600 font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-colors">
              Start Application
            </button>
            <button className="px-10 py-4 bg-cyan-500 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-cyan-600 transition-colors border border-cyan-400">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
