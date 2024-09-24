function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)  // Converte o valor do input em número
        let c = 1
        tab.innerHTML = ``  // Limpa o conteúdo anterior
        for (let c = 1; c <= 10; c++) {  
            let item = document.createElement("option")  // Cria um novo item <option>
            item.text = `${n} x ${c} = ${n * c}` 
            item.value = `tab ${c}`
            tab.appendChild(item)  // Adiciona o item à lista (select)
        }

    }
}
