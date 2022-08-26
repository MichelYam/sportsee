import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Card({ type, value, icon, unit }) {
  const valueSemicolon = (data) => {
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

const NutriCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 258px;
  background-color: #FBFBFB;
  padding: 30px
`;

const NutriCardImgContent = styled.div`
  width: 60px;
  height: 60px;
`;

const NutriCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NutriCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px
`;
const NutriCardContentValue = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #282D30;
`;
const NutriCardContentType = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(116, 121, 140, 1);
`