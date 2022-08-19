import { useEffect, useState } from "react";

const activityTitleFR = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
};
/**
 * extract data from SportSee API
 * @param {*} url 
 * @returns 
 */
export const useSportSeeAPi = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return
        const services = url.split('/')[5] ? url.split('/')[5] : "userInfo"
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const newData = await getData(services, data);
                setData(newData);

            } catch (error) {
                console.log(error);
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [url])

    return { data, isLoading, error }
}

const getData = (services, data) => {
    switch (services) {
        case "activity":
            return getDailyActivity(data.data);
        case "average-sessions":
            return averageSessions(data.data.sessions);
        case "performance":
            return getRadarPerformance(data.data.data);
        case "userInfo":
            return getUserInfo(data);
        default:
            console.error(`${services} not found`);
    }
}

const getDailyActivity = (data) => {
    if (data) {
        const dailyActivity = [];

        for (let item of data.sessions) {

            const [dd] = item.day.split("-");

            dailyActivity.push({
                day: `${dd}`,
                kilogram: item.kilogram,
                calories: item.calories,
            });
        }
        return dailyActivity;
    }
}

const averageSessions = (data) => {
    const newData = data.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }))
    return newData
}


const getRadarPerformance = (data) => {
    const newArr = [];
    for (let kind of Object.keys(activityTitleFR)) {
        for (let item of data) {
            if (item.kind.toString() === kind) {
                newArr.push({
                    kind: activityTitleFR[kind],
                    value: item.value
                })
            }
        }
    }

    return reverseData(newArr);
}
const reverseData = (data) => {
    return [...data].reverse()
}

const getUserInfo = (data) => {
    return data.data
}



export const getDefaultKeyData = () => {
    return {
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0,
    };
};