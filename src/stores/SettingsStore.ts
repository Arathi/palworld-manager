import { create } from 'zustand';
import PalWorldSettings, { Default as DefaultPalWorldSettings } from '@/domains/PalWorldSettings';
import PreviewSettings from '@/domains/PreviewSettings';

type State = PalWorldSettings & PreviewSettings;
type Actions = {
  patch: (options: State) => void;
};
type Selectors = {
  toOptionSettings: () => string;
};

type StoreType = State & Actions & Selectors;

const DefaultPreviewSettings: PreviewSettings = {
  exportAll: false,
};

export const useSettingsStore = create<StoreType>((set,get) => ({
  // state
  ...DefaultPalWorldSettings,
  ...DefaultPreviewSettings,

  // actions
  patch: (options: State) => set((state) => ({...state, ...options})),

  // selectors
  toOptionSettings: () => {
    const options: string[] = [];

    const exportAll = get().exportAll;

    if (exportAll || get().Difficulty != DefaultPalWorldSettings.Difficulty) {
      options.push(`Difficulty=${get().Difficulty}`);
    }

    if (exportAll || get().DayTimeSpeedRate != DefaultPalWorldSettings.DayTimeSpeedRate) {
      options.push(`DayTimeSpeedRate=${get().DayTimeSpeedRate?.toFixed(6)}`);
    }

    if (exportAll || get().NightTimeSpeedRate != DefaultPalWorldSettings.NightTimeSpeedRate) {
      options.push(`NightTimeSpeedRate=${get().NightTimeSpeedRate?.toFixed(6)}`);
    }

    if (exportAll || get().ExpRate != DefaultPalWorldSettings.ExpRate) {
      options.push(`ExpRate=${get().ExpRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalCaptureRate != DefaultPalWorldSettings.PalCaptureRate) {
      options.push(`PalCaptureRate=${get().PalCaptureRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalSpawnNumRate != DefaultPalWorldSettings.PalSpawnNumRate) {
      options.push(`PalSpawnNumRate=${get().PalSpawnNumRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalDamageRateAttack != DefaultPalWorldSettings.PalDamageRateAttack) {
      options.push(`PalDamageRateAttack=${get().PalDamageRateAttack?.toFixed(6)}`);
    }

    if (exportAll || get().PalDamageRateDefense != DefaultPalWorldSettings.PalDamageRateDefense) {
      options.push(`PalDamageRateDefense=${get().PalDamageRateDefense?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerDamageRateAttack != DefaultPalWorldSettings.PlayerDamageRateAttack) {
      options.push(`PlayerDamageRateAttack=${get().PlayerDamageRateAttack?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerDamageRateDefense != DefaultPalWorldSettings.PlayerDamageRateDefense) {
      options.push(`PlayerDamageRateDefense=${get().PlayerDamageRateDefense?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerStomachDecreaceRate != DefaultPalWorldSettings.PlayerStomachDecreaceRate) {
      options.push(`PlayerStomachDecreaceRate=${get().PlayerStomachDecreaceRate?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerStaminaDecreaceRate != DefaultPalWorldSettings.PlayerStaminaDecreaceRate) {
      options.push(`PlayerStaminaDecreaceRate=${get().PlayerStaminaDecreaceRate?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerAutoHPRegeneRate != DefaultPalWorldSettings.PlayerAutoHPRegeneRate) {
      options.push(`PlayerAutoHPRegeneRate=${get().PlayerAutoHPRegeneRate?.toFixed(6)}`);
    }

    if (exportAll || get().PlayerAutoHpRegeneRateInSleep != DefaultPalWorldSettings.PlayerAutoHpRegeneRateInSleep) {
      options.push(`PlayerAutoHpRegeneRateInSleep=${get().PlayerAutoHpRegeneRateInSleep?.toFixed(6)}`);
    }

    if (exportAll || get().PalStomachDecreaceRate != DefaultPalWorldSettings.PalStomachDecreaceRate) {
      options.push(`PalStomachDecreaceRate=${get().PalStomachDecreaceRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalStaminaDecreaceRate != DefaultPalWorldSettings.PalStaminaDecreaceRate) {
      options.push(`PalStaminaDecreaceRate=${get().PalStaminaDecreaceRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalAutoHPRegeneRate != DefaultPalWorldSettings.PalAutoHPRegeneRate) {
      options.push(`PalAutoHPRegeneRate=${get().PalAutoHPRegeneRate?.toFixed(6)}`);
    }

    if (exportAll || get().PalAutoHpRegeneRateInSleep != DefaultPalWorldSettings.PalAutoHpRegeneRateInSleep) {
      options.push(`PalAutoHpRegeneRateInSleep=${get().PalAutoHpRegeneRateInSleep?.toFixed(6)}`);
    }

    if (exportAll || get().BuildObjectDamageRate != DefaultPalWorldSettings.BuildObjectDamageRate) {
      options.push(`BuildObjectDamageRate=${get().BuildObjectDamageRate?.toFixed(6)}`);
    }

    if (exportAll || get().BuildObjectDeteriorationDamageRate != DefaultPalWorldSettings.BuildObjectDeteriorationDamageRate) {
      options.push(`BuildObjectDeteriorationDamageRate=${get().BuildObjectDeteriorationDamageRate?.toFixed(6)}`);
    }

    if (exportAll || get().CollectionDropRate != DefaultPalWorldSettings.CollectionDropRate) {
      options.push(`CollectionDropRate=${get().CollectionDropRate?.toFixed(6)}`);
    }

    if (exportAll || get().CollectionObjectHpRate != DefaultPalWorldSettings.CollectionObjectHpRate) {
      options.push(`CollectionObjectHpRate=${get().CollectionObjectHpRate?.toFixed(6)}`);
    }

    if (exportAll || get().CollectionObjectRespawnSpeedRate != DefaultPalWorldSettings.CollectionObjectRespawnSpeedRate) {
      options.push(`CollectionObjectRespawnSpeedRate=${get().CollectionObjectRespawnSpeedRate?.toFixed(6)}`);
    }

    if (exportAll || get().EnemyDropItemRate != DefaultPalWorldSettings.EnemyDropItemRate) {
      options.push(`EnemyDropItemRate=${get().EnemyDropItemRate?.toFixed(6)}`);
    }

    if (exportAll || get().DeathPenalty != DefaultPalWorldSettings.DeathPenalty) {
      options.push(`DeathPenalty=${get().DeathPenalty}`);
    }

    if (exportAll || get().bEnablePlayerToPlayerDamage != DefaultPalWorldSettings.bEnablePlayerToPlayerDamage) {
      options.push(`bEnablePlayerToPlayerDamage=${get().bEnablePlayerToPlayerDamage ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableFriendlyFire != DefaultPalWorldSettings.bEnableFriendlyFire) {
      options.push(`bEnableFriendlyFire=${get().bEnableFriendlyFire ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableInvaderEnemy != DefaultPalWorldSettings.bEnableInvaderEnemy) {
      options.push(`bEnableInvaderEnemy=${get().bEnableInvaderEnemy ? "True" : "False"}`);
    }

    if (exportAll || get().bActiveUNKO != DefaultPalWorldSettings.bActiveUNKO) {
      options.push(`bActiveUNKO=${get().bActiveUNKO ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableAimAssistPad != DefaultPalWorldSettings.bEnableAimAssistPad) {
      options.push(`bEnableAimAssistPad=${get().bEnableAimAssistPad ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableAimAssistKeyboard != DefaultPalWorldSettings.bEnableAimAssistKeyboard) {
      options.push(`bEnableAimAssistKeyboard=${get().bEnableAimAssistKeyboard ? "True" : "False"}`);
    }

    if (exportAll || get().DropItemMaxNum != DefaultPalWorldSettings.DropItemMaxNum) {
      options.push(`DropItemMaxNum=${get().DropItemMaxNum}`);
    }

    if (exportAll || get().DropItemMaxNum_UNKO != DefaultPalWorldSettings.DropItemMaxNum_UNKO) {
      options.push(`DropItemMaxNum_UNKO=${get().DropItemMaxNum_UNKO}`);
    }

    if (exportAll || get().BaseCampMaxNum != DefaultPalWorldSettings.BaseCampMaxNum) {
      options.push(`BaseCampMaxNum=${get().BaseCampMaxNum}`);
    }

    if (exportAll || get().BaseCampWorkerMaxNum != DefaultPalWorldSettings.BaseCampWorkerMaxNum) {
      options.push(`BaseCampWorkerMaxNum=${get().BaseCampWorkerMaxNum}`);
    }

    if (exportAll || get().DropItemAliveMaxHours != DefaultPalWorldSettings.DropItemAliveMaxHours) {
      options.push(`DropItemAliveMaxHours=${get().DropItemAliveMaxHours?.toFixed(6)}`);
    }

    if (exportAll || get().bAutoResetGuildNoOnlinePlayers != DefaultPalWorldSettings.bAutoResetGuildNoOnlinePlayers) {
      options.push(`bAutoResetGuildNoOnlinePlayers=${get().bAutoResetGuildNoOnlinePlayers ? "True" : "False"}`);
    }

    if (exportAll || get().AutoResetGuildTimeNoOnlinePlayers != DefaultPalWorldSettings.AutoResetGuildTimeNoOnlinePlayers) {
      options.push(`AutoResetGuildTimeNoOnlinePlayers=${get().AutoResetGuildTimeNoOnlinePlayers?.toFixed(6)}`);
    }

    if (exportAll || get().GuildPlayerMaxNum != DefaultPalWorldSettings.GuildPlayerMaxNum) {
      options.push(`GuildPlayerMaxNum=${get().GuildPlayerMaxNum}`);
    }

    if (exportAll || get().PalEggDefaultHatchingTime != DefaultPalWorldSettings.PalEggDefaultHatchingTime) {
      options.push(`PalEggDefaultHatchingTime=${get().PalEggDefaultHatchingTime?.toFixed(6)}`);
    }

    if (exportAll || get().WorkSpeedRate != DefaultPalWorldSettings.WorkSpeedRate) {
      options.push(`WorkSpeedRate=${get().WorkSpeedRate?.toFixed(6)}`);
    }

    if (exportAll || get().bIsMultiplay != DefaultPalWorldSettings.bIsMultiplay) {
      options.push(`bIsMultiplay=${get().bIsMultiplay ? "True" : "False"}`);
    }

    if (exportAll || get().bIsPvP != DefaultPalWorldSettings.bIsPvP) {
      options.push(`bIsPvP=${get().bIsPvP ? "True" : "False"}`);
    }

    if (exportAll || get().bCanPickupOtherGuildDeathPenaltyDrop != DefaultPalWorldSettings.bCanPickupOtherGuildDeathPenaltyDrop) {
      options.push(`bCanPickupOtherGuildDeathPenaltyDrop=${get().bCanPickupOtherGuildDeathPenaltyDrop ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableNonLoginPenalty != DefaultPalWorldSettings.bEnableNonLoginPenalty) {
      options.push(`bEnableNonLoginPenalty=${get().bEnableNonLoginPenalty ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableFastTravel != DefaultPalWorldSettings.bEnableFastTravel) {
      options.push(`bEnableFastTravel=${get().bEnableFastTravel ? "True" : "False"}`);
    }

    if (exportAll || get().bIsStartLocationSelectByMap != DefaultPalWorldSettings.bIsStartLocationSelectByMap) {
      options.push(`bIsStartLocationSelectByMap=${get().bIsStartLocationSelectByMap ? "True" : "False"}`);
    }

    if (exportAll || get().bExistPlayerAfterLogout != DefaultPalWorldSettings.bExistPlayerAfterLogout) {
      options.push(`bExistPlayerAfterLogout=${get().bExistPlayerAfterLogout ? "True" : "False"}`);
    }

    if (exportAll || get().bEnableDefenseOtherGuildPlayer != DefaultPalWorldSettings.bEnableDefenseOtherGuildPlayer) {
      options.push(`bEnableDefenseOtherGuildPlayer=${get().bEnableDefenseOtherGuildPlayer ? "True" : "False"}`);
    }

    if (exportAll || get().CoopPlayerMaxNum != DefaultPalWorldSettings.CoopPlayerMaxNum) {
      options.push(`CoopPlayerMaxNum=${get().CoopPlayerMaxNum}`);
    }

    if (exportAll || get().ServerPlayerMaxNum != DefaultPalWorldSettings.ServerPlayerMaxNum) {
      options.push(`ServerPlayerMaxNum=${get().ServerPlayerMaxNum}`);
    }

    if (exportAll || get().ServerName != DefaultPalWorldSettings.ServerName) {
      options.push(`ServerName="${get().ServerName}"`);
    }

    if (exportAll || get().ServerDescription != DefaultPalWorldSettings.ServerDescription) {
      options.push(`ServerDescription="${get().ServerDescription}"`);
    }

    if (exportAll || get().AdminPassword != DefaultPalWorldSettings.AdminPassword) {
      options.push(`AdminPassword="${get().AdminPassword}"`);
    }

    if (exportAll || get().ServerPassword != DefaultPalWorldSettings.ServerPassword) {
      options.push(`ServerPassword="${get().ServerPassword}"`);
    }

    if (exportAll || get().PublicPort != DefaultPalWorldSettings.PublicPort) {
      options.push(`PublicPort=${get().PublicPort}`);
    }

    if (exportAll || get().PublicIP != DefaultPalWorldSettings.PublicIP) {
      options.push(`PublicIP="${get().PublicIP}"`);
    }

    if (exportAll || get().RCONEnabled != DefaultPalWorldSettings.RCONEnabled) {
      options.push(`RCONEnabled=${get().RCONEnabled ? "True" : "False"}`);
    }

    if (exportAll || get().RCONPort != DefaultPalWorldSettings.RCONPort) {
      options.push(`RCONPort=${get().RCONPort}`);
    }

    if (exportAll || get().Region != DefaultPalWorldSettings.Region) {
      options.push(`Region="${get().Region}"`);
    }

    if (exportAll || get().bUseAuth != DefaultPalWorldSettings.bUseAuth) {
      options.push(`bUseAuth=${get().bUseAuth ? "True" : "False"}`);
    }

    if (exportAll || get().BanListURL != DefaultPalWorldSettings.BanListURL) {
      options.push(`BanListURL="${get().BanListURL}"`);
    }

    return `OptionSettings=(${options.join(',')})`;
  },
}));
