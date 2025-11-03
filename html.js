const backBtn = document.getElementById('backBtn');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;


if (scrollValue >= 200 && scrollValue < 2500) {
backBtn.style.display = 'inline' ;
}

else {
  backBtn.style.display = 'none';
}
});





const hamburg = document.getElementById('hamburg');

const goback = document.getElementById('goback');

const navSp = document.getElementById('nav-sp');

hamburg.addEventListener('click', () =>{

  hamburg.style.display = 'none';
  navSp.style.display =  'inline';

});

goback.addEventListener('click', () => {

  navSp.style.display = 'none';
  hamburg.style.display = 'inline';
  
});

const navinfo = document.getElementById('navinfo');

navinfo.addEventListener('click', () =>{
  navSp.style.display = 'none';
  hamburg.style.display = 'inline';
})





