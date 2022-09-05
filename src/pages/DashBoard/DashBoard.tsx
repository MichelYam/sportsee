import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ListCard from '../../components/ListCard/ListCard';
import ActivityDaily from '../../components/charts/ActivityDaily/ActivityDaily';
import AverageSessions from '../../components/charts/AverrageSession/AverageSessions';
import RadarPerf from '../../components/charts/RadarPerf/RadarPerf';
import Score from '../../components/charts/Score/Score';

// styles
import { StyledDashboard, Content, Title, TitleSpan, MsgCongrat, Dashboard, DashBoardColumn, DashBoardBottom } from './style';


import { getDailyActivity, getUserInfo, getAverageSessions, getRadarPerformance } from '../../services/sportSeeApi'

/**
 * Creation dashboard page with all charts of user
 * @returns jsx element
 */
export default function DashBoard() {
    const { userId } = useParams();

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const userInfo = await getUserInfo("userInfo", userId);
                const userActivity = await getDailyActivity("activity", userId);
                const userSessions = await getAverageSessions("average-sessions", userId);
                const userPerf = await getRadarPerformance("performance", userId);
                if (!userInfo && !userActivity && !userSessions && !userPerf) {
                    console.log("test")
                }

                setData({ userInfo, userActivity, userSessions, userPerf });

            } catch (error) {
                console.log(error)
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }

        getData();
    }, [userId])

    return (
        <StyledDashboard>
            <Header />
            <SideBar />
            <Content>
                {
                    error ? "API not working or user not found " : isLoading ? "Loading..." :
                        <>
                            <Title>Bonjour <TitleSpan>{!isLoading && data.userInfo.userInfos.firstName}</TitleSpan></Title>
                            <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                            <Dashboard>
                                <DashBoardColumn>
                                    <ActivityDaily data={data.userActivity.sessions} />
                                    <DashBoardBottom>
                                        <AverageSessions data={data.userSessions} />
                                        <RadarPerf data={data.userPerf} />
                                        <Score data={data.userInfo} />
                                    </DashBoardBottom>
                                </DashBoardColumn>
                                <ListCard data={data.userInfo} />
                            </Dashboard>
                        </>
                }
            </Content>
        </StyledDashboard >
    )
}