const Modal = {
  open() {
    // abrir o modal
    // add a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [{
  id: 1,
  description: 'Luz',
  amount: -50000,  // rack para numeros em valores de dinheiro
  date: '23/01/2021'
},
{
  id: 2,
  description: 'Website',
  amount: 500000,
  date: '23/01/2021'
},
{
  id: 3,
  description: 'Internet',
  amount: -20000,
  date: '23/01/2021'
}
]

/*
Preciso somar as entradas
Depois somar as saidas
Remover das entradas os valores da saida
Saber o total
 */

const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //somar as saidas
  },
  total() {

  }
}

/*
Preciso pegar as minhas 
transações do meu objeto aqui 
no javascript e colocar no html 
*/
const Dom = {
  
  innerHTMLTransaction() {
    const html = `
     <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
        <imgsrc="./assets/minus.svg"alt=
        "botão para remover transações"
          />
        </td>
      </tr>
    `
  }
}