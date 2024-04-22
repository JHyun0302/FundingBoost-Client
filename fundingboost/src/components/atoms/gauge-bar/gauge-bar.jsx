import ProgressBar from 'react-bootstrap/ProgressBar';
import './gauge-bar.scss';

function WithLabelExample() {
    const now = 35;

    return <ProgressBar variant="success" now={now} label={`${now}%`} className="gauge-bar" />;
}

export default WithLabelExample;