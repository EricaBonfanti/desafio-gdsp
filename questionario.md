# Questionário desafio gdsp frontend

## I. CRIAÇÃO E EXIBAÇÃO DAS TAREFAS
### Ao adicionar uma nova tarefa, quais partes do código são responsáveis por armazenar essa informação e quais são responsáveis por exibi-la na tela?

1. Primeiro para armazenar, foi necessario Criar ARRAY para guardar registro das tarefas: let task = []; LINHA 10. <br/>
    Segundo, foi criado o tdText, onde pega os valores do input: const tdText = tdInput.value.trim();  LINHA 17 <br/>
    E para armazenar as informações foi utilizado: task.push(tdText), LINHA 23<br/>
    e também mostra no console do navegador com as arrays: console.log(task); LINHA 24
   <br/>
   <br/>
2. Para exibi-las na tela, precisa manipular o DOM. <br/>
Um novo elemento de lista deve ser criado: const li = document.createElement('li'); LINHA 27 <br/>
O texto (tdText) é juntado com li para ser um conteúdo do li: li.textContent = tdText; LINHA 28 <br/>
Também é criado o botão de delete para remover o novo textojuntamente com li: const deleteButton = document.createElement("button"); LINHA 31 <br/>
O texto dentro do botão de delete "x" foi adcionado: deleteButton.textContent = 'X'; LINHA 32 <br/>
Juntamente com o css para o botão, foi adicionado: deleteButton.classList.add('X'); LINHA 33 <br/>
O botão é criado como "filho" do li li: li.appendChild(deleteButton); LINHA 24 <br/>
Assim o li + o botão são adicionados dentro do ul, com o td-list: tdList.appendChild(li); LINHA 58 <br/>
Isso torna as tarefas visíveis.
    

---

## II. ITERAÇÃO DA LISTA
### Na hora de montar a lista de tarefas na tela, qual método você utilizou
para percorrer as tarefas existentes? Você ficou em dúvida entre outro método?

1. Não utilizei um método especifico pois a lista é criada conforme o usuário adiciona novas tarefas. <br/>
Cada tarefa é criada e adcionada ao DOM dentro da função: addTdItem. <br/>
Porém pensei em utilizar o forEach, mas não achei necessário. <br/>


---

## III. IDENTIFICAÇÃO DO ITEM REMOVIDO
### Quando o usuário clica em “Remover”, como o código sabe exatamente
qual tarefa deve ser removida? Explique a estratégia que você usou.
 
 1. Para remover uma tarefa especifica eu utilizei o Splice, antes tentei remover com pop, porém o pop só remove o último elemento e percebi que não daria certo. Então criei const APAGAR para apagar o item especifico. <br/>
Adcionei evento no li para remover tarefa ao clicar no deleteButton <br/>
deleteButton.addEventListener('click', function() {<br/>
 Remove tarefa (tdList) do DOM <br/>
tdList.removeChild(li);<br/>
o indexOf acha a posição que foi escrita. <br/>
const apagar = task.indexOf(tdText);<br/>
 if (apagar > -1) {<br/>
     task.splice(apagar, 1);<br/>
 }<br/>
console.log(task);<br/>
});<br/>
        

---

## VI. VALIDAÇÃO DE ENTRADA
### Em que momento você valida se o usuário não está salvando uma tarefa vazia? Como fez essa validação?

   1. Quando é escrito um testo para a tarefa o:addTdItem é executada.<br/>
    if (tdText !== '') { LINHA 20 <br/>
    }
    antes foi removido espaços brancos com o .trim: const tdText = tdInput.value.trim(); LINHA 17.<br/>
     se no tdText a string for vazia,tdText !== '' será falsa, entao o if não será executado.<br/>
 
---

## V. DIFICULDADES OU EXTRAS
### Você encontrou alguma dificuldade durante o desenvolvimento do desafioImplementou alguma funcionalidade extra em relação aos requisitos? Sentiu necessidase de utilizar algum recurso extra, como uma biblioteca?
 
 1. Implementei as tarefas concluídas, onde ao clicar nelas, elas ficam com um background diferente.    </br>
        li.addEventListener('click', function() { <br/>
            li.classList.toggle('finish'); <br/>
        }); LINHA 37 <br/>
        <br/>
        Utilizei uma biblioteca que é a font awesome para adcionar o ícone + no botão de adcionar uma tarefa. https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.cs <br/>

        Aliás encontrei dificuldade para executar os códigos em JS, pois tenho um conhecimento básico. Então, quando a proposta do desafio foi feita, comecei a realizar alguns cursos de js como: Curso em vídeo e também um curso de js do professor Professor Edson Maia, onde eles me ajudaram muito neste processo. Este desafio me ajudou a evoluir e com isto, concluo que pretendo continuar com os cursos e me aprofundando para melhorar cada vez mais.
        
---
