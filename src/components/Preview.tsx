import { Input, Grid, Switch } from '@arco-design/web-react';
import { useSettingsStore } from '@/stores/SettingsStore';
import "@/styles/Preview.scss";

const TextArea = Input.TextArea;
const { Row } = Grid;

export default function Preview() {
  const settings = useSettingsStore();
  const exportAll = useSettingsStore((state) => state.exportAll);

  return (
    <div className="preview">
      <Row style={{padding: 8, paddingBottom: 0}}>
        <label>
          导出所有字段：
          <Switch
            size={"small"}
            checked={exportAll}
            onChange={(value) => settings.patch({exportAll: value})}
          />
        </label>
      </Row>
      <Row style={{flex: 1}}>
        <TextArea
          style={{width: 360, height: '100%'}}
          value={`[/Script/Pal.PalGameWorldSettings]\n${settings.toOptionSettings()}`}
          disabled
        />
      </Row>
    </div>
  );
}
