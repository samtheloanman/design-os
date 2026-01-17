import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Programs', href: '/programs', isActive: false },
    { label: 'Locations', href: '/locations', isActive: false },
    { label: 'Funded Loans', href: '/funded-loans', isActive: false },
    { label: 'Partner Portal', href: '/partners', isActive: false },
  ]

  const user = {
    name: 'Alex Morgan',
    avatarUrl: undefined,
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout')}
      onSearch={(query) => console.log('Search:', query)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Welcome to CMRE
            </h1>
            <p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Custom Mortgage and Real Estate offers 179+ loan programs across
              50+ locations. Use the navigation above to explore our programs,
              locations, funded deals, and partner resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programs Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <h2
                className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Loan Programs
              </h2>
              <p
                className="text-slate-600 dark:text-slate-400 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Browse our complete directory of 179+ residential, commercial,
                hard money, and non-QM loan programs. Each program includes
                eligibility requirements, timelines, and FAQs.
              </p>
              <button className="px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                Explore Programs
              </button>
            </div>

            {/* Locations Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <h2
                className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Service Locations
              </h2>
              <p
                className="text-slate-600 dark:text-slate-400 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Find local mortgage specialists and services in 50+ markets
                across the country. Each location page features relevant
                programs, local expertise, and funded deals in your area.
              </p>
              <button className="px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                Find Your Location
              </button>
            </div>

            {/* Funded Loans Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <h2
                className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Funded Loans
              </h2>
              <p
                className="text-slate-600 dark:text-slate-400 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                See real success stories from our borrowers. Browse funded
                deals, testimonials, and case studies showcasing completed
                projects across residential and commercial properties.
              </p>
              <button className="px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                View Funded Deals
              </button>
            </div>

            {/* Partner Portal Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <h2
                className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Partner Portal
              </h2>
              <p
                className="text-slate-600 dark:text-slate-400 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Realtors and mortgage professionals: Access partner resources,
                submit referrals, and learn about our commission structure and
                partnership benefits.
              </p>
              <button className="px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>

          <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900 rounded-lg p-8">
            <h3
              className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Ready to Apply?
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400 mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Whether you're exploring loan options or ready to apply, we're
              here to help. Start the application process or request a callback
              from a specialist.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                Start Application
              </button>
              <button className="px-6 py-2 bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-slate-700 transition-colors">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
