import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

// eslint-disable-next-line react-refresh/only-export-components
const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalTimeId = setInterval(() => {
            const currentTime = moment().tz('Asia/Jakarta').format('HH:mm dddd');
            setTime(currentTime);
        }, 1000);

        return () => clearInterval(intervalTimeId);
    }, []);

    return time;
};

// eslint-disable-next-line react-refresh/only-export-components
const Date = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const intervalDateId = setInterval(() => {
            const currentDate = moment().tz('Asia/Jakarta').format('Do');
            setDate(currentDate);
        }, 1000);

        return () => clearInterval(intervalDateId);
    }, []);

    return date;
};

const Month = () => {
    const [month, setMonth] = useState('');

    useEffect(() => {
        const intervalMonthId = setInterval(() => {
            const currentMonth = moment().tz('Asia/Jakarta').format('MMMM');
            setMonth(currentMonth);
        }, 1000);

        return () => clearInterval(intervalMonthId);
    }, []);

    return month;
};

const Year = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        const intervalYearId = setInterval(() => {
            const currentYear = moment().tz('Asia/Jakarta').format('YYYY');
            setYear(currentYear);
        }, 1000);

        return () => clearInterval(intervalYearId);
    }, []);

    return year;
};

export {Time, Date, Month, Year};