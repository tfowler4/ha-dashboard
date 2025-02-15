import { AreaCard, ButtonCard, CardBase, Column, FeatureEntity, Group, Row } from '@hakit/components';
import { JSX } from 'react';
import { MAIN_LIGHTS, MAIN_LOGO } from './entities';

export const MainFloor = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'main'} icon={'mdi:living-room'} image={MAIN_LOGO} title={'Main'}>
        <Column cssStyles={{ paddingTop: '1rem' }}>
          <Row fullWidth gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
            <Group
              title={'Master Switches'}
              className={'!pt-0 !pb-2'}
              cssStyles={
                '.header-title { padding:.5rem !important; } .card-base { width: 100% !important; } .features { justify-content: center !important; padding-top:.5rem !important; padding-bottom:.5rem !important; }'
              }
            >
              <Column gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
                <ButtonCard
                  entity={'light.main_lights' as any}
                  layoutType={'slim'}
                  service={'turnOn'}
                  className={'!p-0'}
                  icon={'mdi-check-circle'}
                  title={'Turn On Main Lights'}
                />
              </Column>
              <Column gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
                <ButtonCard
                  entity={'light.main_lights' as any}
                  layoutType={'slim'}
                  service={'turnOff'}
                  className={'!p-0'}
                  icon={'mdi-cross-circle'}
                  title={'Turn Off Main Lights'}
                />
              </Column>

              <CardBase
                disableActiveState
                features={[
                  <FeatureEntity key={'2'} entity={'light.family_room_lights' as any} service={'toggle'}>
                    Family Room Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'3'} entity={'light.kitchen_lights' as any} service={'toggle'}>
                    Kitchen Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'4'} entity={'light.living_room_lights' as any} service={'toggle'}>
                    Living Lights
                  </FeatureEntity>,
                ]}
              ></CardBase>
            </Group>
            {MAIN_LIGHTS.map(area => {
              return (
                <>
                  <Group title={area.title} className={'!pt-0 !pb-2'} cssStyles={'.header-title { padding:.5rem !important; }'}>
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
