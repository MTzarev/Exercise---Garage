function garage(input) {
    let garageInfo = {};

    // Process input and store garage information
    for (let info of input) {
        let [garageNum, carInfo] = info.split(' - ');
        if (!garageInfo.hasOwnProperty(garageNum)) {
            garageInfo[garageNum] = [];
        }
        garageInfo[garageNum].push(carInfo);
    }

    // Print garage information
    for (let garageNum in garageInfo) {
        console.log(`Garage № ${garageNum}`);
        for (let carInfo of garageInfo[garageNum]) {
            let attributes = carInfo.split(', ').map(attribute => attribute.replace(':', ' -')).join(', ');
            console.log(`--- ${attributes}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol']);
