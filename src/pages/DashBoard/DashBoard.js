import React from 'react';
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
export default function DashBoard() {
    const { userId } = useParams();

    const { data, isLoading, error } = useSportSeeAPi("userInfo", userId);
    // const performance = getPerfomrmance(data);
    // const ActivityDaily = getActivities(data);
    // const acitivtySession = getPerfomrmance(data);
    // const performance = getPerfomrmance(data);
    return (
        <StyledDashboard>
            <Header />
            <SideBar />
            <Content>
                {
                    error ? "API not working or user not found " : isLoading ? "Loading..." :
                        <>
                            <Title>Bonjour <TitleSpan>{!isLoading && data.userInfos.firstName}</TitleSpan></Title>
                            <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                            <Dashboard>
                                <DashBoardColumn>
                                    <ActivityDaily userId={userId} />
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
    )
}