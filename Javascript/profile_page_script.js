if (window.location.pathname.includes('profile_page.html')) {
  document.getElementById('profile-link').classList.add('active');
}

function previewFile() {
    var preview = document.querySelector('img');
    var file  = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
   }