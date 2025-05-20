var database = require('../database/config');

function mediaRota(idUsuario) {
    console.log("Entrou no model mediaRota");
    console.log(`idUsuario: ${idUsuario}`);
    var instrucao = `
        SELECT 
            ro.idRota,
            ro.nomeRota,
            ROUND(AVG(ultimos_registros.distancia), 2) AS media_geral_rota
        FROM representante rep
        JOIN rota ro ON rep.idRepresentante = ro.idRepresentante
        JOIN rotaPontoColeta rpc ON ro.idRota = rpc.idRota
        JOIN pontoColeta pc ON rpc.idPontoColeta = pc.idPontoColeta
        JOIN lixeira l ON pc.idPontoColeta = l.idPontoColeta
        JOIN sensor s ON l.idLixeira = s.idLixeira
        JOIN (
            SELECT r1.idSensor, r1.distancia
            FROM registro r1
            JOIN (
                SELECT idSensor, MAX(dataHoraMedicao) AS ultima_data
                FROM registro
                GROUP BY idSensor
            ) r2 ON r1.idSensor = r2.idSensor AND r1.dataHoraMedicao = r2.ultima_data
        ) AS ultimos_registros ON s.idSensor = ultimos_registros.idSensor
        WHERE rep.idRepresentante = ${idUsuario}
        GROUP BY ro.idRota, ro.nomeRota;
    `;
    console.log("Executando a instrução SQL: ", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mediaRota
}