import 'whatwg-fetch';
import { getEnviromentVariables } from './src/helpers/getEnvironmentVariables';


/** En caso de tener variables de entorno
 * npm add -D dotenv
 */

require('dotenv').config({
    path:'.env'
})


/**
 * Realizar el mock completo de las variables de entorno
 */
jest.mock('./src/helpers/getEnvironmentVariables.js', () => (
    { getEnvironmentVariables: () => ({ ...process.env }) }
));