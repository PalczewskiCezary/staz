const handlePesel = (value, pesel) => {
    let year = parseInt(pesel.substring(0,2),10);
    let month = parseInt(pesel.substring(2,4),10)-1;
    let day = parseInt(pesel.substring(4,6),10);
    if (month > 12) {
        yearofbirth = 2000 + year;
    }
    else {
        yearofbirth = 1900 + year;
    }
    if (month > 12) {
        year = 2022 - (2000 + year);
        month = month - 20;
    }
    else {
        year = 2022 - (1900 + year);
    }
    console.log(value)
    return {
        yearofbirth: yearofbirth,
        year: year,
        month: month,
        day: day
    }
}