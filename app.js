const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const resetbutton = document.querySelector('#reset')
const p2display = document.querySelector('#p2display');
const playrange = document.querySelector('#playrange');





let p1score = 0;
let p2score = 0;
let winScore = 5;
let isgameover = false;

p1button.addEventListener('click', function () {
    if (!isgameover) {
        if (p1score !== winScore) {
            p1score += 1;
            if (p1score === winScore) {
                isgameover = true;
                p1display.classList.add('has-text-success');
                p2display.classList.add('has-text-danger');
                p1button.disabled = true;
                p2button.dissabled = true;


            }
            p1display.textContent = p1score;
        }
    }
})

playrange.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();

})

p2button.addEventListener('click', function () {
    if (!isgameover) {
        if (p2score !== winScore) {
            p2score += 1;
            if (p2score === winScore) {

                isgameover = true;
                p2display.classList.add('has-text-success');
                p1display.classList.add('has-text-danger');
                p1button.disabled = true;
                p2button.dissabled = true;
            }
            p2display.textContent = p2score;
        }
    }
})

resetbutton.addEventListener('click', reset)

function reset() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.dissabled = false;

}