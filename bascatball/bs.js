

function addValue(value, totalElementId) {
    const totalElement = document.getElementById(totalElementId);
    let currentTotal = parseInt(totalElement.textContent);

    // Add the button's value to the total and update the display
    currentTotal += value;
    totalElement.textContent = currentTotal;
}
const btnwin = document.getElementById('win');
btnwin.addEventListener('click' , function compareAndShowWinner(elementId1, elementId2) {
    const element1 = document.getElementById('total1');
    const element2 = document.getElementById('total2');
    const value1 = parseInt(element1.textContent);
    const value2 = parseInt(element2.textContent);

    if (value1 > value2) {
        document.getElementById('winner').textContent = "HOME WIN";
        document.getElementById('para1').style.backgroundColor = 'green';
        document.getElementById('para2').style.backgroundColor = 'red';
        document.getElementById('winner').style.paddingTop = '40px';
        document.getElementById('winner').style.paddingLeft = '60px';
        document.getElementById('winer').style.border = '4px dotted black';
        document.getElementById('winner').style.color = 'green';
        
    } else if (value2 > value1) {
        document.getElementById('winner').textContent = "guest WIN";
        document.getElementById('para2').style.backgroundColor = 'green';
        document.getElementById('para1').style.backgroundColor = 'red';
        document.getElementById('winner').style.paddingTop = '40px';
        document.getElementById('winner').style.paddingLeft = '60px';
        document.getElementById('winer').style.border = '4px dotted black';
        document.getElementById('winner').style.color = 'green';
        
    } else {
        document.getElementById('winner').textContent = 'enter a alue';
        document.getElementById('para2').style.backgroundColor = 'red';
        document.getElementById('para1').style.backgroundColor = 'red';
        document.getElementById('winer').style.backgroundColor = 'red';
        document.getElementById('winner').style.color = 'black';
        document.getElementById('winner').style.paddingTop = '40px';
    }
}
);
function resetGame() {
    // Reload the current page
    window.location.reload();
}






