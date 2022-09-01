// styles

import styled from "styled-components";

export const DashBoardNutri = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width: 1100px){
    flex-direction: row;
    gap: 20px;
    justify-content: left;
    flex-wrap: wrap;
}
`;
