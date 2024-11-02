
/*
 * LOCAL DATABASE Config
 * 
 *  Para acceder a una BD en la nube debes configurar un archivo .env
 */
const dbHost = "localhost";
const dbPort = "3306";
const dbUser = "root";
const dbPass = "3sNoopyG";
const dbName = "iot";



/*
 * Server General Configuration
 */
const serverPort = 3000
const contextURL = '/iot'; //If needed, project context
const api = '/api'; // Sugested API URL

//SENSOR 1 URLS. Configurar URLS por cada sensor.
//const getTemperatureSensor = '/getTemperatures'
//const getTemperatureSensorByDate = '/getTemperatures'
//const postTemperatureSensor = '/insertTemperature'; //Implemented Endpoint URL

const getDetectSensor = '/getDetectSensor'
const getDetectSensorByDate = '/getDetectSensorByDate'
const postMetalSensor = '/insertMetalSensor'; //Implemented Endpoint URL



/*
 * DB Queries
 * Agregar queries por sensor.
 */
//const selectTemperature = 'SELECT * FROM temps';
//const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
//const insertTemperature = 'INSERT INTO temps (valor) values (?)';

const selectMetal = 'SELECT * FROM sensormetal';
const selectMetalByDate = 'SELECT * FROM sensormetal WHERE fecha between ? and ?';
const insertMetal = 'INSERT INTO sensormetal (detect) values (?)';

module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api,
   getDetectSensor, getDetectSensorByDate, postMetalSensor, selectMetal, selectMetalByDate, insertMetal
}

//getTemperatureSensor,
//getTemperatureSensorByDate,postTemperatureSensor,selectTemperature,selectTemperatureByDate,insertTemperature,