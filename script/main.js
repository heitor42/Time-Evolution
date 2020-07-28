class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.question = 0;
        this.reset();
        this.print(this.times);
                
    }

    runKeyFunction(e) {
        const keyPressed = e.code
        const keyboardFunctions = {
            // StartStopWithSpaceKey
            Space() {
                if (stopwatch.running) {
                    stopwatch.saveResult();
                    stopwatch.start();
                } else {
                    stopwatch.start();
                }
            }
        };

        const keyFunction = keyboardFunctions[keyPressed]
        if (keyFunction){ keyFunction()}
    }

    reset() {
        this.times = [0, 0, 0];
    }

    start() {
        this.time = !this.time ? performance.now() : this.time;
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }

    saveResult() {
        let times = this.times;
        if (times[0] === 0 && times[1] === 0) return;
        let li = document.createElement('li');
        this.question += 1;
        li.innerText = `Questão ${this.question} - ${this.format(times)}`;
        this.results.appendChild(li);
        this.zero()
    }

    clear() {
        this.question = 0
        clearChildren(this.results);
    }

    zero() {
        this.reset();
        this.time = null;
        this.running = false;
        this.print()
    }

    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    }

    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100ms
        this.times[2] += diff / 10;
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times[0], 2)}:${pad0(times[1], 2)}`;
    }  
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function clearChildren(node) {
    while (node.lastChild)
        node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results')
)

document.addEventListener("keydown", (stopwatch.runKeyFunction));