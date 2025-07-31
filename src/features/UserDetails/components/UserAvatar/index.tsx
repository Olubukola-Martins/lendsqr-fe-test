import React from 'react';
import './UserAvatar.scss';

type Props = {
  name: string;
  tier: number;
  balance: string;
  accountNumber: string;
};

export const UserAvatar: React.FC<Props> = ({ name, tier, balance, accountNumber }) => {
  return (
    <div className="user-avatar">
      <div className="user-avatar__info">
        <div className="user-avatar__icon">👤</div>
        <div>
          <div className="user-avatar__name">{name}</div>
          <div className="user-avatar__tier">User’s Tier ⭐{tier}</div>
        </div>
      </div>
      <div className="user-avatar__account">
        <div className="user-avatar__balance">₦{balance}</div>
        <div className="user-avatar__bank">{accountNumber}</div>
      </div>
    </div>
  );
};








