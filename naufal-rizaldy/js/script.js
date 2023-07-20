var umur = document.getElementById("umur");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(umur.value=='' || tinggi.value=='' || berat.value=='' || (pria.checked==false && wanita.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Isi semua data yang disediakan!`;

  }else if(umur.value<0 || umur.value==0){
    modal.style.display = "block";
    modalText.innerHTML = `Umur tidak boleh lebih kecil dari atau sama dengan 0!`;
  }
  else if(tinggi.value<0|| tinggi.value==0){
    modal.style.display = "block";
    modalText.innerHTML = `Tinggi tidak boleh lebih kecil dari atau sama dengan 0!`;
  }
  else if(berat.value<0|| berat.value==0){
    modal.style.display = "block";
    modalText.innerHTML = `berat tidak boleh lebih kecil dari atau sama dengan 0!`;
  } else countBmi()

}


function countBmi(){
  var p = [umur.value, tinggi.value, berat.value];
  if(pria.checked){
    p.push("pria");
  }else if(wanita.checked){
    p.push("wanita");
  }

  
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Ideal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Status berat badan anda <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
