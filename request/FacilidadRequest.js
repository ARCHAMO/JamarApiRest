'use strict'

function dataValidateCupoBrilla(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.tipo_consulta){
        result.push('Tipo consulta es requerido.');
    } else {
        if(data.tipo_consulta == 'CEDULA') {
            if(!data.tipo_documento) {
                result.push('Tipo documento es requerido.');
            }
            if(!data.n_ide) {
                result.push('Número de documento es requerido.');
            }
        } else {
            if(!data.direccion) {
                result.push('Dirección es requerido.');
            }
        }
    }    
    return result;
}

module.exports = {
    dataValidateCupoBrilla
}