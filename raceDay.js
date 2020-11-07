let raceNumber = Math.floor(Math.random()*1000)

let earlyRegister = true;
let age = 25;

/*Early adults receive a race number at or above 1000.

Adults with late registration start at 11:00 am and receive the number at or above 1000.

Youth registants receive number below 1000 and start at 12:30 am.


*/
let runner = () => {
    if (earlyRegister && age >=18) {
        raceNumber+=1000;
        console.log('Your race starts at 9:30 am. Your racing number is: ' + raceNumber + '. Good luck with your race!')

    } else if (!earlyRegister && age >=18) {
        raceNumber+=1000;
        console.log('You are late with registration so you will begin race at 11:00 am. Your racing number is: ' + raceNumber + '. Good luck with your race!')
    
    } else if (age<=18) {
        console.log('Your racing number is: ' + raceNumber + '.And your starting time is 12:30 am. Good luck with your race!')
    }
}
runner();