function saklar() {

    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");
    let toggle3 = document.getElementById("toggle3");
    let toggle4 = document.getElementById("toggle4");
    let toggle5 = document.getElementById("toggle5");
    let toggle6 = document.getElementById("toggle6");
    let toggle7 = document.getElementById("toggle7");
    let toggle8 = document.getElementById("toggle8");
    let toggle9 = document.getElementById("toggle9");
    let toggle0 = document.getElementById("toggle0");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif"  
    } else {
        lampu1.src = "assets/images/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif"  
    } else {
        lampu2.src = "assets/images/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif"  
    } else {
        lampu3.src = "assets/images/off.gif"
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif"  
    } else {
        lampu4.src = "assets/images/off.gif"
    }

    if (toggle5.checked) {
        lampu5.src = "assets/images/on.gif"  
    } else {
        lampu5.src = "assets/images/off.gif"
    }

    if (toggle6.checked) {
        lampu6.src = "assets/images/on.gif"  
    } else {
        lampu6.src = "assets/images/off.gif"
    }

    if (toggle7.checked) {
        lampu7.src = "assets/images/on.gif"  
    } else {
        lampu7.src = "assets/images/off.gif"
    }

    if (toggle8.checked) {
        lampuX.src = "assets/images/on.gif"  
    } else {
        lampuX.src = "assets/images/off.gif"
    }

    if (toggle9.checked) {
        lampu8.src = "assets/images/on.gif"  
    } else {
        lampu8.src = "assets/images/off.gif"
    }

    if (toggle0.checked) {
        lampu9.src = "assets/images/on.gif"  
    } else {
        lampu9.src = "assets/images/off.gif"
    }

    if (toggle1.checked && toggle2.checked && toggle3.checked && toggle4.checked) {
        ruang1.checked = true
    } else {
        ruang1.checked = false
    }
    
    if (toggle5.checked && toggle6.checked && toggle7.checked) {
        ruang2.checked = true
    } else {
        ruang2.checked = false
    }
    
    if (toggle8.checked) {
        ruang3.checked = true
    } else {
        ruang3.checked = false
    }
    
    if (toggle9.checked && toggle0.checked) {
        ruang4.checked = true
    } else {
        ruang4.checked = false
    }
}

function rSaklar1() {
    let ruang1 = document.getElementById("ruang1");
    let ruang2 = document.getElementById("ruang2");
    let ruang3 = document.getElementById("ruang3");
    let ruang4 = document.getElementById("ruang4");

    if (ruang1.checked) {
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        toggle4.checked = true
        lampu1.src = "assets/images/on.gif"
        lampu2.src = "assets/images/on.gif"
        lampu3.src = "assets/images/on.gif"
        lampu4.src = "assets/images/on.gif"
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        toggle4.checked = false
        lampu1.src = "assets/images/off.gif"
        lampu2.src = "assets/images/off.gif"
        lampu3.src = "assets/images/off.gif"
        lampu4.src = "assets/images/off.gif"
    }
}

function rSaklar2() {
    if (ruang2.checked) {
        toggle5.checked = true
        toggle6.checked = true
        toggle7.checked = true
        lampu5.src = "assets/images/on.gif"
        lampu6.src = "assets/images/on.gif"
        lampu7.src = "assets/images/on.gif"
    } else {
        toggle5.checked = false
        toggle6.checked = false
        toggle7.checked = false
        lampu5.src = "assets/images/off.gif"
        lampu6.src = "assets/images/off.gif"
        lampu7.src = "assets/images/off.gif"
    }
}

function rSaklar3() {
    if (ruang3.checked) {
        toggle8.checked = true
        lampuX.src = "assets/images/on.gif"
    } else {
        toggle8.checked = false
        lampuX.src = "assets/images/off.gif"
    }    
}

function rSaklar4() {
    if (ruang4.checked) {
        toggle9.checked = true
        toggle0.checked = true
        lampu8.src = "assets/images/on.gif"
        lampu9.src = "assets/images/on.gif"
    } else {
        toggle9.checked = false
        toggle0.checked = false
        lampu8.src = "assets/images/off.gif"
        lampu9.src = "assets/images/off.gif"
    }
}