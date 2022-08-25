function oblicz(){
    var height = document.getElementById('height').value;
    var mass = document.getElementById('mass').value;

    var result = document.getElementById('result');
    var resultdiv = document.getElementById('resultdiv');

    var info = document.getElementById('info');

   var bmi = parseFloat(mass/(height/100*height/100)).toFixed(2);

   if(bmi<16){
       resultdiv.style.border = '1px solid rgb(0, 0, 255, 0.55)';
       info.style.border = '1px solid rgb(0, 0, 255, 0.55)';

    info.innerHTML="Wychodzi na to, że masz niedowagę... Ryzyko chorób towarzyszących otyłości jest minimalne, ale zwiększony jest poziom wystąpienia innych problemów zdrowotnych";
    result.innerHTML=bmi+' - wygłodzenie';
    }
    else if(bmi<=16.99){
        resultdiv.style.border = '1px solid rgb(0, 0, 255, 0.35)';
        info.style.border = '1px solid rgb(0, 0, 255, 0.35)';

        info.innerHTML="Wychodzi na to, że masz niedowagę... Ryzyko chorób towarzyszących otyłości jest minimalne, ale zwiększony jest poziom wystąpienia innych problemów zdrowotnych";
        result.innerHTML=bmi+' - wychudzenie';
    }
    else if(bmi<=18.49){
        resultdiv.style.border = '1px solid rgb(0, 0, 255, 0.25)';
        info.style.border = '1px solid rgb(0, 0, 255, 0.25)';

        info.innerHTML="Wychodzi na to, że masz niedowagę... Ryzyko chorób towarzyszących otyłości jest minimalne, ale zwiększony jest poziom wystąpienia innych problemów zdrowotnych";
        result.innerHTML=bmi+' - niedowaga';
    }
    else if(bmi<=24.99){
        resultdiv.style.border = '1px solid rgb(0, 255, 0, 0.35)';
        info.style.border = '1px solid rgb(0, 255, 0, 0.35)';

        info.innerHTML="Wychodzi na to, że masz twoja masa jest w pożądku... Gratulacje, ryzyko chorób towarzyszących otyłości jest minimalne";
        result.innerHTML=bmi+' - optimum';
    }
    else if(bmi<=29.99){
        resultdiv.style.border = '1px solid rgb(255, 255, 0)';
        info.style.border = '1px solid rgb(255, 255, 0)';

        info.innerHTML="Wychodzi na to, że masz twoja masa jest w nadwadze... Ryzyko chorób towarzyszących otyłości jest średnie";
        result.innerHTML=bmi+' - nadwaga';
    }
    else if(bmi<=34.99){
        resultdiv.style.border = '1px solid rgb(255, 0, 0, 0.30)';
        info.style.border = '1px solid rgb(255, 0, 0, 0.30)';

        info.innerHTML="Wychodzi na to, że masz otyłość I stopnia... Gratulacje, ryzyko chorób towarzyszących otyłości jest na wysokim poziomie.";
        result.innerHTML=bmi+' - otyłość I';
    }
    else if(bmi<=39.99){
        resultdiv.style.border = '1px solid rgb(255, 0, 0, 0.35)';
        info.style.border = '1px solid rgb(255, 0, 0, 0.35)';

        info.innerHTML="Wychodzi na to, że masz otyłość II stopnia... Gratulacje, ryzyko chorób towarzyszących otyłości jest na bardzo wysokim poziomie.";
        result.innerHTML=bmi+' - otyłość II';
    }
    else if(bmi>=40){
        resultdiv.style.border = '1px solid rgb(255, 0, 0, 0.45)';
        info.style.border = '1px solid rgb(255, 0, 0, 0.45)';

        info.innerHTML="Wychodzi na to, że masz otyłość III stopnia... Gratulacje, ryzyko chorób towarzyszących otyłości jest na ekstremalnie wysokim poziomie. Żyjesz na krawędzi przetrwania";
        result.innerHTML=bmi+' - otyłość III';
    }

}

function changebtn(){
    var button = document.getElementById('button');
    if(button.innerHTML.startsWith("Rozwiń")){
        button.innerHTML = 'Zwiń listę <i class="icon-up-open"></i>';
    }
    else{
        button.innerHTML = 'Rozwiń listę <i class="icon-down-open"></i>';
    }
}
