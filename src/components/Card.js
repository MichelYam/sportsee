// import PropTypes from "prop-types";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DATA_BY_TYPE = {
  Calories: {
    icon: "../assets/logo/calorie-icon.png",
    bgColor: "rgba(255, 0, 0, 0.1)",
    unit: "kCal"
  },
  Glucides: {
    icon: "../assets/logo/carbohydrate-icon.png",
    bgColor: "rgba(253, 204, 12, 0.1)",
    unit: "g"
  },
  Proteines: {
    icon: "../assets/logo/protein-icon.png",
    bgColor: "rgba(74, 184, 255, 0.1)",
    unit: "g"
  },
  Lipides: {
    icon: "../assets/logo/lipid-icon.png",
    bgColor: "rgba(253, 81, 129, 0.1)",
    unit: "g"
  }
}

export default function Card({ type, value }) {
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
        <NutriCardImg src={DATA_BY_TYPE[type].icon} alt={type} />
      </NutriCardImgContent>
      <NutriCardContent>
        <NutriCardContentValue>{valueSemicolon(value)}{DATA_BY_TYPE[type].unit}</NutriCardContentValue>
        <NutriCardContentType>{type}</NutriCardContentType>
      </NutriCardContent>
    </NutriCard>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
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