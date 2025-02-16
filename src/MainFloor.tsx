import { AreaCard, ButtonCard, Column, FabCard, Group, Row } from '@hakit/components';
import { JSX } from 'react';
import { MAIN_GROUP_LIGHTS, MAIN_INDIVIDUAL_LIGHTS, MAIN_LOGO, MAIN_SWITCH } from './entities';

export const MainFloor = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'main'} icon={'mdi:living-room'} image={MAIN_LOGO} title={'Main'}>
        <Column cssStyles={{ paddingTop: '1rem' }}>
          <Row fullWidth gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
            <Group
              title={'Master Switches'}
              className={'!pt-0 !pb-2'}
            >
              <Row fullWidth>
                  <ButtonCard
                    entity={MAIN_SWITCH.entity as any}
                    service={'toggle'}
                    className={'!p-0'}
                    icon={MAIN_SWITCH.icon}
                    title={MAIN_SWITCH.title}
                  />
                </Row>

                <Row gap={'1rem'}>
                  {MAIN_GROUP_LIGHTS.map(group => {
                    return (
                      <FabCard
                      entity={group.entity as any}
                      icon={group.icon}
                      service={'toggle'}
                      title={group.title}
                    >
                      {group.title}
                    </FabCard>
                    )
                  })}
                </Row>
            </Group>
            {MAIN_INDIVIDUAL_LIGHTS.map(area => {
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
