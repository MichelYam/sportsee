//Models
export const userModel = (data) => {
    return {
        // id: data.id,
        // keyData: {
        //     calorieCount: data.keyData.calorieCount,
        //     carbohydrateCount: data.keyData.carbohydrateCount,
        //     lipidCount: data.keyData.lipidCount,
        //     proteinCount: data.keyData.proteinCount,
        // },
        // todayScore: data.todayScore?? data?.score,
        // userInfo: {
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     age: data.age,
        // }
    }
}

export const userKeyDataModel = (data) => {
    console.log(data.calorieCount)
    return {
        calorieCount: data.calorieCount,
        proteinCount: data.proteinCount,
        carbohydrateCount: data.carbohydrateCount,
        lipidCount: data.lipidCount,
    }
}

export const activitiesModel = (data) =>{
    return {

    }
}

//perf

//sessions

//acitivty