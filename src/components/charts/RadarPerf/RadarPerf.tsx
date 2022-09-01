import React from 'react';

import PropTypes from 'prop-types';

import { StyledRadarPerf } from './style';

//API
import { useSportSeeAPi } from '../../../services/useSportSeeApi';

//Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function RadarPerf({ userId }) {

    const { data, isLoading, error } = useSportSeeAPi(`performance`, userId);

    let performance = data

    return (
        <>
            {isLoading || error ? "Loading... " :
                <StyledRadarPerf>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performance}>
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
            }
        </>
    )
}

RadarPerf.propTypes = {
    userId: PropTypes.string.isRequired,
}
