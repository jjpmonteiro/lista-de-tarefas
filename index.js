let botaoAdd = document.getElementById("btn");
let input = document.getElementById("input-tarefa");
let tarefas = document.getElementById("tarefas");
let marcado = false;

botaoAdd.addEventListener("click", () => {
    if (input.value != '') { //VERIFICAR SE O CAMPO DE ADICIONAR TAREFAS ESTÁ VAZIO
        let tarefa = document.createElement("p"); //SE NÃO ESTÁ, CRIAR ELEMENTO DE PARÁGRAFO
        tarefas.appendChild(tarefa);
        tarefa.innerText = "- " + input.value;
        input.value = "";
        tarefa.addEventListener("click", () => {
            if (marcado == false) {
                tarefa.style.textDecoration = "line-through"
                marcado = true;
            }
            else {
                tarefa.style.textDecoration = "";
                marcado = false;
            }
        })

        tarefa.addEventListener("dblclick", () => {
            tarefas.removeChild(tarefa);
        })
    }
})