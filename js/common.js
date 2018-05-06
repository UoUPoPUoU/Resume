(function () {
  const nav = document.getElementsByClassName('nav')[0],
        navLi = nav.getElementsByTagName('li'),
        tabDiv = document.getElementsByClassName('tab'),
        btn = document.getElementsByClassName("nav-btn")[0],
        body = document.body,
        navBox = document.getElementsByClassName("nav-box")[0];
    for (var i = 0; i < navLi.length; i++) {
      navLi[i].index = i;
      navLi[i].onclick = function () {
        for (var j = 0; j < tabDiv.length; j++) {
            tabDiv[j].classList.remove("act");
            navLi[j].classList.remove("act");
        }
       
        tabDiv[this.index].classList.add("act");
        navLi[this.index].classList.add("act");
      }
  }
  btn.onclick = function () {
         btn.classList.toggle("on");
         navBox.classList.toggle("act");
         body.classList.toggle("act");
    }
  navBox.onclick = function () {
    btn.classList.toggle("on");
    navBox.classList.toggle("act");
    body.classList.toggle("act");
  }



})(); 
