import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampDayJs = dayjs(timestampMs);
    const nowDayJs = dayjs();
    
    return {
        seconds: getSeconds(nowDayJs, timestampDayJs),
        minutes: getMinutes(nowDayJs, timestampDayJs),
        hours: getHours(nowDayJs, timestampDayJs),
        days: getDays(nowDayJs, timestampDayJs),
    }
}

function getSeconds(nowDayJs, timestampDayJs){
    const seconds = timestampDayJs.diff(nowDayJs, 'seconds') % 60;
    return seconds;
}

function getMinutes(nowDayJs, timestampDayJs){
    const minutes = timestampDayJs.diff(nowDayJs, 'minutes') % 60;
    return minutes;
}

function getHours(nowDayJs, timestampDayJs){
    const hours = timestampDayJs.diff(nowDayJs, 'hours') % 24;
    return hours;
}

function getDays(nowDayJs, timestampDayJs){
    const days = timestampDayJs.diff(nowDayJs, 'days');
    return days;
}