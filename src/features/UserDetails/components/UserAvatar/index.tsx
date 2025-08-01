import React from "react";
import "./UserAvatar.scss";
import { AiOutlineUser } from "react-icons/ai";

type Props = {
  name: string;
  tier: number;
  balance: string;
  accountNumber: string;
  userCode:string;
  imageUrl?: string;
  altText?: string;
};

export const UserAvatar: React.FC<Props> = ({
  name,
  tier,
  balance,
  accountNumber,
  altText,
  imageUrl,userCode
}) => {
  return (
    <div className="user-avatar">
      <div className="user-avatar__info">
        <div className={"user-avatar__image-container"}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={altText}
              className={"user-avatar__image"}
            />
          ) : (
            <AiOutlineUser className={"user-avatar__icon"} />
          )}
        </div>

        <div>
          <div className="user-avatar__name">{name}</div>
          <div className="user-avatar__code">{userCode}</div>
        </div>
          <div className="user-avatar__tier">User’s Tier <span>⭐{tier}</span></div>
        
      </div>
      <div className="user-avatar__account">
        <div className="user-avatar__balance">₦{balance}</div>
        <div className="user-avatar__bank">{accountNumber}</div>
      </div>
    </div>
  );
};
