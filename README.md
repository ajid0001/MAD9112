# Oyindamola_Ajide_FinalProject

```
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

```

```
let numbers = [0, 23, 12, 15, 20, 30];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum / numbers.length);
```


![ios](images/Screenshot%202023-12-12%20at%2011.45.23%20AM.png)
![parallel](images/Screenshot%202023-12-12%20at%2011.45.29%20AM.png)
![android](images/Screenshot%202023-12-12%20at%2012.02.45%20PM.png)


