import styles from './Rating.module.scss';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import { ReactComponent as StarIcon } from './favorite.svg';
import React, { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  children,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    makeRating(rating);
  }, [rating]);

  const makeRating = (currentRating: number) => {
    const updatedArr = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable == true,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onclick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: React.KeyboardEvent) => isEditable && handleSpace(i + 1, e)}
        />
      );
    });
    setRatingArray(updatedArr);
  };

  const handleSpace = (i: number, e: KeyboardEvent) => {
    if (e.code != 'Space' || !setRating) return;
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    makeRating(i);
  };

  const onclick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r: JSX.Element, i: number) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
