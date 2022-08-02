export const handlePesel = (value, pesel) => {
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
export function pesel(pesel){
    let year = parseInt(pesel.substring(0,2),10);
    let month = parseInt(pesel.substring(2,4),10)-1;
    let day = parseInt(pesel.substring(4,6),10);
    if (month >= 80) {
        year += 1800;
        month = month-80;
    }
    else if (month >= 60) {
        year+=2200;
        month = month-60;
    }
    else if (month >= 40) {
        year+=2100;
    month = month-40;
    }
    else if (month >= 20) {
        year+=2000;
        month = month-20;
    }
    else {
        year+=1900;
    }
    const dayofbirth = new Date();
    dayofbirth.setFullYear(year,month,day);
    let sex = 'Kobieta';
    if(parseInt(pesel.substring(9,10),10) % 2 === 1){
        sex = 'Mężczyzna';
    } 
    const weight = [9,7,3,1,9,7,3,1,9,7];
    let sum = 0;
    for (let i =1;i<weight.length;i++) {
        sum+=(parseInt(pesel.substring(i,i+1),10)*weight[i]);
    }
    sum=sum%10;
    const control = parseInt(pesel.substring(10,11),10);
    let corectness = (sum === control);
    if(corectness){
        return {
            dayofbirth: dayofbirth,
            sex: sex
         }
    }
    else {
        
    }
}
