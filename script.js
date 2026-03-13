//alert("Tudo pronto para programar Sr. Vinicius!");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function cadastrar2(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    let novoUsuario = {nome: nome, idade: idade};

    if (nome === "", idade === ""){
        alert("Preencha todas as informações");
        return;
    }

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios()
}

function mostrarUsuarios(){
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    usuarios.forEach((usuario, index) => {
        let item = document.createElement("li");
        item.textContent = usuario.nome + " - " + usuario.idade + " anos ";

        let botao = document.createElement("button");
        botao.textContent = "Remover";

        botao.onclick = function(){
            removerUsuario(index);
        }

        item.appendChild(botao);
        lista.appendChild(item);
    });
}

function removerUsuario(index){
    usuarios.splice(index, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios();
}

mostrarUsuarios();