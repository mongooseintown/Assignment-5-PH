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