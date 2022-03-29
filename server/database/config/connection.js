
  const { Pool } = require("pg");


    let URL = '';
    if (process.env.NODE_ENV === 'development') {
      URL = process.env.DEV_DATABASE_URL;
    } else if (process.env.NODE_ENV === 'production') {
      URL = process.env.DATABASE_URL;
    } else if (process.env.NODE_ENV === 'test') {
      URL = process.env.TEST_DATABASE_URL;
    }else {
        throw new Error('THERE IS PROBLEM IN DB CONNECTION!')
    }
    
    const connection = new Pool({
      connectionString: URL,
      ssl: { rejectUnauthorized: false },
    });
    
    module.exports = connection;
    