import React from 'react';
import './Section.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ title, children }) => (
  <div className="user_section">
    <h3 className="user_section__title">{title}</h3>
    <div className="user_section__content">{children}</div>
  </div>
);
