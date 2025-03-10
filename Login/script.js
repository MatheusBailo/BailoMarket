
function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha ==="1234"){
        const user = {
            name:nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        }

        localStorage.setItem("usuario", JSON.stringify(user))

        window.location.href = "../Loja"

    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid  rgb(203, 45, 68)"
        document.getElementById("senha").style.border = "2px solid  rgb(203, 45, 68)"
    }

}

function fecharError(){
    document.getElementById("nome").style.border =  "2px solid rgb(96, 175, 193)"
    document.getElementById("senha").style.border =  "2px solid rgb(96, 175, 193)"
    document.getElementById("error-modal").style.display = "none"   
}
function showPassword(){
    var inputSenha = document.querySelector("#senha")
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
    
}