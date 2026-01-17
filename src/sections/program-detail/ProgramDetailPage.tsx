'use client'

import { useState } from 'react'
import { ChevronDown, Phone, FileText, CheckCircle2 } from 'lucide-react'
import data from '@/../product/sections/program-detail/data.json'

export default function ProgramDetailPage() {
  const { program, relatedPrograms, testimonials, fundedLoans } = data
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  // Parse FAQ items from HTML
  const faqItems = [
    {
      q: "What's the minimum credit score for FHA?",
      a: "The minimum is typically 580 for a 3.5% down payment. Borrowers with scores between 500-579 can qualify with a 10% down payment, but rates will be higher.",
    },
    {
      q: 'Can I get an FHA loan with a bankruptcy on my credit?',
      a: 'Yes! FHA loans are very forgiving. You can qualify 2 years after a Chapter 7 bankruptcy discharge or 1 year after a Chapter 13 bankruptcy begins.',
    },
    {
      q: 'What are FHA mortgage insurance premiums?',
      a: 'Upfront mortgage insurance premium (UFMIP) is typically 1.75% of the loan amount. Annual mortgage insurance premium (MIP) varies based on down payment and loan amount.',
    },
    {
      q: 'Can I use FHA for investment properties?',
      a: 'No, FHA loans are only for primary residences. The property must be your main home.',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-800 dark:to-cyan-900 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              {program.programType}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {program.name}
          </h1>
          <div className="prose prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: program.mortgageProgramHighlights }} />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-cyan-600 font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-cyan-500 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-cyan-600 transition-colors">
              Request Callback
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Overview Section */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 uppercase tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                What is {program.name}?
              </h2>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: program.whatAre }} />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8">
              <h3
                className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Key Benefits
              </h3>
              <div className="prose dark:prose-invert max-w-none prose-ul:list-none prose-ul:pl-0 prose-li:flex prose-li:gap-3" dangerouslySetInnerHTML={{ __html: program.benefitsOf }} />
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Quick Facts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Financial Terms */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Financial Requirements
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-bold text-cyan-600">Min Credit Score:</span>
                  <p className="text-slate-600 dark:text-slate-300">{program.minCreditScore}</p>
                </div>
                <div>
                  <span className="font-bold text-cyan-600">Interest Rate Range:</span>
                  <p className="text-slate-600 dark:text-slate-300">{program.interestRates.split('from ')[1]?.split(' depending')[0] || '6.5% - 7.25%'}</p>
                </div>
                <div>
                  <span className="font-bold text-cyan-600">Max LTV:</span>
                  <p className="text-slate-600 dark:text-slate-300">{program.maxLTV}</p>
                </div>
                <div>
                  <span className="font-bold text-cyan-600">Max DTI:</span>
                  <p className="text-slate-600 dark:text-slate-300">{(program.maxDebtToIncomeRatio * 100).toFixed(0)}%</p>
                </div>
              </div>
            </div>

            {/* Loan Amounts */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Loan Amount
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-bold text-cyan-600 uppercase">Minimum</span>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{program.minimumLoanAmount}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-600 uppercase">Maximum</span>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{program.maximumLoanAmount}</p>
                </div>
              </div>
            </div>

            {/* Property & Borrower */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Eligibility
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-bold text-cyan-600 block mb-1">Property Types:</span>
                  <div className="flex flex-wrap gap-1">
                    {program.propertyTypesResidential?.map((type) => (
                      <span key={type} className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded text-xs">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-cyan-600 block mb-1">Borrower Types:</span>
                  <div className="flex flex-wrap gap-1">
                    {program.borrowerType?.slice(0, 2).map((type) => (
                      <span key={type} className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded text-xs">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Requirements & Eligibility
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                What You Need
              </h3>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: program.requirements }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                How to Qualify
              </h3>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: program.howToQualifyFor }} />
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: program.detailsAboutProgram }} />
        </section>

        {/* Why Choose CMRE */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/10 rounded-lg p-8 md:p-12">
            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: program.whyUs }} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-slate-50 text-left" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-cyan-600 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              What Borrowers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">"{testimonial.testimonialText}"</p>
                  <p className="font-bold text-slate-900 dark:text-slate-50">{testimonial.borrowerName}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.propertyLocation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Funded Loans */}
        {fundedLoans.length > 0 && (
          <section className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Recently Funded Deals
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fundedLoans.slice(0, 3).map((loan) => (
                <div key={loan.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={loan.propertyImage} alt={loan.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">{loan.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{loan.location}</p>
                    <p className="text-2xl font-bold text-cyan-600">{loan.loanAmount}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Programs */}
        {relatedPrograms.length > 0 && (
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 uppercase tracking-wide"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Similar Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPrograms.slice(0, 3).map((relatedProgram) => (
                <button
                  key={relatedProgram.id}
                  className="text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg transition-all group"
                >
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {relatedProgram.programType}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{relatedProgram.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {relatedProgram.mortgageProgramHighlights}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 uppercase tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Ready to get started?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get pre-qualified in minutes and take the first step toward your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-cyan-600 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-cyan-700 transition-colors">
              Start Application
            </button>
            <button className="px-10 py-4 bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 border border-cyan-600 dark:border-cyan-400 font-bold uppercase tracking-wide rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
