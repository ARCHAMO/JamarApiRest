let dbconfigPAN = require("./dbconfigPAN");

module.exports = {
  hrPool: {
    poolAlias: 'JP',
    user: dbconfigPAN.user,
    password: dbconfigPAN.password,
    connectString: dbconfigPAN.connectString,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
