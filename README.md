# GS2026.1-Monitoramento-Espacial

Sistema Inteligente de Monitoramento de Missão Espacial

Descrição do Projeto

Este projeto foi desenvolvido para a Global Solution da disciplina de Pensamento Computacional, com foco no desenvolvimento de uma solução computacional para monitoramento de sistemas energéticos em uma missão espacial experimental.

O sistema simula e monitora informações operacionais da missão, analisando dados de temperatura, energia, comunicação e status dos módulos. A partir desses dados, são gerados alertas automáticos para auxiliar na identificação de situações críticas e na tomada de decisões operacionais.

---

Objetivo

Desenvolver uma plataforma capaz de:

* Monitorar dados simulados da missão espacial;
* Interpretar informações operacionais;
* Gerar alertas automáticos diante de situações críticas;
* Exibir os dados de forma clara e organizada;
* Aplicar conceitos de lógica de programação e tomada de decisão automatizada.

---

Funcionalidades

## 🌡️ Monitoramento de Temperatura

O sistema gera e exibe valores simulados de temperatura dos módulos da missão.

### Condição crítica:

* Temperatura superior a 80°C.

---

## 🔋 Monitoramento de Energia

Controla o nível de energia disponível para os sistemas da operação.

### Condição crítica:

* Energia inferior a 30%.

---

## 📡 Monitoramento de Comunicação

Simula a qualidade da comunicação entre os módulos da missão.

### Condição crítica:

* Comunicação inferior a 40%.

---

Status Operacional

Exibe o estado atual do módulo monitorado:

* OPERACIONAL
* ALERTA

---

Sistema de Alertas Inteligentes

O sistema gera automaticamente notificações quando identifica condições críticas.

Exemplos:

* 🔥 Temperatura crítica
* 🔋 Energia baixa
* 📡 Falha de comunicação

---

Tomada de Decisão Automatizada

A aplicação utiliza estruturas condicionais em JavaScript para analisar os dados e alterar automaticamente o status do módulo quando uma situação de risco é detectada.

---

Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* GitHub

---

Estrutura do Projeto


GS-Energia-Espacial/
│
├── index.html
├── style.css
├── script.js
├── README.md


---

Lógica Implementada

O sistema gera valores aleatórios para representar as condições da missão.

Após a geração dos dados, são realizadas verificações automáticas:


if (temperatura > 80) {
    alertas.push("🔥 Temperatura crítica!");
}

if (energia < 30) {
    alertas.push("🔋 Energia baixa!");
}

if (comunicacao < 40) {
    alertas.push("📡 Falha de comunicação!");
}


Caso alguma condição crítica seja encontrada, o status do módulo passa automaticamente para **ALERTA**.

---

Exemplo de Funcionamento


Temperatura: 92°C
Energia: 25%
Comunicação: 38%

ALERTAS:
🔥 Temperatura crítica!
🔋 Energia baixa!
📡 Falha de comunicação!

Status: ALERTA


---

Aplicação dos Conceitos da Disciplina

Durante o desenvolvimento do projeto foram aplicados os seguintes conceitos:

* Pensamento Computacional;
* Algoritmos;
* Estruturas Condicionais;
* Variáveis;
* Simulação de Dados;
* Tomada de Decisão Automatizada;
* Organização e Visualização de Informações.

---

Relação com Sustentabilidade e Energia

O monitoramento contínuo dos sistemas energéticos é essencial para garantir eficiência operacional e utilização adequada dos recursos disponíveis em missões espaciais.

A solução proposta permite identificar desperdícios, falhas operacionais e situações críticas, contribuindo para uma gestão mais sustentável da energia utilizada durante a missão.

---

Como Executar o Projeto

1. Faça o download ou clone o repositório:


git clone https://github.com/seu-usuario/seu-repositorio.git

2. Abra a pasta do projeto.

3. Execute o arquivo:

index.html

4. Clique em **Atualizar Dados** para simular novas condições operacionais da missão.


---

Integrantes

* Nome Completo do Integrante 1
* Nome Completo do Integrante 2
* Nome Completo do Integrante 3
* Nome Completo do Integrante 4

---

Conclusão

O projeto demonstra a aplicação prática dos conceitos de programação e monitoramento inteligente em um cenário de missão espacial experimental. A solução desenvolvida permite acompanhar informações operacionais importantes, identificar situações críticas automaticamente e fornecer suporte à tomada de decisões, contribuindo para maior segurança e eficiência da operação.
