export function isPeselValid(pesel){
    const weight = [9,7,3,1,9,7,3,1,9,7];
    let sum = 0;
    for (let i =1;i<weight.length;i++) {
        sum+=(parseInt(pesel.substring(i,i+1),10)*weight[i]);
    }
    sum=sum%10;
    const control = parseInt(pesel.substring(10,11),10);
    return (sum === control)
}
export function getPeselDate(pesel){
    let year = parseInt(pesel.substring(0,2),10);
    let month = parseInt(pesel.substring(2,4),10)-1;
    let day = parseInt(pesel.substring(4,6),10);
    let yearofbirth;
    if (month >= 80) {
        yearofbirth = 1800 + year;
        year += 1800;
        month = month-80;
    }
    else if (month >= 60) {
        yearofbirth = 2200 + year;
        year+=2200;
        month = month-60;
    }
    else if (month >= 40) {
        yearofbirth = 2100 + year;
        year+=2100;
    month = month-40;
    }
    else if (month >= 20) {
        yearofbirth = 2000 + year;
        year+=2000;
        month = month-20;
    }
    else {
        yearofbirth = 1900 + year;
        year+=1900;
    }
    let sex = 'Kobieta';
    if(parseInt(pesel.substring(9,10),10) % 2 === 1){
        sex = 'Mężczyzna';
    } 
        return {
            sex: sex,
            yearofbirth: yearofbirth,
            day: day,
            month: month,
            year: year
         }
}
