const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    //   console.log(counter);
    counter.innerHTML = 0;

const updateCounter = () => {
    const targetCount = +counter.getAttribute('data-target')
    //console.log(targetCount);
    const startingCount = Number(counter.innerHTML);

    const incr = targetCount / 10;

    if(startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter, 100);
    }else{
        counter.innerHTML = targetCount;
    }
}

    updateCounter();
});

//If we get string in console how to convert in number by using +