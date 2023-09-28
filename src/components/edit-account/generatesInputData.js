export const genChangePass= arr =>{
    const arrData = arr.map((i, index) => {
        return {
            type: "password",
            placeholder: i,
            name: i,
            id: index
        }
    })
    return arrData
}
export const genMainInf = obj =>{
    const arrData = Object.keys(obj).map((i, index) => {
        return {
            name: i,
            label: i,
            value: obj[i],
            id: "0" + index
        }
    })
    return arrData
}