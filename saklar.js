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
        let togglea = document.getElementById("togglea");

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
            lampu8.src = "assets/images/on.gif"  
        } else {
            lampu8.src = "assets/images/off.gif"
        }
    
        if (toggle9.checked) {
            lampu9.src = "assets/images/on.gif"  
        } else {
            lampu9.src = "assets/images/off.gif"
        } 
    
        if (togglea.checked) {
            lampua.src = "assets/images/on.gif"   
        } else {
            lampua.src = "assets/images/off.gif"
        }
    
        // UNTUK TOGGLE RUANGAN
    
        if (toggle1.checked && toggle2.checked && toggle3.checked) {
            ruang1.checked = true
        } else {
            ruang1.checked = false
        }
    
        if (toggle5.checked && toggle6.checked) {
            ruang2.checked = true
        } else {
            ruang2.checked = false
        }
    
        if (toggle7.checked && toggle8.checked && toggle9.checked && togglea.checked) {
            ruang3.checked = true
        } else {
            ruang3.checked = false
        }
    }
    
    function rSaklar1() {
        
        let ruang1 = document.getElementById("ruang1");
        let ruang2 = document.getElementById("ruang2");
        let ruang3 = document.getElementById("ruang3");
        
        
        if (ruang1.checked) {
            toggle1.checked = true
            toggle2.checked = true
            toggle3.checked = true
            lampu1.src = "assets/images/on.gif"  
            lampu2.src = "assets/images/on.gif"  
            lampu3.src = "assets/images/on.gif"  
        } else {
            toggle1.checked = false
            toggle2.checked = false
            toggle3.checked = false
            lampu1.src = "assets/images/off.gif"
            lampu2.src = "assets/images/off.gif"
            lampu3.src = "assets/images/off.gif"
        }
    
    }
    
    function rSaklar2() {
        if (ruang2.checked) {
            toggle5.checked = true
            toggle6.checked = true
            lampu5.src = "assets/images/on.gif"  
            lampu6.src = "assets/images/on.gif"  
        } else {
            toggle5.checked = false
            toggle6.checked = false
            lampu5.src = "assets/images/off.gif"
            lampu6.src = "assets/images/off.gif"
        }
    
    }
    
    function rSaklar3() {
        if (ruang3.checked) {
            toggle7.checked = true
            toggle8.checked = true
            toggle9.checked = true
            togglea.checked = true
            lampu7.src = "assets/images/on.gif"  
            lampu8.src = "assets/images/on.gif"  
            lampu9.src = "assets/images/on.gif"  
            lampua.src = "assets/images/on.gif"  
        } else {
            toggle7.checked = false
            toggle8.checked = false
            toggle9.checked = false
            togglea.checked = false
            lampu7.src = "assets/images/off.gif"
            lampu8.src = "assets/images/off.gif"
            lampu9.src = "assets/images/off.gif"
            lampua.src = "assets/images/off.gif"
        }
    }
