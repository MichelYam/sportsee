import React, { createContext } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ListCard from '../../components/ListCard/ListCard';
import ActivityDaily from '../../components/charts/ActivityDaily/ActivityDaily';
import AverageSessions from '../../components/charts/AverrageSession/AverageSessions';
import RadarPerf from '../../components/charts/RadarPerf/RadarPerf';
import Score from '../../components/charts/Score/Score';

import { StyledDashboard, Content, Title, TitleSpan, MsgCongrat, Dashboard, DashBoardColumn, DashBoardBottom } from './style.js';

//API
import { useSportSeeAPi } from '../../services/useSportSeeApi';

/**
 * 
 * @returns 
 */

 export const UserContext = createContext('Unknown');

export default function DashBoard() {
    const { userId } = useParams();
    const { data, isLoading, error } = useSportSeeAPi("userInfo", userId);

    return (
        <UserContext.Provider value={userId}>
            <StyledDashboard>
                <Header />
                <SideBar />
                <Content>
                    {
                        error ? "Utilisateur introuvable" : isLoading ? "Loading..." :
                            <>
                                <Title>Bonjour <TitleSpan>{!isLoading && data.firstName}</TitleSpan></Title>
                                <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                                <Dashboard>
                                    <DashBoardColumn>
                                        <ActivityDaily />
                                        <DashBoardBottom>
                                            <AverageSessions userId={userId} />
                                            <RadarPerf userId={userId} />
                                            <Score userId={userId} />
                                        </DashBoardBottom>
                                    </DashBoardColumn>
                                    <ListCard userId={userId} />
                                </Dashboard>
                            </>
                    }
                </Content>
            </StyledDashboard >
        </UserContext.Provider>
    )
}

// const StyledDashboard = styled.div`
// `;

// const Dashboard = styled.div`
// padding: 10px;
// display: flex;
// gap: 50px;
// border-radius: 5px;
// `;

// const Content = styled.div`
// margin: 60px 0 0 180px;
// max-width: 1440px;
// `;

// const Title = styled.h2`
// font-family: 'Roboto';
// font-style: normal;
// font-weight: 500;
// font-size: 48px;
// line-height: 24px;
// margin-bottom: 41px;
// `;

// const TitleSpan = styled.span`
// color: #FF0101;
// `;

// const MsgCongrat = styled.p`
// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 24px;
// `;

// const DashBoardColumn = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// width: 64%;
// height: 62vh;
// `;

// const DashBoardBottom = styled.div`
// display: flex;
// width: 100%;
// justify-content: space-between;
// `;