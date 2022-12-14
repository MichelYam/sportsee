import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { StyledRadarPerf } from './style';

//Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * Creation chart of the user performance
 * @param {object} param0 
 * @returns HTML Element
 */
export default function RadarPerf({ data }) {
    return (
        <StyledRadarPerf>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data.data}>
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
    data: PropTypes.object.isRequired,
}

