require('dotenv').config();
const { join } = require('path');
const fs = require('fs');
const connection = require('../../config/connection');
  
  const dbBuild = () => {
    const sql = fs.readFileSync(join(__dirname, 'build.sql')).toString();
    return connection.query(sql);
  };
  
  // \i 'C:\\Users\\hp\\Desktop\\Reddit-ManarAbed\\server\\database\\config\\build.sql';


  module.exports = dbBuild;
 