let dbconfigCOL = require("./dbconfigCOL");

module.exports = {
  hrPool: {
    poolAlias: 'JA',
    user: dbconfigCOL.user,
    password: dbconfigCOL.password,
    connectString: dbconfigCOL.connectString,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
