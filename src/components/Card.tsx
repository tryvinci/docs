import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title: string;
  icon?: string;
  href?: string;
  children: React.ReactNode;
}

export default function Card({title, icon, href, children}: CardProps) {
  const content = (
    <div className={styles.card}>
      {icon && <i className={`fa fa-${icon}`} />}
      <h3>{title}</h3>
      <p>{children}</p>
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