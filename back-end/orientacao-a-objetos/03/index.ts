import Clube from './src/Clube';
import QuadraFutebol from './src/QuadraFutebol';
//course

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date();

const reservarQuadraFutebol = trybeClube
  .buscarQuadra<QuadraFutebol>(0)
  .reserve(dataReserva);
  console.log(reservarQuadraFutebol);