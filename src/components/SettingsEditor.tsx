import { Button, Grid, Divider, Radio } from "@arco-design/web-react";
import SliderField, { SliderValueType } from './SliderField';
import TextField from './TextField';
import "@/styles/SettingsEditor.scss";
import RadioField from '@components/RadioField.tsx';
import { DeathPenaltyValues } from '@/domains/PalWorldSettings';
import { useSettingsStore } from '@/stores/SettingsStore';
const {Row} = Grid;

export default function SettingsEditor() {
  const settings = useSettingsStore();

  // const optionSettings = useSettingsStore((state) => toOptionSettings())

  return (
    <div className="settings-editor">
      <h1>服务端配置文件编辑器</h1>

      <h2>服务器配置</h2>
      <Divider />
      <TextField title="服务器名称" field={"ServerName"} placeholder={"请输入服务器名称"}></TextField>
      <TextField title="服务器描述" field={"ServerDescription"} placeholder={"请输入服务器描述"}></TextField>
      <SliderField title={"端口号"} field={"PublicPort"} type={SliderValueType.Integer} min={1025} max={65535} />
      <TextField title="管理员密码" field={"AdminPassword"} placeholder={"请输入管理员密码"}></TextField>
      <TextField title="服务器密码" field={"ServerPassword"} placeholder={"请输入服务器密码"}></TextField>
      <SliderField title={"玩家数量上限"} field={"ServerPlayerMaxNum"} type={SliderValueType.Integer} min={2} max={32} />
      <RadioField title={"登陆认证"} field={"bUseAuth"}>
        <Radio value={false}>禁用</Radio>
        <Radio value={true}>启用</Radio>
      </RadioField>

      <RadioField title={"RCON"} field={"RCONEnabled"}>
        <Radio value={false}>禁用</Radio>
        <Radio value={true}>启用</Radio>
      </RadioField>
      <SliderField title={"RCON端口号"} field={"RCONPort"} type={SliderValueType.Integer} min={1025} max={65535} />


      <RadioField title={"快速旅行"} field={"bEnableFastTravel"}>
        <Radio value={false}>禁用</Radio>
        <Radio value={true}>启用</Radio>
      </RadioField>
      <RadioField title={"选择起始点"} field={"bIsStartLocationSelectByMap"}>
        <Radio value={false}>禁用</Radio>
        <Radio value={true}>启用</Radio>
      </RadioField>


      <h2>难度配置</h2>
      <Divider />

      <SliderField title={"白天流逝速度"} field={"DayTimeSpeedRate"} type={SliderValueType.Float0150} />
      <SliderField title={"夜晚流逝速度"} field={"NightTimeSpeedRate"} type={SliderValueType.Float0150} />
      <SliderField title={"经验值倍率"} field={"ExpRate"} type={SliderValueType.Float0150} />

      <SliderField title={"捕获概率倍率"} field={"PalCaptureRate"} type={SliderValueType.Float0530} />
      <SliderField title={"帕鲁出现数量倍率"} field={"PalSpawnNumRate"} type={SliderValueType.Float0150} />

      <SliderField title={"帕鲁攻击伤害倍率"} field={"PalDamageRateAttack"} type={SliderValueType.Float0150} />
      <SliderField title={"帕鲁承受伤害倍率"} field={"PalDamageRateDefense"} type={SliderValueType.Float0150} />
      <SliderField title={"帕鲁饱食度降低倍率"} field={"PalStomachDecreaceRate"} type={SliderValueType.Float0150} />
      <SliderField title={"帕鲁耐力降低倍率"} field={"PalStaminaDecreaceRate"} type={SliderValueType.Float0150} />
      <SliderField title={"帕鲁生命值自然回复倍率"} field={"PalAutoHPRegeneRate"} type={SliderValueType.Float0150} />
      <SliderField title={"帕鲁睡眠时生命值自然回复倍率"} field={"PalAutoHpRegeneRateInSleep"} type={SliderValueType.Float0150} />

      <SliderField title={"玩家攻击伤害倍率"} field={"PlayerDamageRateAttack"} type={SliderValueType.Float0150} />
      <SliderField title={"玩家承受伤害倍率"} field={"PlayerDamageRateDefense"} type={SliderValueType.Float0150} />
      <SliderField title={"玩家饱食度降低倍率"} field={"PlayerStomachDecreaceRate"} type={SliderValueType.Float0150} />
      <SliderField title={"玩家耐力降低倍率"} field={"PlayerStaminaDecreaceRate"} type={SliderValueType.Float0150} />
      <SliderField title={"玩家生命值自然回复倍率"} field={"PlayerAutoHPRegeneRate"} type={SliderValueType.Float0150} />
      <SliderField title={"玩家睡眠时生命值自然回复倍率"} field={"PlayerAutoHpRegeneRateInSleep"} type={SliderValueType.Float0150} />

      <SliderField title={"对建筑物伤害倍率"} field={"BuildObjectDamageRate"} type={SliderValueType.Float0530} />
      <SliderField title={"建筑物的劣化速度倍率"} field={"BuildObjectDeteriorationDamageRate"} type={SliderValueType.Float} min={0} max={10} />

      <SliderField title={"世界内掉落物上限"} field={"DropItemMaxNum"} type={SliderValueType.Integer} min={0} max={5000} />
      <SliderField title={"道具采集量倍率"} field={"CollectionDropRate"} type={SliderValueType.Float0150} />
      <SliderField title={"可采集物品生命值倍率"} field={"CollectionObjectHpRate"} type={SliderValueType.Float0150} />
      <SliderField title={"可采集物品刷新间隔"} field={"CollectionObjectRespawnSpeedRate"} type={SliderValueType.Float0150} />
      <SliderField title={"道具掉落量倍率"} field={"EnemyDropItemRate"} type={SliderValueType.Float0530} />

      <RadioField title={"怪物入侵"} field={"bEnableInvaderEnemy"}>
        <Radio value={false}>禁用</Radio>
        <Radio value={true}>启用</Radio>
      </RadioField>
      <RadioField title={"死亡惩罚"} field={"DeathPenalty"}>
        <Radio value={DeathPenaltyValues.None} tip={"无"}>无</Radio>
        <Radio value={DeathPenaltyValues.Item} tip={"掉落所有物品"}>物品</Radio>
        <Radio value={DeathPenaltyValues.ItemAndEquipment} tip={"掉落所有物品和装备"}>物品+装备</Radio>
        <Radio value={DeathPenaltyValues.All} tip={"掉落所有物品、装备及帕鲁"}>所有</Radio>
      </RadioField>

      <SliderField title={"巨大蛋孵化所需时间"} field={"PalEggDefaultHatchingTime"} type={SliderValueType.Integer} min={0} max={240} />
      <SliderField title={"公会人数上限"} field={"GuildPlayerMaxNum"} type={SliderValueType.Integer} min={5} max={50} />

      <h2>其他配置</h2>
      <Divider />

      <h2>输出</h2>
      <Divider />
      <div>{settings.toOptionSettings()}</div>
    </div>
  );
}
