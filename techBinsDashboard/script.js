// RECUPERANDO OS CANVAS
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

// VARIAVÉIS
const borderColorMaiorNivel = '#F95454';
const backgroundColorMaiorNivel = '#EF5A6F';
const borderColorMenorNivel = '#3D3BF3';
const backgroundColorMenorNivel = '#0D92F4';
const borderWidth = 2;
const label = 'Nível do lixo';

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
        labels: ['Rua A', 'Rua C', 'Rua E', 'Rua G', 'Rua I'],
        datasets: [{
            label: label,
            data: [4, 5, 4, 4, 4],
            borderWidth: borderWidth,
            borderColor: borderColorMaiorNivel,
            backgroundColor: backgroundColorMaiorNivel
        }]
    },
    options: options
};

var dadosMaiorNivelSeteDias = [4, 5, 4, 4, 4];
var dadosMaiorNivelMes = [5, 4, 5, 5, 3];
var dadosMaiorNivelBimestre = [3, 4, 5, 4, 3];
var dadosMaiorNivelSemestre = [2, 3, 4, 4, 5];
var dadosMaiorNivelAno = [5, 5, 4, 3, 2];


// MENOR NÍVEL
var dadosMenorNivel = {
    type: 'bar',
    data: {
        labels: ['Rua B', 'Rua D', 'Rua F', 'Rua H', 'Rua J'],
        datasets: [{
            label: label,
            data: [1, 1, 2, 1, 1],
            borderWidth: borderWidth,
            borderColor: borderColorMenorNivel,
            backgroundColor: backgroundColorMenorNivel
        }]
    },
    options: options
};

var dadosMenorNivelSeteDias = [1, 1, 2, 1, 1];
var dadosMenorNivelMes = [2, 1, 2, 1, 2];
var dadosMenorNivelBimestre = [1, 2, 2, 1, 1];
var dadosMenorNivelSemestre = [2, 2, 1, 2, 1];
var dadosMenorNivelAno = [1, 2, 1, 2, 2];

// GRÁFICO ESPECÍFICO
var dadosRuaAEspecifico = {
    type: 'line',
    data: {
        labels: ["06:00", "12:00", "18:00", "00:00"],
        datasets: [{
            label: label,
            data: [2, 3, 4, 3],
            borderColor: '#FFA500',
            backgroundColor: '#FFD580',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: options
};

// Rua A
var nivelDiaRuaA = [2, 3, 4, 3];
var medianaRuaA7dias = [3, 3, 4, 3, 3, 4, 3];
var medianaRuaAmes = [3, 4, 4, 3];
var medianaRuaAbimestre = [4, 4, 3, 4, 3, 4, 3, 4];
var medianaRuaAsemestre = [3, 4, 4, 4, 3, 4];
var medianaRuaAano = [4, 4, 4, 3, 3, 4];

// Rua B
var nivelDiaRuaB = [1, 2, 3, 2];
var medianaRuaB7dias = [2, 2, 3, 2, 3, 3, 2];
var medianaRuaBmes = [2, 3, 3, 2];
var medianaRuaBbimestre = [2, 2, 3, 3, 2, 2, 3, 3];
var medianaRuaBsemestre = [3, 3, 2, 3, 2, 2];
var medianaRuaBano = [2, 2, 3, 3, 2, 3];

// Rua C
var nivelDiaRuaC = [3, 4, 3, 2];
var medianaRuaC7dias = [3, 3, 4, 3, 3, 3, 2];
var medianaRuaCmes = [3, 3, 4, 3];
var medianaRuaCbimestre = [4, 4, 3, 3, 3, 3, 4, 4];
var medianaRuaCsemestre = [3, 3, 4, 4, 3, 3];
var medianaRuaCano = [4, 3, 3, 4, 3, 3];

// Rua D
var nivelDiaRuaD = [4, 4, 3, 1];
var medianaRuaD7dias = [4, 4, 3, 3, 2, 3, 4];
var medianaRuaDmes = [3, 3, 4, 3];
var medianaRuaDbimestre = [4, 4, 4, 3, 3, 3, 4, 3];
var medianaRuaDsemestre = [3, 4, 4, 3, 3, 4];
var medianaRuaDano = [4, 4, 4, 3, 3, 3];

// Rua E
var nivelDiaRuaE = [3, 2, 4, 3];
var medianaRuaE7dias = [2, 3, 3, 4, 3, 2, 3];
var medianaRuaEmes = [3, 3, 2, 4];
var medianaRuaEbimestre = [3, 2, 4, 3, 3, 2, 4, 3];
var medianaRuaEsemestre = [3, 4, 3, 2, 4, 3];
var medianaRuaEano = [2, 3, 3, 4, 3, 3];

// MEDIANDA HORÁRIO 
var dadosRuaAMedianaHorario = {
    type: 'line',
    data: {
        labels: ["06:00", "12:00", "18:00", "00:00"],
        datasets: [{
            label: label,
            data: [3, 4, 3, 2],
            borderColor: '#2C5F34',
            backgroundColor: '#2C5F34',
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

// CRIANDO OS GRÁFICOS INICIAIS
var graficoAtualCtx1 = new Chart(ctx, dadosRuaAMaiorNivel);
var graficoAtualCtx2 = new Chart(ctx2, dadosMenorNivel);
var graficoAtualCtx3 = new Chart(ctx3, dadosRuaAEspecifico);
var graficoAtualCtx4 = new Chart(ctx4, dadosRuaAMedianaHorario);

// FUNÇÕES DE FILTRO
function maiorNivelPontoFiltro() {
    var titulo = document.getElementById("maiorNivelTitulo");
    var dados = [];
    var labels = [];
    var value = filtroMaiorNivelPonto.value;
    if (value === "semana") {
        titulo.innerHTML = "Pontos com maior nível de lixo na última semana"
        dados = dadosMaiorNivelSeteDias;
        labels = ['Rua A', 'Rua C', 'Rua E', 'Rua G', 'Rua I'];
    } else if (value === "mês") {
        titulo.innerHTML = "Pontos com maior nível de lixo no último mês"
        dados = dadosMaiorNivelMes;
        labels = ['Rua B', 'Rua D', 'Rua F', 'Rua H', 'Rua J'];
    } else if (value === "bimestre") {
        titulo.innerHTML = "Pontos com maior nível de lixo no último bimestre"
        dados = dadosMaiorNivelBimestre;
        labels = ['Rua K', 'Rua L', 'Rua M', 'Rua N', 'Rua O'];
    } else if (value === "semestre") {
        titulo.innerHTML = "Pontos com maior nível de lixo no último semestre"
        dados = dadosMaiorNivelSemestre;
        labels = ['Rua P', 'Rua Q', 'Rua R', 'Rua S', 'Rua T'];
    } else if (value === "ano") {
        titulo.innerHTML = "Pontos com maior nível de lixo no último ano"
        dados = dadosMaiorNivelAno;
        labels = ['Rua U', 'Rua V', 'Rua W', 'Rua X', 'Rua Y'];
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
        titulo.innerHTML = "Pontos com menor nível de lixo na última semana"
        dados = dadosMenorNivelSeteDias;
        labels = ['Rua B', 'Rua D', 'Rua F', 'Rua H', 'Rua J'];
    } else if (value === "mês") {
        titulo.innerHTML = "Pontos com menor nível de lixo no último mês"
        dados = dadosMenorNivelMes;
        labels = ['Rua L', 'Rua N', 'Rua P', 'Rua R', 'Rua T'];
    } else if (value === "bimestre") {
        titulo.innerHTML = "Pontos com menor nível de lixo no último bimestre"
        dados = dadosMenorNivelBimestre;
        labels = ['Rua U', 'Rua W', 'Rua Y', 'Rua Z', 'Rua AA'];
    } else if (value === "semestre") {
        titulo.innerHTML = "Pontos com menor nível de lixo no último semestre"
        dados = dadosMenorNivelSemestre;
        labels = ['Rua AB', 'Rua AC', 'Rua AD', 'Rua AE', 'Rua AF'];
    } else if (value === "ano") {
        titulo.innerHTML = "Pontos com menor nível de lixo no último ano"
        dados = dadosMenorNivelAno;
        labels = ['Rua AG', 'Rua AH', 'Rua AI', 'Rua AJ', 'Rua AK'];
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
        if (periodoSelecionado === '7dias') dados = medianaRuaA7dias;
        else if (periodoSelecionado === 'mês') dados = medianaRuaAmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaAbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaAsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaAano;
        else if (periodoSelecionado === 'dia') dados = nivelDiaRuaA;
    } else if (pontoSelecionado === 'ruaB') {
        if (periodoSelecionado === '7dias') dados = medianaRuaB7dias;
        else if (periodoSelecionado === 'mês') dados = medianaRuaBmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaBbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaBsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaBano;
        else if (periodoSelecionado === 'dia') dados = nivelDiaRuaB;
    } else if (pontoSelecionado === 'ruaC') {
        if (periodoSelecionado === '7dias') dados = medianaRuaC7dias;
        else if (periodoSelecionado === 'mês') dados = medianaRuaCmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaCbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaCsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaCano;
        else if (periodoSelecionado === 'dia') dados = nivelDiaRuaC;
    } else if (pontoSelecionado === 'ruaD') {
        if (periodoSelecionado === '7dias') dados = medianaRuaD7dias;
        else if (periodoSelecionado === 'mês') dados = medianaRuaDmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaDbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaDsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaDano;
        else if (periodoSelecionado === 'dia') dados = nivelDiaRuaD;
    } else if (pontoSelecionado === 'ruaE') {
        if (periodoSelecionado === '7dias') dados = medianaRuaE7dias;
        else if (periodoSelecionado === 'mês') dados = medianaRuaEmes;
        else if (periodoSelecionado === 'bimestre') dados = medianaRuaEbimestre;
        else if (periodoSelecionado === 'semestre') dados = medianaRuaEsemestre;
        else if (periodoSelecionado === 'ano') dados = medianaRuaEano;
        else if (periodoSelecionado === 'dia') dados = nivelDiaRuaE;
    }

    var labels = [];
    if (periodoSelecionado === '7dias') {
        labels = ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"];
    } else if (periodoSelecionado === 'mês') {
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
                borderColor: '#FFA500',
                backgroundColor: '#FFD580',
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

    if (periodoSelecionado != "dia" && periodoSelecionado != "7dias"){
        titulo.innerHTML = `Mediana do nível de lixo na ${nomeFormatado} no ${periodoSelecionado}`;
    }else if(periodoSelecionado == "7dias"){
        titulo.innerHTML = `Mediana do nível de lixo na ${nomeFormatado} nos últimos 7 dias`;
    } else {
        titulo.innerHTML = `Nível de lixo na ${nomeFormatado} no último dia`;
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
    }
    
    var config = {
        type: 'line',
        data: {
            labels: ["06:00", "12:00", "18:00", "00:00"],
            datasets: [{
                label: `Mediana - ${pontoSelecionado.replace("rua", "Rua ")}`,
                data: dados,
                borderColor: '#2C5F34',
                backgroundColor: '#2C5F34',
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

    if (periodoSelecionado != "dia" && periodoSelecionado != "7dias"){
        titulo.innerHTML = `Mediana do nível de lixo na ${nomeFormatado} no ${periodoSelecionado}`;
    }else if(periodoSelecionado == "7dias"){
        titulo.innerHTML = `Mediana do nível de lixo na ${nomeFormatado} nos últimos 7 dias`;
    } else {
        titulo.innerHTML = `Nível de lixo na ${nomeFormatado} no último dia`;
    }

}

