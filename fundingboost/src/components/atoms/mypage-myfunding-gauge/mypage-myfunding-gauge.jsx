import ProgressBar from 'react-bootstrap/ProgressBar';
import './mypage-myfunding-gauge.scss';

function MypageMyfundingGauge() {
    const now = 75;

    return <ProgressBar variant="success" now={now} label={`${now}%`} className="mypage-myfunding-gauge-bar" />;
}

export default MypageMyfundingGauge;