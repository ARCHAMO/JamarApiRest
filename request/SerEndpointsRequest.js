'use strict'

function dataValidateCreate(data) {
    let result = [];
    if(!data.c_emp)
        result.push('Entidad es requerida.');

    if(!data.primer_nombre)
        result.push('Primer nombre es requerido.');

    if(!data.primer_apellido)
        result.push('Primer apellido es requerido.');

    if(!data.usuario)
        result.push('Usuario es requerido.');

    if(!data.password)
        result.push('Contraseña es requerida.');

    if(!data.usuario_creacion)
        result.push('Usuario de sistema es requerido.');

    if(!data.perfil_id)
        result.push('Perfil es requerido.');

    return result;
}

function dataValidateUpdate(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.id){
        result.push('Id es requerida.');
    }    
    return result;
}

function dataValidateDelete(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.id){
        result.push('Id es requerida.');
    }    
    return result;
}

function dataValidateFindByAll(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    return result;
}

function dataValidateFindById(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.id){
        result.push('Id es requerida.');
    }    
    return result;
}

function dataValidateFindByCriteria(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.criterios){
        result.push('No ha definido criterios.');
    }    
    return result;
}

function dataValidateLoginUser(data) {
    let result = [];
    if(!data.c_emp){
        result.push('Entidad es requerida.');
    }    
    if(!data.usuario){
        result.push('Usuario es requerido.');
    }    
    if(!data.password){
        result.push('Contraseña es requerido.');
    }    
    return result;
}

module.exports = {
    dataValidateCreate,
    dataValidateUpdate,
    dataValidateDelete,
    dataValidateFindByAll,
    dataValidateFindById,
    dataValidateFindByCriteria,
    dataValidateLoginUser
}