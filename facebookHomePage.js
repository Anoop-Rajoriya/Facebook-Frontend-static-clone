

const navMainButtons = document.querySelectorAll(".sec2 button");
navMainButtons[0].style.borderColor = 'blue'

navMainButtons.forEach((button,index)=>{

    button.addEventListener('click',()=>{
        for(let i=0; i<4; i++){
            if(i===index){
                navMainButtons[i].style.borderColor = 'blue';
                buttonClickTask(index);
            }else{
                navMainButtons[i].style.borderColor = 'transparent';
            }
        }
    })
})

function buttonClickTask (buttonclickd) {
    if(3===buttonclickd){
        document.querySelector("#maindivsec0").style.display = "inline-block"
        document.querySelector("#maindivsec0").style.width = 100+"%";
        document.querySelector("#maindivsec1").style.display = "none";
        document.querySelector("#maindivsec2").style.display = "none";
    }
    if(0===buttonclickd){
        document.querySelector("#maindivsec1").style.display = "flex";
        document.querySelector("#maindivsec2").style.display = "inline-block";
        if(screen.width < 1100){
            document.querySelector("#maindivsec0").style.display = "none"
        }
    }
}

