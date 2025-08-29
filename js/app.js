const hamburger_bars_icon = document.getElementById('hamburgerBarsIcon');
// console.log(hamburger_bars_icon);
hamburger_bars_icon.addEventListener('click',function(){
    const hamburger_section = document.getElementById('hamburgerSection');
    hamburger_section.style.right = '0';
    hamburger_section.style.display = 'block';
})

const hamburger_cross_mark = document.getElementById('hamburgerCrossMark');
hamburger_cross_mark.addEventListener('click',function(){
    const hamburger_section = document.getElementById('hamburgerSection');
    hamburger_section.style.right = '100%';
    hamburger_section.style.display = 'hidden';
})

// Calling function works from here
const callBtn = document.querySelectorAll('.call-btn');
const historyList = document.querySelector('ul');
for (let i=0;i<callBtn.length;i++)
{
    callBtn[i].addEventListener('click',function(){
        const name = this.getAttribute('data-name');
        const number = this.getAttribute('data-number');
        const time = new Date().toLocaleTimeString();
        const li = document.createElement('li');
        li.className = 'p-[16px] flex justify-between items-center bg-[#FAFAFA] rounded-[8px]';
        const leftDiv = document.createElement('div');
        const nameP = document.createElement('p');
        nameP.className = 'h font-semibold text-[16px] text-[#111111]';
        nameP.innerText = name;
        const numberP = document.createElement("p");
        numberP.className = "r text-[14px] text-[#5C5C5C]";
        numberP.innerText = number;
        leftDiv.appendChild(nameP);
        leftDiv.appendChild(numberP);
        const timeSpan = document.createElement("span");
        timeSpan.className = "r text-[14px] text-[#5C5C5C]";
        timeSpan.innerText = time;
        li.appendChild(leftDiv);
        li.appendChild(timeSpan);
        historyList.insertBefore(li, historyList.firstChild);
    })
}
// Calling function ends from here