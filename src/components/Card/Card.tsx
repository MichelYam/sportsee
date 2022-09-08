import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { NutriCard, NutriCardImgContent, NutriCardImg, NutriCardContent, NutriCardContentValue, NutriCardContentType } from "./style";

interface PropsCard {
  type: string,
  value: number,
  icon: string,
  unit: string
}


/**
 * Creation calories card of user 
 * @param {*} param0 
 * @returns HTML element
 */
export const Card: React.FC<PropsCard> = ({ icon, type, value, unit }: any) => {
  const valueSemicolon = (data: string) => {
    const value = data.toString();

    if (value.length > 3) {
      return `${value.slice(0, 1)},${value.slice(1, 4)}`
    } else {
      return value
    }
  }

  return (
    <NutriCard>
      <NutriCardImgContent>
        <NutriCardImg src={icon} alt={type} />
      </NutriCardImgContent>
      <NutriCardContent>
        <NutriCardContentValue>{valueSemicolon(value)}{unit}</NutriCardContentValue>
        <NutriCardContentType>{type}</NutriCardContentType>
      </NutriCardContent>
    </NutriCard>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
}