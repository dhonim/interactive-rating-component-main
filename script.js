

const result=document.getElementById('result');
let current;
function switchDiv() {

    // Toggle visibility of div1 and div2
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    div1.classList.add('hidden');
    div2.classList.remove('hidden');
    result.innerText=current;

  }

  function changeColor(clickedDiv) {
    // Reset the color of all divs to normal
    const allDivs = document.querySelectorAll('.clickable');
    allDivs.forEach(div => div.classList.remove('selected'));

    // Set the color of the clicked div to selected
    clickedDiv.classList.add('selected');
    current=clickedDiv.innerText;
    // console.log(clickedDiv.innerText);
  }