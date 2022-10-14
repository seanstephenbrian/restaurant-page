const printDate = () => {

    const today = new Date();

    const day = today.getDate();

    let month = today.getMonth() + 1;
    if (month === 1) {
        month ='ianuarius';
    } else if (month === 2) {
        month = 'februarius';
    } else if (month === 3) {
        month = 'martius';
    } else if (month === 4) {
        month = 'aprilis';
    } else if (month === 5) {
        month = 'maius';
    } else if (month === 6) {
        month = 'iunius';
    } else if (month === 7) {
        month = 'iulius';
    } else if (month === 8) {
        month = 'augustus';
    } else if (month === 9) {
        month = 'september';
    } else if (month === 10) {
        month = 'october';
    } else if (month === 11) {
        month = 'november';
    } else if (month === 12) {
        month = 'december';
    }

    const year = today.getFullYear() - 1500 + ' A.D.';

    return `${day} ${month}, ${year}`;
};

export default printDate;