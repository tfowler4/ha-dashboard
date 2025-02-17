import { Row } from '@hakit/components';
import { BedroomFloor } from './BedroomFloor';
import { MainFloor } from './MainFloor';
import { BasementFloor } from './BasementFloor';
import { Outdoors } from './Outdoors';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <Row fullWidth gap={'1rem'}>
        <BedroomFloor />
        <MainFloor />
        <BasementFloor />
        <Outdoors />
      </Row>
    </div>
  );
}

export default Dashboard;
