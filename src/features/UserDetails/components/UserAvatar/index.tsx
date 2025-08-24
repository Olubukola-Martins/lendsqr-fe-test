import React from "react";
import "./UserAvatar.scss";
import { AiOutlineUser } from "react-icons/ai";

type Props = {
  name: string;
  tier: number;
  balance: string;
  accountNumber: string;
  userCode: string;
  imageUrl?: string;
  altText?: string;
};

export const UserAvatar: React.FC<Props> = ({
  name,
  // tier,
  balance,
  accountNumber,
  altText,
  imageUrl,
  userCode,
}) => {
  const stars = [1, 2, 3];
  const rating = 1;

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
        <div className="user-avatar__tier">
          User’s Tier
          {/* <span>⭐{tier}</span> */}
          <div className="star-rating">
            {stars.map((star) => (
              <svg
                key={star}
                className={`star ${star <= rating ? "filled" : "outlined"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.03h7.386c.969 0 1.371 1.24.588 1.81l-5.974 4.342 2.286 7.03c.3.921-.755 1.688-1.538 1.118L12 18.347l-5.973 4.342c-.783.57-1.838-.197-1.538-1.118l2.286-7.03-5.974-4.342c-.783-.57-.381-1.81.588-1.81h7.386l2.286-7.03z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="user-avatar__account">
        <div className="user-avatar__balance">₦{balance}</div>
        <div className="user-avatar__bank">{accountNumber}</div>
      </div>
    </div>
  );
};
