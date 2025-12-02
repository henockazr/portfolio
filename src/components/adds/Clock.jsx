import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Clock = () => {
    const [bandungTime, setBandungTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = moment().tz('Asia/Jakarta').format('HH:mm dddd, Do MMMM YYYY');
            setBandungTime(currentTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return bandungTime;
};

export default Clock;