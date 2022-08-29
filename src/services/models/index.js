//Models
export const userModel = (data) => {
    console.log()
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
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