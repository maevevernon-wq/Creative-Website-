import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Video Background */}
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={`${import.meta.env.BASE_URL}hero-video.mp4`} autoPlay muted loop playsInline />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)' }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '0 24px' }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.95, maxWidth: '900px', margin: 0 }}>
          Build Stunning<br /><em style={{ fontStyle: 'italic' }}>Websites</em> with AI
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          style={{ marginTop: '24px', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', lineHeight: 1.6 }}>
          Design, develop, and deploy beautiful digital experiences — faster than ever before.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }} style={{ marginTop: '40px', display: 'flex', gap: '12px' }}>
          <button style={{ padding: '14px 32px', borderRadius: '999px', background: '#fff', color: '#000', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'all 0.2s ease' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')} onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>Get Started</button>
          <button style={{ padding: '14px 32px', borderRadius: '999px', background: 'transparent', color: '#fff', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.35)', cursor: 'pointer', transition: 'all 0.2s ease' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>Learn More</button>
        </motion.div>
      </div>
    </section>
  )
}
