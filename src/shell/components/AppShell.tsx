import { MainNav } from './MainNav'
import { UserMenu } from './UserMenu'
import { Footer } from './Footer'

export interface AppShellProps {
  children: React.ReactNode
  navigationItems: Array<{
    label: string
    href: string
    isActive?: boolean
  }>
  user?: {
    name: string
    avatarUrl?: string
  }
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onSearch?: (query: string) => void
}

export function AppShell({
  children,
  navigationItems,
  user,
  onNavigate,
  onLogout,
  onSearch,
}: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <MainNav
        navigationItems={navigationItems}
        user={user}
        onNavigate={onNavigate}
        onLogout={onLogout}
        onSearch={onSearch}
      />
      <main className="flex-1">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
