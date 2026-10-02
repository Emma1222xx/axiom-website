import { siteConfig } from '../../siteConfig'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-center py-6 text-silver-600 text-xs">
      <p>© {year} {siteConfig.name}. All rights reserved.</p>
    </footer>
  )
}
