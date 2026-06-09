<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Monitoramento Espacial</title>
    <link rel="stylesheet" href="style.css">
</head>

<style>
    body{
    font-family: Arial, sans-serif;
    text-align: center;
    background: #0b1020;
    color: white;
}

.painel{
    background: #1a2240;
    padding: 20px;
    width: 400px;
    margin: auto;
    border-radius: 10px;
}

button{
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
}

#alertas{
    margin-top: 20px;
    font-size: 18px;
}
</style>
<body>

    <h1> Sistema Inteligente de Monitoramento Espacial</h1>

    <div class="painel">
        <p> Temperatura: <span id="temperatura">0</span> °C</p>
        <p> Energia: <span id="energia">0</span>%</p>
        <p> Comunicação: <span id="comunicacao">0</span>%</p>
        <p> Status do Módulo: <span id="status">OK</span></p>
    </div>

    <button onclick="gerarDados()">
        Atualizar Dados
    </button>

    <h2>Alertas</h2>
    <div id="alertas"></div>

    <script>
        function gerarDados() {

    let temperatura = Math.floor(Math.random() * 120);
    let energia = Math.floor(Math.random() * 101);
    let comunicacao = Math.floor(Math.random() * 101);

    document.getElementById("temperatura").innerText = temperatura;
    document.getElementById("energia").innerText = energia;
    document.getElementById("comunicacao").innerText = comunicacao;

    let alertas = [];
    let status = "OPERACIONAL";

    if (temperatura > 80) {
        alertas.push("🔥 Temperatura crítica!");
    }

    if (energia < 30) {
        alertas.push("🔋 Energia baixa!");
    }

    if (comunicacao < 40) {
        alertas.push("📡 Falha de comunicação!");
    }

    if (
        temperatura > 80 ||
        energia < 30 ||
        comunicacao < 40
    ) {
        status = "ALERTA";
    }

    document.getElementById("status").innerText = status;

    if (alertas.length === 0) {
        document.getElementById("alertas").innerHTML =
            "✅ Todos os sistemas funcionando normalmente.";
    } else {
        document.getElementById("alertas").innerHTML =
            alertas.join("<br>");
    }
}
    </script>
</body>
</html>
