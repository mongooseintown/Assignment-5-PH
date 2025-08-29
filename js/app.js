const hamburger_bars_icon = document.getElementById('hamburgerBarsIcon');
hamburger_bars_icon.addEventListener('click', function () {
    const hamburger_section = document.getElementById('hamburgerSection');
    hamburger_section.style.right = '0';
    hamburger_section.style.display = 'block';
})

const hamburger_cross_mark = document.getElementById('hamburgerCrossMark');
hamburger_cross_mark.addEventListener('click', function () {
    const hamburger_section = document.getElementById('hamburgerSection');
    hamburger_section.style.right = '100%';
    hamburger_section.style.display = 'none';
})

let coins = 100;
function callCoinUpdate() {
    const coinCollect = document.querySelector('.coin');
    coinCollect.innerHTML = coins;

    const hCoinCollect = document.querySelector('.hcoin');
    hCoinCollect.innerHTML = coins;
}

callCoinUpdate();

const callBtn = document.querySelectorAll('.call-btn');
const historyList = document.querySelector('ul');
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const number = this.getAttribute('data-number');
        const time = new Date().toLocaleTimeString();
        if (coins >= 20) {
            const choice = confirm("Do you want to call " + name + " (" + number + ")?");
            if (choice) {
                coins -= 20;
                callCoinUpdate();
                const li = document.createElement('li');
                li.className = 'p-[16px] flex justify-between items-center bg-[#FAFAFA] rounded-[8px]';
                const leftDiv = document.createElement('div');
                const nameP = document.createElement('p');
                nameP.className = 'h font-normal text-[18px] text-[#111111]';
                nameP.innerText = name;
                const numberP = document.createElement("p");
                numberP.className = "h font-normal text-[18px] text-[#5C5C5C] mt-4px";
                numberP.innerText = number;
                leftDiv.appendChild(nameP);
                leftDiv.appendChild(numberP);
                const timeSpan = document.createElement("span");
                timeSpan.className = "h font-normal text-[18px] text-[#111111]";
                timeSpan.innerText = time;
                li.appendChild(leftDiv);
                li.appendChild(timeSpan);
                historyList.insertBefore(li, historyList.firstChild);
            }
            else {
                alert("Call cancelled");
            }
        }
        else {
            alert("You don't have enough coins to make a call!");
        }
    })
}

// Functionality of CLEAR-BUTTON
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', function () {
    historyList.innerHTML = '';
})

// Functionality of HEART
const heartIcons = document.querySelectorAll('.fa-heart');
let hearts = 0;
function updateHeartNumber() {
    const mainHeartNumber = document.querySelector('.main-heart-number');
    mainHeartNumber.innerText = hearts;
    const hamburgerHeartNumber = document.querySelector('.h-main-heart-number');
    hamburgerHeartNumber.innerText = hearts;
}
for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener('click', function () {
        hearts++;
        updateHeartNumber();
    });
}

// Functionality of COPY-BUTTON
const copyBtns = document.querySelectorAll('.cpy-btn');
let copies = 0;
function updateCopyNumber()
{
    const mainCopyNumber = document.querySelector('.copyShow');
    mainCopyNumber.innerText = copies;
    const hamburgerCopyNumber = document.querySelector('.hCopyShow');
    hamburgerCopyNumber.innerText = copies;
}
for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', function () {
        const card = this.closest('.crd');
        const name = card.querySelector('.name').innerText;
        const number = card.querySelector('.number').innerText;
        alert(name + " (" + number + ") copied!");
        copies++;
        updateCopyNumber();
    });
}