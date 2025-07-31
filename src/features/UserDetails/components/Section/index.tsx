import React from 'react';
import './Section.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ title, children }) => (
  <div className="section">
    <h3 className="section__title">{title}</h3>
    <div className="section__content">{children}</div>
  </div>
);
