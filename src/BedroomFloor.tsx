import { AreaCard, ButtonCard, CardBase, Column, FeatureEntity, Group, Row } from '@hakit/components';
import { JSX } from 'react';
import { BEDROOM_LIGHTS, BEDROOM_LOGO } from './entities';

export const BedroomFloor = (): JSX.Element => {
  return (
    <>
      <AreaCard hash={'bedroom'} icon={'mdi:office-chair'} image={BEDROOM_LOGO} title={'Bedroom'}>
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
                  entity={'light.upstairs_lights' as any}
                  layoutType={'slim'}
                  service={'turnOn'}
                  className={'!p-0'}
                  icon={'mdi-check-circle'}
                  title={'Turn On Upstairs Lights'}
                />
              </Column>
              <Column gap={'1rem'} cssStyles={{ padding: '1rem' }} justifyContent={'start'} alignItems={'start'}>
                <ButtonCard
                  entity={'light.upstairs_lights' as any}
                  layoutType={'slim'}
                  service={'turnOff'}
                  className={'!p-0'}
                  icon={'mdi-cross-circle'}
                  title={'Turn Off Upstairs Lights'}
                />
              </Column>

              <CardBase
                disableActiveState
                features={[
                  <FeatureEntity key={'2'} entity={'light.bar_lights' as any} service={'toggle'}>
                    Bar Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'3'} entity={'light.office_lights' as any} service={'toggle'}>
                    Office Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'4'} entity={'light.entertainment_lights' as any} service={'toggle'}>
                    Entertainment Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'5'} entity={'light.game_lights' as any} service={'toggle'}>
                    Game Lights
                  </FeatureEntity>,
                  <FeatureEntity key={'6'} entity={'light.hallway_lights' as any} service={'toggle'}>
                    Hallway Lights
                  </FeatureEntity>,
                ]}
              ></CardBase>
            </Group>
            {BEDROOM_LIGHTS.map(area => {
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
