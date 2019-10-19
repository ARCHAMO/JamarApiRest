module.exports = {
    user : process.env.NODE_ORACLEDB_USER || 'xtrategizer',
    
    password : process.env.NODE_ORACLEDB_PASSWORD || 'xtr2015itv1',
    
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || '10.1.85.131:1521/ORCL',
    
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};