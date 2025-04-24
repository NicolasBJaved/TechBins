// RECUPERANDO OS CANVAS
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
const ctx5 = document.getElementById('myChart5');

// VARIAVÉIS
const borderColorMaiorNivel = '#f1c40f';
const backgroundColorMaiorNivel = '#f1c40f';
const borderColorMenorNivel = '#2ecc71';
const backgroundColorMenorNivel = '#2ecc71';
const borderWidth = 2;
const label = 'Nível do lixo';
Chart.defaults.color = '#000'; /* --> Cor da fonte */

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            min: 0,
            max: 5,
            ticks: {
                stepSize: 1
            }
        }
    }
};

// MAIOR NÍVEL
var dadosRuaAMaiorNivel = {
    type: 'bar',
    data: {
        labels: ['Rua A', 'Rua C', 'Rua E'],
        datasets: [{
            label: label,
            data: [4, 5, 4],
            borderWidth: borderWidth,
            borderColor: borderColorMaiorNivel,
            backgroundColor: backgroundColorMaiorNivel
        }]
    },
    options: options
};

var dadosMaiorNivelSeteDias = [4, 5, 4];
var dadosMaiorNivelMes = [5, 4, 5];
var dadosMaiorNivelBimestre = [3, 4, 5];
var dadosMaiorNivelSemestre = [2, 3, 4];
var dadosMaiorNivelAno = [5, 5, 4];


// MENOR NÍVEL
var dadosMenorNivel = {
    type: 'bar',
    data: {
        labels: ['Rua B', 'Rua D', 'Rua F'],
        datasets: [{
            label: label,
            data: [1, 1, 2],
            borderWidth: borderWidth,
            borderColor: borderColorMenorNivel,
            backgroundColor: backgroundColorMenorNivel
        }]
    },
    options: options
};

var dadosMenorNivelSeteDias = [1, 1, 2];
var dadosMenorNivelMes = [2, 1, 2];
var dadosMenorNivelBimestre = [1, 2, 2];
var dadosMenorNivelSemestre = [2, 2, 1];
var dadosMenorNivelAno = [1, 2, 1];

// GRÁFICO ESPECÍFICO
var dadosRuaAEspecifico = {
    type: 'line',
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: label,
            data: [3, 4, 4, 3],
            borderColor: '#8e44ad',
            backgroundColor: '#8e44ad',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: options
};

// Rua A
var medianaRuaAmes = [3, 4, 4, 3];
var medianaRuaAbimestre = [4, 4, 3, 4, 3, 4, 3, 4];
var medianaRuaAsemestre = [3, 4, 4, 4, 3, 4];
var medianaRuaAano = [4, 4, 4, 3, 3, 4];

// Rua B
var medianaRuaBmes = [2, 3, 3, 2];
var medianaRuaBbimestre = [2, 2, 3, 3, 2, 2, 3, 3];
var medianaRuaBsemestre = [3, 3, 2, 3, 2, 2];
var medianaRuaBano = [2, 2, 3, 3, 2, 3];

// Rua C
var medianaRuaCmes = [3, 3, 4, 3];
var medianaRuaCbimestre = [4, 4, 3, 3, 3, 3, 4, 4];
var medianaRuaCsemestre = [3, 3, 4, 4, 3, 3];
var medianaRuaCano = [4, 3, 3, 4, 3, 3];

// Rua D
var medianaRuaDmes = [3, 2, 3, 1];
var medianaRuaDbimestre = [4, 4, 4, 3, 3, 3, 4, 3];
var medianaRuaDsemestre = [3, 4, 4, 3, 3, 4];
var medianaRuaDano = [4, 4, 4, 3, 3, 3];

// Rua E
var medianaRuaEmes = [3, 3, 2, 4];
var medianaRuaEbimestre = [3, 2, 4, 3, 3, 2, 4, 3];
var medianaRuaEsemestre = [3, 4, 3, 2, 4, 3];
var medianaRuaEano = [2, 3, 3, 4, 3, 3];

// Rua F
var medianaRuaFmes = [4, 3, 3, 4];
var medianaRuaFbimestre = [3, 3, 4, 4, 3, 4, 2, 3];
var medianaRuaFsemestre = [2, 3, 3, 3, 2, 3];
var medianaRuaFano = [3, 2, 2, 3, 3, 3];


// MEDIANA HORÁRIO 
var dadosRuaAMedianaHorario = {
    type: 'line',
    data: {
        labels: ["06:00", "12:00", "18:00", "00:00"],
        datasets: [{
            label: label,
            data: [3, 4, 3, 2],
            borderColor: '#ecf0f1',
            backgroundColor: '#ecf0f1',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: options
};

// Rua A
var medianaHorarioRuaA7dias = [3, 4, 3, 2];
var medianaHorarioRuaAmes = [3, 3, 4, 2];
var medianaHorarioRuaAbimestre = [3, 4, 3, 3];
var medianaHorarioRuaAsemestre = [3, 3, 4, 3];
var medianaHorarioRuaAano = [3, 2, 4, 3];

// Rua B
var medianaHorarioRuaB7dias = [2, 3, 3, 2];
var medianaHorarioRuaBmes = [3, 3, 2, 4];
var medianaHorarioRuaBbimestre = [3, 2, 3, 3];
var medianaHorarioRuaBsemestre = [3, 3, 2, 4];
var medianaHorarioRuaBano = [2, 3, 4, 2];

// Rua C
var medianaHorarioRuaC7dias = [3, 4, 3, 2];
var medianaHorarioRuaCmes = [4, 3, 4, 2];
var medianaHorarioRuaCbimestre = [4, 3, 3, 2];
var medianaHorarioRuaCsemestre = [3, 4, 2, 3];
var medianaHorarioRuaCano = [4, 3, 2, 3];


// Rua D
var medianaHorarioRuaD7dias = [2, 2, 3, 2];
var medianaHorarioRuaDmes = [2, 2, 3, 2];
var medianaHorarioRuaDbimestre = [3, 2, 2, 2];
var medianaHorarioRuaDsemestre = [2, 3, 2, 2];
var medianaHorarioRuaDano = [2, 2, 3, 2];

// Rua E
var medianaHorarioRuaE7dias = [2, 3, 3, 4];
var medianaHorarioRuaEmes = [3, 3, 2, 4];
var medianaHorarioRuaEbimestre = [3, 2, 4, 3];
var medianaHorarioRuaEsemestre = [3, 4, 3, 2];
var medianaHorarioRuaEano = [2, 3, 4, 3];

// Rua F
var medianaHorarioRuaF7dias = [3, 3, 4, 2];
var medianaHorarioRuaFmes = [3, 4, 3, 3];
var medianaHorarioRuaFbimestre = [4, 3, 3, 2];
var medianaHorarioRuaFsemestre = [3, 3, 2, 3];
var medianaHorarioRuaFano = [3, 3, 3, 2];


// NÍVEL ATUAL

var optionsAtual = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            min: 0,
            max: 5,
            ticks: {
                stepSize: 1
            }
        }
    }
};

var dadosRuaAAtual = {
    type: 'bar',
    data: {
        labels: ["Nível"],
        datasets: [{
            label: label,
            data: [3],
            borderColor: 'yellow',
            backgroundColor: 'yellow',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: optionsAtual
};


// CRIANDO OS GRÁFICOS INICIAIS

var graficoAtualCtx1 = new Chart(ctx, dadosRuaAMaiorNivel);
var graficoAtualCtx2 = new Chart(ctx2, dadosMenorNivel);
var graficoAtualCtx3 = new Chart(ctx3, dadosRuaAEspecifico);
var graficoAtualCtx4 = new Chart(ctx4, dadosRuaAMedianaHorario);
var graficoAtualCtx5 = new Chart(ctx5, dadosRuaAAtual);

// FUNÇÕES DE FILTRO
function maiorNivelPontoFiltro() {
    var titulo = document.getElementById("maiorNivelTitulo");
    var dados = [];
    var labels = [];
    var value = filtroMaiorNivelPonto.value;

    if (value === "semana") {
        titulo.innerHTML = "Pontos com maior nível de lixo (mediana) nos últimos 7 dias";
        dados = dadosMaiorNivelSeteDias;
        labels = ['Rua A', 'Rua B', 'Rua C'];
    } else if (value === "mês") {
        titulo.innerHTML = "Pontos com maior nível de lixo (mediana) nos últimos 30 dias";
        dados = dadosMaiorNivelMes;
        labels = ['Rua C', 'Rua D', 'Rua F'];
    } else if (value === "bimestre") {
        titulo.innerHTML = "Pontos com maior nível de lixo (mediana) nos últimos 2 meses";
        dados = dadosMaiorNivelBimestre;
        labels = ['Rua A', 'Rua F', 'Rua E'];
    } else if (value === "semestre") {
        titulo.innerHTML = "Pontos com maior nível de lixo (mediana) nos últimos 6 meses";
        dados = dadosMaiorNivelSemestre;
        labels = ['Rua A', 'Rua B', 'Rua F'];
    } else if (value === "ano") {
        titulo.innerHTML = "Pontos com maior nível de lixo (mediana) nos últimos 12 meses";
        dados = dadosMaiorNivelAno;
        labels = ['Rua D', 'Rua F', 'Rua C'];
    }

    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ 
                label: 'Nível do lixo',
                data: dados,
                borderWidth: borderWidth,
                borderColor: borderColorMaiorNivel,
                backgroundColor: backgroundColorMaiorNivel
            }]
        },
        options: options
    }

    if(graficoAtualCtx1){
        graficoAtualCtx1.destroy();
    }

    graficoAtualCtx1 = new Chart(ctx, config);
}

function menorNivelPontoFiltro() {
    var titulo = document.getElementById("menorNivelTitulo");
    var dados = [];
    var labels = [];
    var value = filtroMenorNivelPonto.value;

    if (value === "semana") {
        titulo.innerHTML = "Pontos com menor nível de lixo (mediana) nos últimos 7 dias";
        dados = dadosMenorNivelSeteDias;
        labels = ['Rua D', 'Rua E', 'Rua F'];
    } else if (value === "mês") {
        titulo.innerHTML = "Pontos com menor nível de lixo (mediana) nos últimos 30 dias";
        dados = dadosMenorNivelMes;
        labels = ['Rua B', 'Rua E', 'Rua A'];
    } else if (value === "bimestre") {
        titulo.innerHTML = "Pontos com menor nível de lixo (mediana) nos últimos 2 meses";
        dados = dadosMenorNivelBimestre;
        labels = ['Rua D', 'Rua C', 'Rua B'];
    } else if (value === "semestre") {
        titulo.innerHTML = "Pontos com menor nível de lixo (mediana) nos últimos 6 meses";
        dados = dadosMenorNivelSemestre;
        labels = ['Rua C', 'Rua D', 'Rua E'];
    } else if (value === "ano") {
        titulo.innerHTML = "Pontos com menor nível de lixo (mediana) nos últimos 12 meses";
        dados = dadosMenorNivelAno;
        labels = ['Rua B', 'Rua A', 'Rua E'];
    }

    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Nível do lixo',
                data: dados,
                borderWidth: borderWidth,
                borderColor: borderColorMenorNivel,
                backgroundColor: backgroundColorMenorNivel
            }]
        },
        options: options
    }

    if(graficoAtualCtx2){
        graficoAtualCtx2.destroy();
    }

    graficoAtualCtx2 = new Chart(ctx2, config);
}

function atualizarGraficoMediana() {
    var pontoSelecionado = document.getElementById('filtroPontoMediana').value;
    var periodoSelecionado = document.getElementById('filtroPeriodoMediana').value;

    var dados = [];

    if (pontoSelecionado === 'ruaA') {
        if (periodoSelecionado === 'mês') dados = medianaRuaAmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaAbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaAsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaAano;
    } else if (pontoSelecionado === 'ruaB') {
        if (periodoSelecionado === 'mês') dados = medianaRuaBmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaBbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaBsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaBano;
    } else if (pontoSelecionado === 'ruaC') {
        if (periodoSelecionado === 'mês') dados = medianaRuaCmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaCbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaCsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaCano;
    } else if (pontoSelecionado === 'ruaD') {
        if (periodoSelecionado === 'mês') dados = medianaRuaDmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaDbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaDsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaDano;
    } else if (pontoSelecionado === 'ruaE') {
        if (periodoSelecionado === 'mês') dados = medianaRuaEmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaEbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaEsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaEano;
    }else if (pontoSelecionado === 'ruaF') {
        if (periodoSelecionado === 'mês') dados = medianaRuaFmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaFbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaFsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaFano;
    }    

    var labels = [];
    if (periodoSelecionado === 'mês') {
        labels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];
    } else if (periodoSelecionado === 'bimestre') {
        labels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7", "Semana 8"];
    } else if (periodoSelecionado === 'semestre') {
        labels = ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6"];
    } else if (periodoSelecionado === 'ano') {
        labels = ["Bimestre 1", "Bimestre 2", "Bimestre 3", "Bimestre 4", "Bimestre 5", "Bimestre 6"];
    } else if (periodoSelecionado === 'dia') {
        labels = ["06:00", "12:00", "18:00", "00:00"];
    }
    
    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Mediana - ${pontoSelecionado.replace("rua", "Rua ")}`,
                data: dados,
                borderColor: '#8e44ad',
                backgroundColor: '#8e44ad',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: options
    };

    if (graficoAtualCtx3) {
        graficoAtualCtx3.destroy();
    }

    graficoAtualCtx3 = new Chart(ctx3, config);

    var nomeFormatado = pontoSelecionado.replace("rua", "Rua ");
    var titulo = document.getElementById('sensorEspecificoTitulo');

    if (periodoSelecionado === "mês") {
        titulo.innerHTML = `Nível de lixo médio por período (mediana) – ${nomeFormatado} – Últimos 30 dias`;
    } else if (periodoSelecionado === "bimestre") {
        titulo.innerHTML = `Nível de lixo médio por período (mediana) – ${nomeFormatado} – Últimos 2 meses`;
    } else if (periodoSelecionado === "semestre") {
        titulo.innerHTML = `Nível de lixo médio por período (mediana) – ${nomeFormatado} – Últimos 6 meses`;
    } else if (periodoSelecionado === "ano") {
        titulo.innerHTML = `Nível de lixo médio por período (mediana) – ${nomeFormatado} – Últimos 12 meses `;
    }   

}

function atualizarGraficoMedianaHorario() {
    var pontoSelecionado = document.getElementById('filtroPontoMedianaHorario').value;
    var periodoSelecionado = document.getElementById('filtroPeriodoMedianaHorario').value;

    var dados = [];

    if (pontoSelecionado === 'ruaA') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaA7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaAmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaAbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaAsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaAano;
    } else if (pontoSelecionado === 'ruaB') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaB7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaBmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaBbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaBsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaBano;
    } else if (pontoSelecionado === 'ruaC') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaC7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaCmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaCbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaCsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaCano;
    } else if (pontoSelecionado === 'ruaD') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaD7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaDmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaDbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaDsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaDano;
    } else if (pontoSelecionado === 'ruaE') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaE7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaEmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaEbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaEsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaEano;
    }else if (pontoSelecionado === 'ruaF') {
        if (periodoSelecionado === '7dias') dados = medianaHorarioRuaF7dias;
        else if (periodoSelecionado === 'mês') dados = medianaHorarioRuaFmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaHorarioRuaFbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaHorarioRuaFsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaHorarioRuaFano;
    }  
    
    var config = { 
        type: 'line',
        data: {
            labels: ["06:00", "12:00", "18:00", "00:00"],
            datasets: [{
                label: `Mediana - ${pontoSelecionado.replace("rua", "Rua ")}`,
                data: dados,
                borderColor: '#ecf0f1',
                backgroundColor: '#ecf0f1',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: options
    };

    if (graficoAtualCtx4) {
        graficoAtualCtx4.destroy();
    }

    graficoAtualCtx4 = new Chart(ctx4, config);

    var nomeFormatado = pontoSelecionado.replace("rua", "Rua ");
    var titulo = document.getElementById('medianaHorarioTitulo');

    if (periodoSelecionado === "7dias") {
        titulo.innerHTML = `Nível de lixo por horário (mediana) – ${nomeFormatado} – Últimos 7 dias`;
    } else if (periodoSelecionado === "mês") {
        titulo.innerHTML = `Nível de lixo por horário (mediana) – ${nomeFormatado} – Últimos 30 dias`;
    } else if (periodoSelecionado === "bimestre") {
        titulo.innerHTML = `Nível de lixo por horário (mediana) – ${nomeFormatado} – Últimos 2 meses`;
    } else if (periodoSelecionado === "semestre") {
        titulo.innerHTML = `Nível de lixo por horário (mediana) – ${nomeFormatado} – Últimos 6 meses`;
    } else if (periodoSelecionado === "ano") {
        titulo.innerHTML = `Nível de lixo por horário (mediana) – ${nomeFormatado} – Últimos 12 meses`;
    }   

}

function atualizarGraficoNivelAtual() {
    var pontoSelecionado = document.getElementById('filtroPontoAtual').value;
    var lixeiraSelecionada = document.getElementById('filtroLixeiraAtual').value;

    var dados = [];

    if (pontoSelecionado === 'ruaA') {
        if (lixeiraSelecionada === 'lixeira1') dados = [3];
        else if (lixeiraSelecionada === 'lixeira2') dados = [4];
        else if (lixeiraSelecionada === 'lixeira3') dados = [5];
        else if (lixeiraSelecionada === 'lixeira4') dados = [4];
        else if (lixeiraSelecionada === 'lixeira5') dados = [3];
        else dados = [4];
    } else if (pontoSelecionado === 'ruaB') {
        if (lixeiraSelecionada === 'lixeira1') dados = [2];
        else if (lixeiraSelecionada === 'lixeira2') dados = [3];
        else if (lixeiraSelecionada === 'lixeira3') dados = [2];
        else if (lixeiraSelecionada === 'lixeira4') dados = [1];
        else if (lixeiraSelecionada === 'lixeira5') dados = [2];
        else dados = [2];
    } else if (pontoSelecionado === 'ruaC') {
        if (lixeiraSelecionada === 'lixeira1') dados = [5];
        else if (lixeiraSelecionada === 'lixeira2') dados = [5];
        else if (lixeiraSelecionada === 'lixeira3') dados = [4];
        else if (lixeiraSelecionada === 'lixeira4') dados = [4];
        else if (lixeiraSelecionada === 'lixeira5') dados = [5];
        else dados = [5];
    } else if (pontoSelecionado === 'ruaD') {
        if (lixeiraSelecionada === 'lixeira1') dados = [2];
        else if (lixeiraSelecionada === 'lixeira2') dados = [3];
        else if (lixeiraSelecionada === 'lixeira3') dados = [3];
        else if (lixeiraSelecionada === 'lixeira4') dados = [4];
        else if (lixeiraSelecionada === 'lixeira5') dados = [3];
        else dados = [3];
    } else if (pontoSelecionado === 'ruaE') {
        if (lixeiraSelecionada === 'lixeira1') dados = [4];
        else if (lixeiraSelecionada === 'lixeira2') dados = [3];
        else if (lixeiraSelecionada === 'lixeira3') dados = [5];
        else if (lixeiraSelecionada === 'lixeira4') dados = [4];
        else if (lixeiraSelecionada === 'lixeira5') dados = [5];
        else dados = [4];
    }else if (pontoSelecionado === 'ruaF') {
        if (lixeiraSelecionada === 'lixeira1') dados = [3];
        else if (lixeiraSelecionada === 'lixeira2') dados = [2];
        else if (lixeiraSelecionada === 'lixeira3') dados = [4];
        else if (lixeiraSelecionada === 'lixeira4') dados = [3];
        else if (lixeiraSelecionada === 'lixeira5') dados = [3];
        else dados = [3];
    }

    var cor = "";

    console.log(dados)

    if(dados == 1 || dados == 2){
        cor = "#15ff00"
    }else if(dados == 3){
        cor = "yellow"
    }else if(dados == 4){
        cor = "#a20808"
    }else{
        cor = "#ff0000"
    }

    console.log(cor);

    var config = {
        type: 'bar',
        data: {
            labels: ["Nível"],
            datasets: [{
                label: `Mediana - ${pontoSelecionado.replace("rua", "Rua ")}`,
                data: dados,
                borderColor: cor,
                backgroundColor: cor,
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: optionsAtual
    };

    if (graficoAtualCtx5) {
        graficoAtualCtx5.destroy();
    }

    graficoAtualCtx5 = new Chart(ctx5, config);

    var nomeFormatado = pontoSelecionado.replace("rua", "Rua ");
    var titulo = document.getElementById('nivelAtualTitulo');
    var lixeiraFormatada = lixeiraSelecionada.replace("lixeira", "Lixeira ");

    if (lixeiraSelecionada != "ponto") {
        titulo.innerHTML = `Nível de lixo na ${nomeFormatado} - ${lixeiraFormatada}`;
    } else {
        titulo.innerHTML = `Nível de lixo atual ${nomeFormatado} (Mediana)`;
    }
}

function atualizarKpiHorario() {
    var periodoSelecionado = document.getElementById('filtroPeriodoKpiHorario').value;

    if (periodoSelecionado === '7dias') {
        nomeRua00.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, C, F</h3>`;
        nivelLixo00.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua06.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas B, E, F</h3>`;
        nivelLixo06.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua12.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, C, D, E</h3>`;
        nivelLixo12.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua18.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, C, D, F</h3>`;
        nivelLixo18.innerHTML = `<p class="corUrgencia2" id="nivelLixo06">2</p>`;
    } else if (periodoSelecionado === 'mês') {
        nomeRua00.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, E, F</h3>`;
        nivelLixo00.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua06.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, C, E</h3>`;
        nivelLixo06.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua12.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas D e F</h3>`;
        nivelLixo12.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua18.innerHTML = `<h3 class="margin0" id="nomeRua00">Rua F</h3>`;
        nivelLixo18.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
    } else if (periodoSelecionado === 'bimestre') {
        nomeRua00.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, D, E</h3>`;
        nivelLixo00.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua06.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas C e F</h3>`;
        nivelLixo06.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua12.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, C, F</h3>`;
        nivelLixo12.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua18.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, E</h3>`;
        nivelLixo18.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
    } else if (periodoSelecionado === 'semestre') {
        nomeRua00.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, C, E, F</h3>`;
        nivelLixo00.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua06.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, D, F</h3>`;
        nivelLixo06.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua12.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas B, C, D, F</h3>`;
        nivelLixo12.innerHTML = `<p class="corUrgencia2" id="nivelLixo06">2</p>`;
        nomeRua18.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, C, F</h3>`;
        nivelLixo18.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
    } else if (periodoSelecionado === 'ano') {
        nomeRua00.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A e F</h3>`;;
        nivelLixo00.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua06.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas B, C, E, F</h3>`;;
        nivelLixo06.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
        nomeRua12.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, B, E</h3>`;;
        nivelLixo12.innerHTML = `<p class="corUrgencia4" id="nivelLixo06">4</p>`;
        nomeRua18.innerHTML = `<h3 class="margin0" id="nomeRua00">Ruas A, C, E</h3>`;;
        nivelLixo18.innerHTML = `<p class="corUrgencia3" id="nivelLixo06">3</p>`;
    }
}