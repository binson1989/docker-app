let array = [1, 2, 3];

let currentIndex = 0;

function run() {
    do {
        let item = array[currentIndex];

        mark(item);

        if (skipped) {
            continue;
        }

        doSomeWork(item);

        //go to next
        currentIndex++;
    } while (currentIndex < array.length);
}

function skip() {
    //go to next item
    currentIndex++;
}

function redoLast() {
    //go back to previous item
    currentIndex--;
}

