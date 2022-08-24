import React from 'react';
import PropTypes from 'prop-types';

//Styled
import styled from 'styled-components';

//API
import { useSportSeeAPi, getDefaultActivities } from '../../services/useSportSeeApi';

//Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function RadarPerf({ userId }) {
    const { data, isLoading, error } = useSportSeeAPi(`http://localhost:3030/user/${userId}/performance`);
    
    let performance = data

    if (error || isLoading) {
        performance = getDefaultActivities();
    }
    return (
        <StyledRadarPerf>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performance}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: 24,
                        }} />
                    <PolarRadiusAxis axisLine={false} tick={false} />
                    <Radar dataKey="value"
                        fill="#ff0101"
                        fillOpacity={0.7}
                        stroke="transparent" />
                </RadarChart>
            </ResponsiveContainer>
        </StyledRadarPerf >
    )
}

RadarPerf.propTypes = {
    userId: PropTypes.string.isRequired,
}

const StyledRadarPerf = styled.div`
  width: 30%;
  height: 263px;
  border-radius: 5px;
  background-color: #282D30;
  overflow: hidden;
  padding: 9px;
  `;