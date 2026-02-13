//-Érica Bonfanti Corrêa

// Selecionar DOM / criando const 
const tdForm = document.getElementById('td-form');
const tdInput = document.getElementById('td-input');
const tdList = document.getElementById('td-list');


// Criar ARRAY para guardar na li
let task = [];

// Add novo evento
function addTdItem(event) {
    event.preventDefault();

    // Pega o valor do input e tira os espaços
    const tdText = tdInput.value.trim();

    // Verifica se o input ta vazio, se não estiver roda o if
    if (tdText !== '') {
        
        // guardando as tarefas no array e mostrando no console
        task.push(tdText);
        console.log(task);
        
        // Criando evento li
        const li = document.createElement('li');
        li.textContent = tdText;

        // Remover tarefa do li com botão X
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('X');
        li.appendChild(deleteButton);


        // Adicionando evento no li para completar tarefa
        li.addEventListener('click', function() {
            li.classList.toggle('finish');

        });

        // Adicionando evento no li para remover tarefa
        deleteButton.addEventListener('click', function() {
            // Remove tarefa DOM
            tdList.removeChild(li);

            const apagar = task.indexOf(tdText);
            if (apagar > -1) {
                task.splice(apagar, 1);
            }
            console.log(task);

        });
        
    

        // Adicionando a tarefa à lista
        tdList.appendChild(li);

        // No final, limpa o input
        tdInput.value = '';
    }
}

// Processa os dados do tdForm sem recarregar a página
tdForm.addEventListener('submit', addTdItem);