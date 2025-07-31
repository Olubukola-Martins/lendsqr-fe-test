import React from 'react';
import './Field.scss';

type Props = {
  label: string;
  value: string;
};

export const Field: React.FC<Props> = ({ label, value }) => (
  <div className="field">
    <div className="field__label">{label}</div>
    <div className="field__value">{value}</div>
  </div>
);