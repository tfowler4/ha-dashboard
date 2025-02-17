import { AreaCard, ButtonCard, ClimateCard, Column, FabCard, Group, Row, SensorCard } from '@hakit/components';
import { JSX } from 'react';
import { BEDROOM_GROUP_LIGHTS, BEDROOM_INDIVIDUAL_LIGHTS, BEDROOM_LOGO, BEDROOM_SWITCH } from './entities';

export const BedroomFloor = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'bedroom'} icon={'mdi:bed-king'} image={BEDROOM_LOGO} title={'Upstairs'}>
        <Column cssStyles={{ paddingTop: '1rem' }}>
          <Row fullWidth gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
            <Group title={'Master Switches'} className={'!pt-0 !pb-2'}>
              <Row fullWidth>
                <ButtonCard
                  entity={BEDROOM_SWITCH.entity as any}
                  service={'toggle'}
                  className={'!p-0'}
                  icon={BEDROOM_SWITCH.icon}
                  title={BEDROOM_SWITCH.title}
                />
              </Row>

              <Row gap={'1rem'}>
                {BEDROOM_GROUP_LIGHTS.map(group => {
                  return (
                    <FabCard entity={group.entity as any} icon={group.icon} service={'toggle'} title={group.title}>
                      {group.title}
                    </FabCard>
                  );
                })}
              </Row>
            </Group>
            
            <Group title={'Miscellaneous'} className={'!pt-0 !pb-2'} collapsed={false}>
              <ClimateCard entity="climate.upstairs_thermostat" />
              <ButtonCard entity={'humidifier.master_bedroom_humidifier'} />
              <SensorCard entity={'humidifier.master_bedroom_humidifier'} />
            </Group>

            {BEDROOM_INDIVIDUAL_LIGHTS.map(area => {
              return (
                <>
                  <Group title={area.title} className={'!pt-0 !pb-2'} collapsed={true}>
                    {area.lights.map((light, index) => (
                      <>
                        <ButtonCard entity={light as any} layoutType={'slim'} service={'toggle'} key={index} className={'!p-0'} />
                      </>
                    ))}
                  </Group>
                </>
              );
            })}
          </Row>
        </Column>
      </AreaCard>
    </>
  );
};
