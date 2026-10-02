import { useState } from 'react'
import { motion } from 'framer-motion'
const links = ['Home', 'About', 'Services', 'Contact']
export default function Navbar() {
  const [active, setActive] = useState('Home')
  return (
    <div style={{ position: 'fixed', top: '20px', left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center' }}>
      <motion.nav
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '5px 6px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
      >
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setActive(link)}
            style={{ position: 'relative', padding: '6px 14px', borderRadius: '9px', fontSize: '13px', fontWeight: active === link ? 500 : 400, color: active === link ? '#000' : 'rgba(0,0,0,0.5)', textDecoration: 'none', transition: 'color 0.2s ease', cursor: 'pointer', letterSpacing: '0.01em' }}>
            {active === link && (
              <motion.span layoutId="pill" style={{ position: 'absolute', inset: 0, borderRadius: '9px', background: 'rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.08)' }} transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{link}</span>
          </a>
        ))}
      </motion.nav>
    </div>
  )
}
