import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ListCard from '../components/ListCard'
// import { useSportSeeAPi } from '../services/useSportSeeApi';
import { getUserById } from "../services/mock/mockApi";
import AverageSessions from '../components/AverageSessions';
import ActivityDaily from '../components/ActivityDaily';
import RadarPerf from '../components/RadarPerf';
import Score from '../components/Score';

import styled from 'styled-components';

export default function DashBoard() {
    const { userId } = useParams();
    // const { data, isLoading } = useSportSeeAPi(`http://localhost:3030/user/${userId}`);
    const userDetail = getUserById(userId)
    // const firstName = data.data.userInfos.firstName
    return (
        <>
            <Header />
            <SideBar />
            <Content>
                <Title>Bonjour <TitleSpan>{userDetail.userInfos.firstName}</TitleSpan></Title>
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
            </Content>
        </>
    )
}

const Dashboard = styled.div`
width: 100%;
height: 100%;
padding: 10px;
display: flex;
gap: 50px;
border-radius: 5px;
`
const Content = styled.div`
margin: 100px 0 0 200px;
`
const Title = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 24px;
margin-bottom: 41px;
`

const TitleSpan = styled.span`
color: #FF0101;
`

const MsgCongrat = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
`

const DashBoardColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 64%;
height: 62vh;
`

const DashBoardBottom = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`