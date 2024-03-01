import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Dragon Boat Festival", emoji: "🎏", date: "May" },
    { name: "Halloween", emoji: "🎃", date: "OctoberL" },
    { name: "Diiwali", emoji: "🪔", date: "OctoberE" },
    { name: "Christmas", emoji: "🎄", date: "December" },
    { name: "New Year's Day", emoji: "🎆", date: "January" }
];

const sortHolidaysAlphabetically = () => {
    holidays.sort((a, b) => a.name.localeCompare(b.name));
};

const nextHolidayAlphabetically = (currentHoliday: {
    name: unknown;
    emoji?: string;
}) => {
    sortHolidaysAlphabetically();
    const currentIndex = holidays.findIndex(
        (holiday) => holiday.name === currentHoliday.name
    );
    return holidays[(currentIndex + 1) % holidays.length];
};

const sortHolidaysByDate = () => {
    holidays.sort((a, b) => a.date.localeCompare(b.date));
};
const nextHolidayByYear = (currentHoliday: {
    name: unknown;
    emoji?: string;
}) => {
    sortHolidaysByDate();
    const currentIndex = holidays.findIndex(
        (holiday) => holiday.name === currentHoliday.name
    );
    return holidays[(currentIndex + 1) % holidays.length];
};
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    const handleAlphabetClick = () => {
        setCurrentHoliday(nextHolidayAlphabetically(currentHoliday));
    };

    const handleYearClick = () => {
        setCurrentHoliday(nextHolidayByYear(currentHoliday));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday.emoji}</div>
            <Button onClick={handleAlphabetClick}>Advance by Alphabet</Button>
            <Button onClick={handleYearClick}>Advance by Year</Button>
        </div>
    );
}
