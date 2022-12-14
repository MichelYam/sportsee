import React from 'react';
import PropTypes from 'prop-types';

//Recharts
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

//Styles
import { StyledAcitivtyDaily, TitleDailyActivity, CustomTooltipItem, CustomTooltipContainer } from './style';

/**
 * Creation chart of the daily activities of the user
 * @param {Object} param0 
 * @returns HTML Element
 */
export default function ActivityDaily({ data }) {
    return (
        <>
            {
                !data ? "Loading..." :
                    <StyledAcitivtyDaily>
                        <TitleDailyActivity>Activité quotidienne</TitleDailyActivity>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={1000} height={350} data={data}
                                margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
                                barGap={8}
                                barCategoryGap="35%"
                            >
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="day" dy={16} domain={["dataMin - 10", "dataMax + 2"]} style={{ fill: "#9B9EAC", fontSize: 14 }} />
                                <YAxis yAxisId="kg" dataKey="kilogram" orientation="right" domain={["dataMin - 1", "dataMax + 2"]} />
                                <YAxis yAxisId="cal" dataKey="calories" domain={[0, "dataMax + 150"]} hide={true} />
                                <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />}
                                    cursor={{
                                        fill: "rgba(0, 0, 0, 0.1)",
                                    }} />
                                <Legend verticalAlign="top" align='right' radius={[10, 10, 0, 0]} iconType={'circle'} iconSize={10} />
                                <Bar name="Poids (Kg)" yAxisId="kg" radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" maxBarSize={8} />
                                <Bar name="Calories brûlées (KCal)" yAxisId="cal" radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" maxBarSize={8} />
                            </BarChart>
                        </ResponsiveContainer>
                    </StyledAcitivtyDaily>
            }
        </>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <CustomTooltipContainer>
                <CustomTooltipItem>{`${payload[0].value} kg`}</CustomTooltipItem>
                <CustomTooltipItem>{`${payload[1].value} Kcal`}</CustomTooltipItem>
            </CustomTooltipContainer>
        );
    }
    return null;
};

ActivityDaily.propTypes = {
    data: PropTypes.array.isRequired,
}
