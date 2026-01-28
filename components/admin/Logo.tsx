'use client';

export default function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '32px 48px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #1B5E20 0%, #1976D2 100%)',
        boxShadow: '0 8px 24px rgba(27, 94, 32, 0.3)',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '50%',
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <img
          src="/images/logo/asad-logo.png"
          alt="ASAD"
          width={120}
          height={120}
          style={{ objectFit: 'contain', display: 'block' }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '1.75rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'block',
          }}
        >
          ASAD Admin
        </span>
        <span
          style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.85)',
            marginTop: '6px',
            display: 'block',
          }}
        >
          Content Management
        </span>
      </div>
    </div>
  );
}
