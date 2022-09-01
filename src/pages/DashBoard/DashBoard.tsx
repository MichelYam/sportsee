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

import { StyledDashboard, Content, Title, TitleSpan, MsgCongrat, Dashboard, DashBoardColumn, DashBoardBottom } from './style';

//API
import { useSportSeeAPi } from '../../services/useSportSeeApi';

type DashboardParams = {
    id?: string;
};

/**
 * 
 * @returns 
 */
export default function DashBoard() {
    interface UserData {
        age: number,
        firstName: string,
        lastName: string,
    }
    const { id } = useParams<DashboardParams>();

    const { data, isLoading, error } = useSportSeeAPi("userInfo", id);

    let userData: UserData = {
        age: data.age,
        firstName: data.firstName,
        lastName: data.lastName,
    }
    return (
        <StyledDashboard>
            <Header />
            <SideBar />
            <Content>
                {
                    error ? "API not working" : isLoading ? "Loading..." :
                        <>
                            <Title>Bonjour <TitleSpan>{!isLoading && userData.firstName}</TitleSpan></Title>
                            <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                            <Dashboard>
                                <DashBoardColumn>
                                    <ActivityDaily userId={id} />
                                    <DashBoardBottom>
                                        <AverageSessions userId={id} />
                                        <RadarPerf userId={id} />
                                        <Score userId={id} />
                                    </DashBoardBottom>
                                </DashBoardColumn>
                                <ListCard userId={id} />
                            </Dashboard>
                        </>
                }
            </Content>
        </StyledDashboard >
    )
}