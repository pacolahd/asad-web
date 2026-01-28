'use client';

import React from 'react';

export type StatCardVariant = 'green' | 'blue' | 'yellow';

export interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  variant?: StatCardVariant;
}

const variantColors: Record<StatCardVariant, { color: string; bgColor: string; darkColor: string }> = {
  green: {
    color: '#1B5E20',
    bgColor: 'rgba(27, 94, 32, 0.08)',
    darkColor: '#4CAF50',
  },
  blue: {
    color: '#1976D2',
    bgColor: 'rgba(25, 118, 210, 0.08)',
    darkColor: '#42A5F5',
  },
  yellow: {
    color: '#F57C00',
    bgColor: 'rgba(255, 193, 7, 0.12)',
    darkColor: '#FFB74D',
  },
};

export function StatCard({ label, value, description, variant = 'green' }: StatCardProps) {
  const colors = variantColors[variant];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        backgroundColor: colors.bgColor,
        borderRadius: '8px',
        border: '1px solid var(--theme-elevation-100)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      <div style={{ flex: 1 }}>
        <span
          style={{
            color: 'var(--theme-elevation-800)',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          {label}
        </span>
        {description && (
          <p
            style={{
              margin: '4px 0 0 0',
              fontSize: '0.7rem',
              color: 'var(--theme-elevation-500)',
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>
        )}
      </div>
      <span
        style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          color: colors.color,
          minWidth: '60px',
          textAlign: 'right',
        }}
        className="stat-card__value"
      >
        {value}
      </span>
    </div>
  );
}

export interface StatCardContainerProps {
  title: string;
  note?: string;
  children: React.ReactNode;
}

export function StatCardContainer({ title, note, children }: StatCardContainerProps) {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'var(--theme-elevation-50)',
        borderRadius: '10px',
        border: '1px solid var(--theme-elevation-100)',
        marginBottom: '20px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
      }}
    >
      <h4
        style={{
          margin: '0 0 14px 0',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--theme-elevation-700)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {title}
      </h4>
      <div style={{ display: 'grid', gap: '10px' }}>{children}</div>
      {note && (
        <p
          style={{
            margin: '14px 0 0 0',
            fontSize: '0.75rem',
            color: 'var(--theme-elevation-500)',
            padding: '10px 12px',
            backgroundColor: 'var(--theme-elevation-100)',
            borderRadius: '6px',
            lineHeight: 1.5,
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}
