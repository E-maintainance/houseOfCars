let content = document.getElementsByTagName('body');
let darkMode =document.getElementsByI('dark-change');
darkMode.addEventListener('click',function(){
  darkMode.classlist.toggle('checkbox');
  content.classList.toggle('check');
});

