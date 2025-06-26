import React, { useState } from 'react';
import styles from './Card.module.css';

// Card component (reusing existing styles)
export interface CardProps {
  title: string;
  icon?: string;
  href?: string;
  children: React.ReactNode;
}

export function Card({ title, icon, href, children }: CardProps) {
  const content = (
    <div className={styles.card}>
      {icon && <i className={`fa fa-${icon}`} />}
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );

  return href ? (
    <a href={href} className={styles.cardLink}>
      {content}
    </a>
  ) : (
    content
  );
}

// CardGroup component
export interface CardGroupProps {
  cols?: number;
  children: React.ReactNode;
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  return (
    <div 
      className="card-group" 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${cols}, 1fr)`, 
        gap: '1rem',
        marginBottom: '1rem'
      }}
    >
      {children}
    </div>
  );
}

// Tabs and Tab components
export interface TabsProps {
  children: React.ReactNode;
}

export interface TabProps {
  title: string;
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Tab
  );

  return (
    <div className="tabs" style={{ marginBottom: '1rem' }}>
      <div 
        className="tab-list"
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--ifm-color-emphasis-300)',
          marginBottom: '1rem'
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '0.75rem 1rem',
              border: 'none',
              background: activeTab === index ? 'var(--ifm-color-primary)' : 'transparent',
              color: activeTab === index ? 'white' : 'var(--ifm-color-emphasis-800)',
              cursor: 'pointer',
              borderRadius: '6px 6px 0 0',
              fontWeight: activeTab === index ? 600 : 400
            }}
          >
            {React.isValidElement(tab) ? tab.props.title : ''}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab]}
      </div>
    </div>
  );
}

export function Tab({ title, children }: TabProps) {
  return <div className="tab">{children}</div>;
}

// Accordion component
export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details 
      className="accordion"
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary 
        className="accordion-title"
        style={{
          cursor: 'pointer',
          padding: '1rem',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '6px',
          marginBottom: isOpen ? '0' : '0.5rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {title}
        <span style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          ▶
        </span>
      </summary>
      <div 
        className="accordion-content"
        style={{
          padding: '1rem',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderTop: 'none',
          borderRadius: '0 0 6px 6px',
          marginBottom: '0.5rem'
        }}
      >
        {children}
      </div>
    </details>
  );
}

// AccordionGroup component
export interface AccordionGroupProps {
  children: React.ReactNode;
}

export function AccordionGroup({ children }: AccordionGroupProps) {
  return (
    <div className="accordion-group" style={{ marginBottom: '1rem' }}>
      {children}
    </div>
  );
}

// CodeBlocks component - for multiple code blocks with tabs
export interface CodeBlocksProps {
  children: React.ReactNode;
}

export function CodeBlocks({ children }: CodeBlocksProps) {
  return (
    <div className="code-blocks" style={{ marginBottom: '1rem' }}>
      {children}
    </div>
  );
}

// Steps component
export interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div 
      className="steps"
      style={{
        counterReset: 'step-counter',
        marginBottom: '1rem'
      }}
    >
      {children}
    </div>
  );
}

// Callout components (Tip, Warning, Info, etc.)
interface CalloutProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
}

const CalloutBase = ({ type, title, icon, children }: CalloutProps & { type: string }) => {
  const colors = {
    tip: { bg: '#e8f5e8', border: '#4caf50', icon: '💡' },
    warning: { bg: '#fff3cd', border: '#ff9800', icon: '⚠️' },
    info: { bg: '#e3f2fd', border: '#2196f3', icon: 'ℹ️' },
    note: { bg: '#f5f5f5', border: '#9e9e9e', icon: '📝' },
    error: { bg: '#ffebee', border: '#f44336', icon: '❌' },
    check: { bg: '#e8f5e8', border: '#4caf50', icon: '✅' }
  };

  const style = colors[type] || colors.info;

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        borderLeftWidth: '4px',
        borderRadius: '6px',
        marginBottom: '1rem'
      }}
    >
      {title && (
        <div style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{icon || style.icon}</span>
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export function Tip({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="tip" title={title} icon={icon}>{children}</CalloutBase>;
}

export function Warning({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="warning" title={title} icon={icon}>{children}</CalloutBase>;
}

export function Info({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="info" title={title} icon={icon}>{children}</CalloutBase>;
}

export function Note({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="note" title={title} icon={icon}>{children}</CalloutBase>;
}

export function Error({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="error" title={title} icon={icon}>{children}</CalloutBase>;
}

export function Check({ title, icon, children }: CalloutProps) {
  return <CalloutBase type="check" title={title} icon={icon}>{children}</CalloutBase>;
}

// Export default Card for compatibility
export default Card; 