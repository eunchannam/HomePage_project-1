var bar = document.querySelector('#bar');
var contents = document.querySelector('.contents');
var sns = document.querySelector('.sns');

bar.addEventListener('click', controlShow);

function controlShow(){

  if (contents.id === 'show'){
    contents.style.display = "none";
    sns.style.display = "none";
    contents.id = 'none';
  }
  else {
    contents.style.display = "flex";
    sns.style.display = "block";
    contents.id = 'show';
  }
}
