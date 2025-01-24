
let avarageLightlevel: number = 0;


const lightCalibrate: () => number = () =>{
    let normalLight: number = 0;
const count: number = 10;

for (let i: number = 0; i < count; i += 1)
{
    normalLight += input.lightLevel();
    basic.pause(50)
}
    return normalLight / count

}

input.onButtonPressed(Button.AB, function() {
    basic.pause(500)
    avarageLightlevel = lightCalibrate()
})

avarageLightlevel = lightCalibrate()
const mainCycle: () => void = () =>{    
    let proximity: number = 0;

proximity = input.lightLevel();
console.logValue("light level", proximity)

basic.pause(45)
};

basic.forever(mainCycle)

input.lightLevel()