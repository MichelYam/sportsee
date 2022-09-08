import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { ListCard } from '../../components/ListCard/ListCard';
import { ActivityDaily } from '../../components/charts/ActivityDaily/ActivityDaily';
import { AverageSessions } from '../../components/charts/AverrageSession/AverageSessions';
import { RadarPerf } from '../../components/charts/RadarPerf/RadarPerf';
import { Score } from '../../components/charts/Score/Score';

// styles
import { StyledDashboard, Content, Title, TitleSpan, MsgCongrat, Dashboard, DashBoardColumn, DashBoardBottom } from './style';
// Api
import { getDailyActivity, getUserInfo, getAverageSessions, getRadarPerformance } from '../../services/sportSeeApi'
import { UserModel, ActivityModel, PerformanceModel, SessionModel } from '../../services/interface';
// import { getDailyActivity, getUserInfo, getAverageSessions, getRadarPerformance } from '../../services/mock/mockApi'
interface ApiData {
    userInfo?: UserModel | undefined,
    userActivity?: ActivityModel | undefined,
    userSessions?: SessionModel | undefined,
    userPerf?: PerformanceModel | undefined,
}

/**
 * Creation dashboard page with all charts of user
 * @returns jsx element
 */
export const DashBoard: React.FC = () => {
    const { userId } = useParams<{ userId?: string }>();
    const [data, setData] = useState<ApiData | undefined>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const userInfo = await getUserInfo(userId as string);
                const userActivity = await getDailyActivity(userId as string);
                const userSessions = await getAverageSessions(userId as string);
                const userPerf = await getRadarPerformance(userId as string);

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

    console.log(data?.userActivity?.sessions)

    return (
        <StyledDashboard>
            <Header />
            <SideBar />
            <Content>
                {
                    error ? "API not working or user not found " : isLoading ? "Loading..." :
                        <>
                            <Title>Bonjour <TitleSpan>{!isLoading && data?.userInfo?.userInfos.firstName}</TitleSpan></Title>
                            <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                            <Dashboard>
                                <DashBoardColumn>
                                    <ActivityDaily data={data?.userActivity?.sessions} />
                                    <DashBoardBottom>
                                        <AverageSessions data={data?.userSessions} />
                                        <RadarPerf data={data?.userPerf} />
                                        <Score data={data?.userInfo} />
                                    </DashBoardBottom>
                                </DashBoardColumn>
                                <ListCard data={data?.userInfo?.keyData} />
                            </Dashboard>
                        </>
                }
            </Content>
        </StyledDashboard >
    )
}