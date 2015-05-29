setTimeout(function(){
  var scene    = document.getElementById('background');
  var parallax = new Parallax(scene);

  scene    = document.getElementById('container');
  parallax = new Parallax(scene);

  document.getElementById('container').classList.add('show');
}, 3000);
