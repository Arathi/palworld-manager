import { Input, Grid } from '@arco-design/web-react';
import PalWorldSettings, { FieldName } from '@/domains/PalWorldSettings';
import { useSettingsStore } from '@/stores/SettingsStore.ts';

const {Row} = Grid;

type Props = {
  title: string;
  field: FieldName;
  placeholder?: string;
};
export default function TextField(props: Props) {
  const {
    title,
    field,
    placeholder = "请输入字符串"
  } = props;

  const settings = useSettingsStore();

  function onTextValueChange(value: string): void {
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
      <Input
        // @ts-ignore
        value={settings[field]}
        style={{ width: 384 }}
        placeholder={placeholder}
        onChange={onTextValueChange}
      />
    </Row>
  );
}