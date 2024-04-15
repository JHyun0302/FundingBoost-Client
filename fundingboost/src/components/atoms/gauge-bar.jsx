import ProgressBar from 'react-bootstrap/ProgressBar';
import './gauge-bar.scss';

function WithLabelExample() {
    const now = 60;

    return <ProgressBar variant="success" now={now} label={`${now}%`} className="maim-Mygauge-bar" />;
}

export default WithLabelExample;