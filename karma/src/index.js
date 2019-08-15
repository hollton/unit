function timeFormat(second){
    if(second < 60) {
        return `${second}秒`
    } else if (second < 3600) {
        let minute = parseInt(second / 60)
        return `${minute}分钟${second % 60}秒`
    } else {
        let hour = parseInt(second / 3600)
        let minute = parseInt(second / 60 % 60)
        return `${hour}小时${minute}分钟${second % 60}秒`
    }
}

export {
    timeFormat
}