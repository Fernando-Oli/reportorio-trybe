import Clube from './src/Clube';
import QuadraTenis from './src/QuadraTenis';

const trybeClube = new Clube();
const quadraFutebol = new QuadraTenis();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date();

const reservarQuadraFutebol = trybeClube
  .buscarQuadra<QuadraTenis>(0)
  .reserve(dataReserva);
  console.log(reservarQuadraFutebol);