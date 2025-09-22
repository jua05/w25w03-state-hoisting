let count = 0;

const countEl = document.getElementById("count"); //13라인 id가 count인거가져와서 eliment로 씀
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function render() {//렌더 화면에 출력
    countEl.textContent = count;
}

incBtn.addEventListener("click", () => {
    count++;
    render();
});

decBtn.addEventListener("click", () => {
    count--;
    render();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    render();
});

render();
