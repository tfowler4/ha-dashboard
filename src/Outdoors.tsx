import { AreaCard, ButtonCard, Column, FabCard, Group, Row } from '@hakit/components';
import { JSX } from 'react';
import { OUTDOOR_INDIVIDUAL_LIGHTS, OUTDOOR_GROUP_LIGHTS, OUTDOOR_LOGO, OUTDOOR_SWITCH } from './entities';

export const Outdoors = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'outdoors'} icon={'mdi:house'} image={OUTDOOR_LOGO} title={'Outdoors'}>
        <Column cssStyles={{ paddingTop: '1rem' }}>
          <Row fullWidth gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
            <Group title={'Master Switches'} className={'!pt-0 !pb-2'}>
              <Row fullWidth>
                <ButtonCard
                  entity={OUTDOOR_SWITCH.entity as any}
                  service={'toggle'}
                  className={'!p-0'}
                  icon={OUTDOOR_SWITCH.icon}
                  title={OUTDOOR_SWITCH.title}
                />
              </Row>

              <Row gap={'1rem'}>
                {OUTDOOR_GROUP_LIGHTS.map(group => {
                  return (
                    <FabCard entity={group.entity as any} icon={group.icon} service={'toggle'} title={group.title}>
                      {group.title}
                    </FabCard>
                  );
                })}
              </Row>
            </Group>

            {OUTDOOR_INDIVIDUAL_LIGHTS.map(area => {
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
