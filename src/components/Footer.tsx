import Image from 'next/image'
import { Facebook, Mail } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo/icon-white.png" alt="Buzaar" width={32} height={32} className="rounded-xl" />
              <span className="font-anton text-yellow text-2xl">buzaar</span>
            </div>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              The collector marketplace for Philippine toy fairs and conventions.
            </p>
            <div className="flex gap-4">
              <a href={CONTENT.footer.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
<a href="mailto:support@thepixelclub.app" className="text-muted hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <div className="text-muted text-xs font-bold uppercase tracking-widest mb-1">Legal</div>
            {CONTENT.footer.links.map((link, i) => (
              <a
                key={link}
                href={CONTENT.footer.hrefs[i]}
                className="text-muted text-sm hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-muted text-xs">© 2026 Buzaar. Made in the Philippines 🇵🇭</p>
          <p className="text-muted text-xs">by ThePixelClub Inc.</p>
        </div>
      </div>
    </footer>
  )
}
