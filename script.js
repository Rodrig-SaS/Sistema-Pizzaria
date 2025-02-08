function validarLogin() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    
    if (nome && telefone && endereco && email) {
        localStorage.setItem('usuario', JSON.stringify({ nome, telefone, endereco, email }));
        window.location.href = 'pedido.html';
    } else {
        alert('Preencha todos os campos!');
    }
}

function calcularTotal() {
    let tamanho = document.getElementById("tamanho");
    let sabor = document.getElementById("sabor");
    let quantidade = document.getElementById("quantidade").value;

    let precoTamanho = parseFloat(tamanho.options[tamanho.selectedIndex].getAttribute("data-preco"));
    let precoSabor = parseFloat(sabor.options[sabor.selectedIndex].getAttribute("data-preco"));

    let total = (precoTamanho + precoSabor) * quantidade;

    document.getElementById("total").innerText = total.toFixed(2);
}

function finalizarPedido() {
    let tamanho = document.getElementById("tamanho").value;
    let sabor = document.getElementById("sabor").value;
    let quantidade = document.getElementById("quantidade").value;
    let total = document.getElementById("total").innerText;

    alert(`Pedido realizado!\n\nTamanho: ${tamanho}\nSabor: ${sabor}\nQuantidade: ${quantidade}\nTotal: R$${total}`);
}
