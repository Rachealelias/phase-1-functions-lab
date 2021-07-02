//const headQuaters = 42
function distanceFromHqInBlocks(block){
if (block > 42){
        return block - 42;
    }else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(feet){
    if (feet > 42){
        return (feet - 42) * 264;
    }else {
        return (42 - feet) * 264;
    }

}

function distanceTravelledInFeet(blk1 ,blk2){
    if (blk1 > blk2){
        return (blk1 - blk2) * 264;
    }else {
        return (blk2 - blk1) * 264;
    }

}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    console.log(distance);

    if (distance <= 400){
        return 0; 
    }else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400)
        
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else if (distance  >= 2500){
        return 'cannot travel that far'
    }
        
    
}