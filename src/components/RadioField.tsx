import PalWorldSettings, { FieldName } from '@/domains/PalWorldSettings';
import { Grid, Radio } from '@arco-design/web-react';
import { useSettingsStore } from '@/stores/SettingsStore';
import { ReactNode } from 'react';

const {Row} = Grid;
const RadioGroup = Radio.Group;

type Props = {
  title: string;
  field: FieldName;
  children: ReactNode[];
};
export default function RadioField({title, field, children}: Props) {
  const settings = useSettingsStore();

  function onChange(value: unknown) {
    const options: PalWorldSettings = {};
    // @ts-ignore
    options[field] = value;
    settings.patch(options);
  }

  return (
    <Row className="field" justify={'center'} align={'center'}>
      <Row className="title">
        <span>{title}</span>
      </Row>
      <RadioGroup
        type="button"
        value={settings[field]}
        style={{ width: 384 }}
        onChange={onChange}
      >
        <Row justify={'start'}>
          { children }
        </Row>
      </RadioGroup>
    </Row>
  );
}