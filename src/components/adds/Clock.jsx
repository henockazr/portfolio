import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

// eslint-disable-next-line react-refresh/only-export-components
const Day = () => {
    const [day, setDay] = useState('');

    useEffect(() => {
        const intervalDayId = setInterval(() => {
            const currentDay = moment().tz('Asia/Jakarta').format('HH:mm dddd');
            setDay(currentDay);
        }, 1000);

        return () => clearInterval(intervalDayId);
    }, []);

    return day;
};

// eslint-disable-next-line react-refresh/only-export-components
const Date = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const intervalDateId = setInterval(() => {
            const currentDate = moment().tz('Asia/Jakarta').format('Do MMMM YYYY');
            setDate(currentDate);
        }, 1000);

        return () => clearInterval(intervalDateId);
    }, []);

    return date;
};

export {Day, Date};