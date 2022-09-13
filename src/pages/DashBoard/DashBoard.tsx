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
// import { getDailyActivity, getUserInfo, getAverageSessions, getRadarPerformance } from '../../services/sportSeeApi'
import { getDailyActivity, getUserInfo, getAverageSessions, getRadarPerformance } from '../../services/mock/mockApi'

import { UserModel, ActivityModel, PerformanceModel, SessionModel } from '../../services/interface';

interface ApiData {
    userInfo?: UserModel,
    userActivity?: ActivityModel,
    userSessions?: SessionModel,
    userPerf?: PerformanceModel,
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
    const [codeError, setCodeError] = useState("");

    const processError = (codeError: string) => {
        setCodeError(codeError);
        setError(true);
        console.log(codeError);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const userInfo = await getUserInfo(userId!, processError);
                const userActivity = await getDailyActivity(userId!, processError);
                const userSessions = await getAverageSessions(userId!, processError);
                const userPerf = await getRadarPerformance(userId!, processError);

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
                    codeError === "probleme_data" && error ? "User not found" : error ? "API not working" : isLoading ? "Loading..." :
                        <>
                            <Title>Bonjour <TitleSpan>{!isLoading && data?.userInfo?.userInfos.firstName}</TitleSpan></Title>
                            <MsgCongrat>Félicitation ! Vous avez explosé vos objectifs hier 👏</MsgCongrat>
                            <Dashboard>
                                <DashBoardColumn>
                                    <ActivityDaily data={data?.userActivity?.sessions} />
                                    <DashBoardBottom>
                                        <AverageSessions data={data?.userSessions?.sessions} />
                                        <RadarPerf data={data?.userPerf?.data} />
                                        <Score data={data?.userInfo?.todayScore} />
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