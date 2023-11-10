function funcaoAdd() {
    let taskInserida = document.getElementById("inserir").value;
    let divLista = document.getElementById("divLista");

    //ul.innerHTML = `<li class="adicionado">${taskInserida}</li>`;
    let div = document.createElement("div");
    let addLista = document.createElement("p");
    addLista.textContent = taskInserida;
    let btnApagar = document.createElement("button");
    btnApagar.textContent = "Apagar";
    btnApagar.onclick = function() {
        addLista.remove();
        btnApagar.remove();
        div.remove();
    };
    div.appendChild(addLista);
    div.appendChild(btnApagar);
    divLista.appendChild(div);
}