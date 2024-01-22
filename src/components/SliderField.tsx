import { Slider, Grid } from '@arco-design/web-react';
import PalWorldSettings, { FieldName } from '@/domains/PalWorldSettings';
import { useSettingsStore } from '@/stores/SettingsStore';

const {Row} = Grid;

export enum SliderValueType {
  Unknown,
  Integer,
  Float,
  Float0150,
  Float0530,
}

type Props = {
  title: string;
  field: FieldName;
  type: SliderValueType;
  min?: number;
  max?: number;
};
export default function SliderField(props: Props) {
  const {
    title,
    field,
    type,
  } = props;

  const settings = useSettingsStore();

  let min: number | undefined;
  let max: number | undefined;
  let step: number | undefined;

  switch (type) {
    case SliderValueType.Integer:
      min = props.min ?? 0;
      max = props.max ?? 100;
      step = 1;
      break;
    case SliderValueType.Float:
      min = props.min ?? 0.1;
      max = props.max ?? 5;
      step = 0.1;
      break;
    case SliderValueType.Float0150:
      min = props.min ?? 0.1;
      max = props.max ?? 5;
      step = 0.1;
      break;
    case SliderValueType.Float0530:
      min = props.min ?? 0.5;
      max = props.max ?? 3;
      step = 0.1;
      break;
  }

  function onSliderValueChange(values: number | number[]): void {
    let value = 0;
    if (!Array.isArray(values)) value = values;
    else value = values[0];

    const options: PalWorldSettings = {};
    options[field] = value;
    settings.patch(options);
  }

  return (
    <Row className="field" gutter={20} justify={'center'} align={'center'}>
      <Row className="title" justify={'center'} align={'center'}>
        <span>{title}</span>
      </Row>
      <Slider
        min = {min}
        max = {max}
        step = {step}
        value={ settings[field] }
        onChange={ onSliderValueChange }
        style={{ width: 384 }}
        showInput={true}
      />
    </Row>
  );
}