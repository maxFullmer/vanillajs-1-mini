console.log('hello world');

let count = 0;
let counter = document.getElementById("counter");

function increase() {
    // increase the count feature
    count++;
    counter.innerHTML = count;
    console.log('Increased count: ', count)
}

function decrease() {
    // decrease the count feature
    count--;
    counter.innerHTML = count;
    console.log('Decreased count: ', count)
}

function reset() {
    // Reassign count to zero
    count = 0;

    counter.innerHTML = "<mark>" + count + "<mark>";

    // Template String version
    // '<mark>${count}</mark'
    console.log('Reset count: ', count)
}

function selectTheme(theme) {
    // dynamically setting class name for each tag
    let body = document.getElementsByTagName("body")[0].className = theme;
    console.log(body);
    
    let main = document.getElementsByTagName("main")[0].className = theme;
    console.log(main);

    const buttons = document.getElementsByTagName("button");
    console.log(buttons);

    for (let i =0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}