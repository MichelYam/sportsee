import React, { useEffect } from 'react';

import styled from 'styled-components';

import { getRadarPerformance, getLabel } from "../services/mock/mockApi";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function RadarPerf({ userId }) {
    const data = getRadarPerformance(userId)
    const dataWithLabel = getLabel(data)
    const dataReverse = [...dataWithLabel].reverse()
    return (
        <StyledRadarPerf>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="80%" data={dataReverse}>
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
        </StyledRadarPerf>
    )
}

const StyledRadarPerf = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #282D30;
  overflow: hidden;
  padding: 9px;
  `;