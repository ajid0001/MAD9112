
function getDaysUntilChristmas(){
    const today = new Date();

    xmas = today.getFullYear();
    // console.log(xmas)

    if (today.getMonth() == 11 && today.getDate() > 25) {
        xmas = xmas + 1;
    }

    let christmasDate = new Date(xmas, 11, 25);

    let day = 1000 * 60 * 60 * 24;

    let remainingDays = Math.ceil(
    (christmasDate.getTime() - today.getTime()) / (day)
    );
    console.log(remainingDays)

    return remainingDays
};

getDaysUntilChristmas()