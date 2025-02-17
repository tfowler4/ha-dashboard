import { AreaCard, ButtonCard, ClimateCard, Column, FabCard, Group, Row } from '@hakit/components';
import { JSX } from 'react';
import { BASEMENT_INDIVIDUAL_LIGHTS, BASEMENT_GROUP_LIGHTS, BASEMENT_LOGO, BASEMENT_SWITCH } from './entities';

export const BasementFloor = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'basement'} icon={'mdi:office-chair'} image={BASEMENT_LOGO} title={'Basement'}>
        <Column cssStyles={{ paddingTop: '1rem' }}>
          <Row fullWidth gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
            <Group title={'Master Switches'} className={'!pt-0 !pb-2'}>
              <Row fullWidth>
                <ButtonCard
                  entity={BASEMENT_SWITCH.entity as any}
                  service={'toggle'}
                  className={'!p-0'}
                  icon={BASEMENT_SWITCH.icon}
                  title={BASEMENT_SWITCH.title}
                />
              </Row>

              <Row gap={'1rem'}>
                {BASEMENT_GROUP_LIGHTS.map(group => {
                  return (
                    <FabCard entity={group.entity as any} icon={group.icon} service={'toggle'} title={group.title}>
                      {group.title}
                    </FabCard>
                  );
                })}
              </Row>
            </Group>

            <Group title={'Miscellaneous'} className={'!pt-0 !pb-2'} collapsed={false}>
              <ClimateCard entity='climate.basement_thermostat' />
            </Group>

            {BASEMENT_INDIVIDUAL_LIGHTS.map(area => {
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
