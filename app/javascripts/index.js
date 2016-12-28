import fps from 'frame-interval';
import moment from 'moment';

const DOM = {
  app: document.getElementById('app'),
};

const FPS = 60;

const trimmed = (n, length) => {
  const diff = length - n.toString().length;
  const trail = Array(diff).fill(undefined).map(() => '0').join('');
  return (n + trail).substring(0, length);
};

const now = () => {
  return moment().years() + moment().diff(moment().startOf('year'), 'years', true);
};

export default () => {
  fps(requestAnimationFrame)(FPS, () => {
    DOM.app.innerHTML = trimmed(now(), 18);
  })();
};
