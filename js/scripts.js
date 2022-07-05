// ========================== SLIDES ==========================

let slideIndex = 0;
        showSlides();
        
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 4000); // Change image every 2 seconds
        }

// ========================== DISABLE BOTÕES ========================== //

const a = document.querySelector("#plantao");

const now = new Date(); //Método javascript para trabalhar com datas
let holyday = false; //Variável para dias que forem feriado (padrão sempre é false)

let noon = [8, 9, 10, 11]; //Horário da manhã para domingos e feriados
let afternoon = [13, 14, 15, 16]; // Horário da tarde para sábados, domingos e feriados
let night = [18, 19, 20, 21]; // horário noturto padrão para todos os dias,

//Domingo/Feriado
if(now.getDay() == 0 || holyday){ // Valida se é domingo ou se a variável holyday é true
  if((noon.includes(now.getHours()) || afternoon.includes(now.getHours()) || night.includes(now.getHours()))){ //Valida se a hora atual está nos horários definidos
    document.getElementById("plantao").style.visibility = 'visible';//Caso a validação anterior for verdadeira, o elemento que tem id plantao receberá false no campo disabled e o botão fica attivo
  }else{
    document.getElementById("plantao").style.visibility = "hidden"; //Caso a validação antetrior for falsa, o elemento recebe true, deixando o botão inativo
  }
}

//Semana
if((now.getDay() > 0 && now.getDay() < 6) && !holyday){ //Valida se é entre segunda e sexta e não é feriado
  if(night.includes(now.getHours())){
    document.getElementById("plantao").style.visibility = 'visible';
  }else{
    document.getElementById("plantao").style.visibility = "hidden";
  }
}

//Sabado
if((now.getDay() == 6) && !holyday){ //Valida se é sabado e não é feriado
  if(afternoon.includes(now.getHours()) || night.includes(now.getHours())){ 
    document.getElementById("plantao").style.visibility = 'visible';
  }else{
    document.getElementById("plantao").disabled = true;
  }
}
// ==========================  ==========================