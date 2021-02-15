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

const transactions = [
  {
    description: "Luz",
    amount: -50001, // rack para numeros em valores de dinheiro
    date: "23/01/2021",
  },
  {
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {

    description: "Internet",
    amount: -20012,
    date: "23/01/2021",
  },
  {
    description: "App",
    amount: 200000,
    date: "23/01/2021",
  },
];

const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction);
    app.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1)

    app.reload()
  },

  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });

    return income;
  },

  expenses() {
    let expense = 0;

    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });

    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();

    return "em casa";
  },
};

const Dom = {
  transactionContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = Dom.innerHTMLTransaction(transaction);

    Dom.transactionContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const Cssclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${Cssclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
        <imgsrc="./assets/minus.svg"alt=
        "botão para remover transações"
          />
        </td>
    `;
    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    Dom.transactionContainer.innerHTML = ""
  }
};

/*
função para formatar os numeros como moeda brasileira */
const Utils = {
  formatAmount(value) {
    value = Number(value) * 100
   
    return value
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const Form = {
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValue() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value
    }
  },
  
  validateFields() {
    const { description, amount, date } = Form.getValue()
   
    if( description.trim() === "" || 
        amount.trim() === "" || 
        date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos!")
    } 
  },

  formatValues() {
    let { description, amount, date } = Form.getValue()

    amount = Utils.formatAmount(amount)
  },

  submit(event) {
    event.preventDefault()

    try {
      //Form.validateFields()

     Form.formatValues()

    } catch (error) {
      alert(error.message)

    }

  }
};

const app = {
  init() {
    Transaction.all.forEach (transaction => {
      Dom.addTransaction(transaction);
    }) 

    Dom.updateBalance();

  },    

  reload() {
    Dom.clearTransactions()
    app.init()
  },
};

app.init()







