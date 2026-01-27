'use client';

export default function Logo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <img
        src="/images/logo/asad-logo.png"
        alt="ASAD"
        width={120}
        height={120}
        style={{ objectFit: 'contain' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>ASAD Admin</span>
    </div>
  );
}
