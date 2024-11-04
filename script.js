const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});

function typeWriter(id, text, speed, index_1, index_2) {
    if (index_2 < text[index_1].length) {
        document.getElementById(id).innerHTML += text[index_1][index_2];
        setTimeout(typeWriter, speed, id, text, speed, index_1, index_2 + 1);
    }
    else {
        if(text[index_1 +1] != null){
            document.getElementById(id).innerHTML += "<br>";
            setTimeout(typeWriter, speed, id, text, speed, index_1 + 1, 0);
        }
    }
}

typeWriter("typewriter_animation_1" , ["Hier finden Sie eine Auswahl meiner Projekte."], 15, 0, 0);