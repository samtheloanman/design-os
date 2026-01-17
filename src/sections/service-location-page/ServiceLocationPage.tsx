import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Star } from 'lucide-react'
import type {
  ServiceLocationPageData,
  OfficeInfo,
  TeamMember,
  LocalProgram,
  LocalFundedDeal,
  LocationTestimonial,
} from '../../product/sections/service-location-page/types'

interface ServiceLocationPageProps {
  data: ServiceLocationPageData
  onGetPrequalified?: () => void
  onScheduleCallback?: () => void
  onContactTeam?: (email: string) => void
}

export const ServiceLocationPage: React.FC<ServiceLocationPageProps> = ({
  data,
  onGetPrequalified,
  onScheduleCallback,
  onContactTeam,
}) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [teamCarouselIndex, setTeamCarouselIndex] = useState(0)
  const [dealsCarouselIndex, setDealsCarouselIndex] = useState(0)

  const itemsPerPage = 6
  const visibleDeals = data.recentDeals.slice(
    dealsCarouselIndex * itemsPerPage,
    (dealsCarouselIndex + 1) * itemsPerPage
  )
  const totalDealPages = Math.ceil(data.recentDeals.length / itemsPerPage)

  const handleTeamPrevious = () => {
    setTeamCarouselIndex(Math.max(0, teamCarouselIndex - 1))
  }

  const handleTeamNext = () => {
    setTeamCarouselIndex(Math.min(data.teamMembers.length - 1, teamCarouselIndex + 1))
  }

  const handleDealsPrevious = () => {
    setDealsCarouselIndex(Math.max(0, dealsCarouselIndex - 1))
  }

  const handleDealsNext = () => {
    setDealsCarouselIndex(Math.min(totalDealPages - 1, dealsCarouselIndex + 1))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-900 dark:to-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {data.heroImage && (
            <img src={data.heroImage} alt="" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bebas tracking-tight mb-4">
              {data.city} Mortgage Services
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-100 mb-8">
              Expert lending solutions for {data.state}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 max-w-2xl">
              <div>
                <div className="text-3xl sm:text-4xl font-bold">{data.marketStats.yearsServing}+</div>
                <div className="text-sm sm:text-base text-cyan-100">Years Serving</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">
                  {(data.marketStats.dealsClosedLocally / 1000).toFixed(1)}K
                </div>
                <div className="text-sm sm:text-base text-cyan-100">Deals Funded</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">{data.marketStats.teamSize}+</div>
                <div className="text-sm sm:text-base text-cyan-100">Local Specialists</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetPrequalified}
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Get Pre-Qualified
              </button>
              <button
                onClick={onScheduleCallback}
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors border border-cyan-400"
              >
                Speak with Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-0">
            {/* Office Image */}
            <div className="h-64 md:h-auto bg-slate-200 dark:bg-slate-700">
              <img
                src="https://images.unsplash.com/photo-1497366216548-495e9b1b5548?w=600"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Office Info */}
            <div className="p-8">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-sm font-semibold rounded-full">
                  {data.officeInfo.managedBadge}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {data.officeInfo.name}
              </h2>

              <div className="space-y-4 mb-8">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold">
                      {data.officeInfo.address}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.officeInfo.city}, {data.officeInfo.state} {data.officeInfo.zipCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <a href={`tel:${data.officeInfo.phone}`} className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                    {data.officeInfo.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <a href={`mailto:${data.officeInfo.email}`} className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                    {data.officeInfo.email}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1">Office Hours</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{data.officeInfo.hours.monday}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-4 tracking-tight">
            Meet Our {data.city} Team
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
            Our local lending specialists are here to help
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Team Member Photo */}
                <div className="h-40 bg-slate-200 dark:bg-slate-700">
                  {member.photo && <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />}
                </div>

                {/* Team Member Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-3">{member.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{member.bio}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Experience Badge */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {member.yearsExperience}+ years experience
                  </p>

                  {/* Contact Links */}
                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      onClick={() => onContactTeam?.(member.email)}
                      className="block text-sm text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="block text-sm text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Market Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-12 tracking-tight">
            {data.city} Market Overview
          </h2>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {data.marketStats.activeProgramsCount}+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Active Programs</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {data.marketStats.totalFundedAmount}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Total Funded Locally</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {data.marketStats.neighborhoodsServed}+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Neighborhoods Served</p>
            </div>
          </div>

          {/* Market Description */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">{data.marketInfo.marketDescription}</p>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Primary Market Focus</h3>
              <div className="flex flex-wrap gap-3">
                {data.marketInfo.primaryMarketFocus.map((focus) => (
                  <span
                    key={focus}
                    className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded-full text-sm font-semibold"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Local Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-4 tracking-tight">
            Popular Programs in {data.city}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Programs most commonly used by borrowers in this market
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.localPrograms.slice(0, 6).map((program) => (
              <div
                key={program.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{program.name}</h3>
                  <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded font-semibold">
                    {program.programType}
                  </span>
                </div>

                <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mb-4">
                  Available in {data.city}
                </p>

                <div className="space-y-2 mb-6">
                  {program.highlights.map((highlight, idx) => (
                    <p key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                      <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Min Credit</p>
                    <p className="font-bold text-slate-900 dark:text-white">{program.minCreditScore}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rate Range</p>
                    <p className="font-bold text-slate-900 dark:text-white">{program.interestRateRange}</p>
                  </div>
                </div>

                <button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Funded Deals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-4 tracking-tight">
            Recently Funded in {data.city}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Success stories from our local borrowers
          </p>

          {/* Deals Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.propertyType}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{deal.loanAmount}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    <span className="font-semibold">{deal.propertyType}</span> in {deal.neighborhood}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Closed {deal.closingDate}</p>
                  <span className="inline-block text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded font-semibold">
                    {deal.programUsed}
                  </span>
                  {deal.successStory && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
                      "{deal.successStory}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalDealPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleDealsPrevious}
                disabled={dealsCarouselIndex === 0}
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalDealPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setDealsCarouselIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === dealsCarouselIndex
                        ? 'bg-cyan-600 dark:bg-cyan-400'
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleDealsNext}
                disabled={dealsCarouselIndex === totalDealPages - 1}
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose CMRE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-12 tracking-tight">
            Why Choose CMRE {data.city}?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.whyChooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{reason.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-4 tracking-tight">
            Success Stories from {data.city}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Real borrowers, real results
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {data.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.quote}"</p>

                {/* Customer Info */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.customerName}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{testimonial.loanProgram}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas text-slate-900 dark:text-white mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {data.faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <h3 className="font-semibold text-left text-slate-900 dark:text-white">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 transition-transform ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-900 dark:to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-bebas mb-4 tracking-tight">
            Ready to Start Your {data.city} Loan Journey?
          </h2>
          <p className="text-lg text-cyan-100 mb-8">
            Our {data.city} team is ready to help you find the perfect loan program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetPrequalified}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Get Pre-Qualified Now
            </button>
            <button
              onClick={onScheduleCallback}
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors border border-cyan-400"
            >
              Request a Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
