const isValidArray = (arr) => Array.isArray(arr)

const getArrayLength = (arr) => {
    return isValidArray(arr) ? arr.length : 0
}

const getFlattenArray = (arr, depth) => {
    if (!isValidArray(arr)) {
        throw("Error invalid array")
    } else if (getArrayLength(arr) <= 0) {
        throw("Error array length is 0")
    } else {
        return arr.flat(depth)
    }
}

module.exports = { 
    isValidArray,
    getArrayLength,
    getFlattenArray,
}