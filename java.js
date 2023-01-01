function nappi(){
    let nappi = document.getElementById("box")
    let day = new Date()
    let month = day.getMonth()+1
    let name = document.getElementById("name").value
    let note = document.getElementById("note").value
    let time = day.getDate() +"."+ month +"." + day.getFullYear()

    const teksti = document.createElement("div")
    teksti.setAttribute("id", "juu")
    teksti.appendChild(document.createTextNode(time +" ("+ name +")" ))
    teksti.appendChild(document.createElement("br"))
    teksti.appendChild(document.createTextNode(note))
    document.getElementById("divi").appendChild(teksti)



    
    if (nappi.checked == true  ){
        teksti.setAttribute("class", "box")
        
    } else {
        teksti.setAttribute("class", "black")
    }

}

