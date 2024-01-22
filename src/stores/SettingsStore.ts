import { create } from 'zustand';
import PalWorldSettings, { Default } from '@/domains/PalWorldSettings';

type State = PalWorldSettings;
type Actions = {
  patch: (options: State) => void;
};
type Selectors = {
  toOptionSettings: () => string;
};

type StoreType = State & Actions & Selectors;

export const useSettingsStore = create<StoreType>((set,get) => ({
  // state
  ...Default,

  // actions
  patch: (options: State) => set((state) => ({...state, ...options})),

  // selectors
  toOptionSettings: () => {
    const options: string[] = [];

    if (get().Difficulty != Default.Difficulty) {
      options.push(`Difficulty=${get().Difficulty}`);
    }

    if (get().DayTimeSpeedRate != Default.DayTimeSpeedRate) {
      options.push(`DayTimeSpeedRate=${get().DayTimeSpeedRate?.toFixed(6)}`);
    }

    if (get().NightTimeSpeedRate != Default.NightTimeSpeedRate) {
      options.push(`NightTimeSpeedRate=${get().NightTimeSpeedRate?.toFixed(6)}`);
    }

    if (get().ExpRate != Default.ExpRate) {
      options.push(`ExpRate=${get().ExpRate?.toFixed(6)}`);
    }

    if (get().PalCaptureRate != Default.PalCaptureRate) {
      options.push(`PalCaptureRate=${get().PalCaptureRate?.toFixed(6)}`);
    }

    if (get().PalSpawnNumRate != Default.PalSpawnNumRate) {
      options.push(`PalSpawnNumRate=${get().PalSpawnNumRate?.toFixed(6)}`);
    }

    if (get().PalDamageRateAttack != Default.PalDamageRateAttack) {
      options.push(`PalDamageRateAttack=${get().PalDamageRateAttack?.toFixed(6)}`);
    }

    if (get().PalDamageRateDefense != Default.PalDamageRateDefense) {
      options.push(`PalDamageRateDefense=${get().PalDamageRateDefense?.toFixed(6)}`);
    }

    if (get().PlayerDamageRateAttack != Default.PlayerDamageRateAttack) {
      options.push(`PlayerDamageRateAttack=${get().PlayerDamageRateAttack?.toFixed(6)}`);
    }

    if (get().PlayerDamageRateDefense != Default.PlayerDamageRateDefense) {
      options.push(`PlayerDamageRateDefense=${get().PlayerDamageRateDefense?.toFixed(6)}`);
    }

    if (get().PlayerStomachDecreaceRate != Default.PlayerStomachDecreaceRate) {
      options.push(`PlayerStomachDecreaceRate=${get().PlayerStomachDecreaceRate?.toFixed(6)}`);
    }

    if (get().PlayerStaminaDecreaceRate != Default.PlayerStaminaDecreaceRate) {
      options.push(`PlayerStaminaDecreaceRate=${get().PlayerStaminaDecreaceRate?.toFixed(6)}`);
    }

    if (get().PlayerAutoHPRegeneRate != Default.PlayerAutoHPRegeneRate) {
      options.push(`PlayerAutoHPRegeneRate=${get().PlayerAutoHPRegeneRate?.toFixed(6)}`);
    }

    if (get().PlayerAutoHpRegeneRateInSleep != Default.PlayerAutoHpRegeneRateInSleep) {
      options.push(`PlayerAutoHpRegeneRateInSleep=${get().PlayerAutoHpRegeneRateInSleep?.toFixed(6)}`);
    }

    if (get().PalStomachDecreaceRate != Default.PalStomachDecreaceRate) {
      options.push(`PalStomachDecreaceRate=${get().PalStomachDecreaceRate?.toFixed(6)}`);
    }

    if (get().PalStaminaDecreaceRate != Default.PalStaminaDecreaceRate) {
      options.push(`PalStaminaDecreaceRate=${get().PalStaminaDecreaceRate?.toFixed(6)}`);
    }

    if (get().PalAutoHPRegeneRate != Default.PalAutoHPRegeneRate) {
      options.push(`PalAutoHPRegeneRate=${get().PalAutoHPRegeneRate?.toFixed(6)}`);
    }

    if (get().PalAutoHpRegeneRateInSleep != Default.PalAutoHpRegeneRateInSleep) {
      options.push(`PalAutoHpRegeneRateInSleep=${get().PalAutoHpRegeneRateInSleep?.toFixed(6)}`);
    }

    if (get().BuildObjectDamageRate != Default.BuildObjectDamageRate) {
      options.push(`BuildObjectDamageRate=${get().BuildObjectDamageRate?.toFixed(6)}`);
    }

    if (get().BuildObjectDeteriorationDamageRate != Default.BuildObjectDeteriorationDamageRate) {
      options.push(`BuildObjectDeteriorationDamageRate=${get().BuildObjectDeteriorationDamageRate?.toFixed(6)}`);
    }

    if (get().CollectionDropRate != Default.CollectionDropRate) {
      options.push(`CollectionDropRate=${get().CollectionDropRate?.toFixed(6)}`);
    }

    if (get().CollectionObjectHpRate != Default.CollectionObjectHpRate) {
      options.push(`CollectionObjectHpRate=${get().CollectionObjectHpRate?.toFixed(6)}`);
    }

    if (get().CollectionObjectRespawnSpeedRate != Default.CollectionObjectRespawnSpeedRate) {
      options.push(`CollectionObjectRespawnSpeedRate=${get().CollectionObjectRespawnSpeedRate?.toFixed(6)}`);
    }

    if (get().EnemyDropItemRate != Default.EnemyDropItemRate) {
      options.push(`EnemyDropItemRate=${get().EnemyDropItemRate?.toFixed(6)}`);
    }

    if (get().DeathPenalty != Default.DeathPenalty) {
      options.push(`DeathPenalty=${get().DeathPenalty}`);
    }

    if (get().bEnablePlayerToPlayerDamage != Default.bEnablePlayerToPlayerDamage) {
      options.push(`bEnablePlayerToPlayerDamage=${get().bEnablePlayerToPlayerDamage ? "True" : "False"}`);
    }

    if (get().bEnableFriendlyFire != Default.bEnableFriendlyFire) {
      options.push(`bEnableFriendlyFire=${get().bEnableFriendlyFire ? "True" : "False"}`);
    }

    if (get().bEnableInvaderEnemy != Default.bEnableInvaderEnemy) {
      options.push(`bEnableInvaderEnemy=${get().bEnableInvaderEnemy ? "True" : "False"}`);
    }

    if (get().bActiveUNKO != Default.bActiveUNKO) {
      options.push(`bActiveUNKO=${get().bActiveUNKO ? "True" : "False"}`);
    }

    if (get().bEnableAimAssistPad != Default.bEnableAimAssistPad) {
      options.push(`bEnableAimAssistPad=${get().bEnableAimAssistPad ? "True" : "False"}`);
    }

    if (get().bEnableAimAssistKeyboard != Default.bEnableAimAssistKeyboard) {
      options.push(`bEnableAimAssistKeyboard=${get().bEnableAimAssistKeyboard ? "True" : "False"}`);
    }

    if (get().DropItemMaxNum != Default.DropItemMaxNum) {
      options.push(`DropItemMaxNum=${get().DropItemMaxNum}`);
    }

    if (get().DropItemMaxNum_UNKO != Default.DropItemMaxNum_UNKO) {
      options.push(`DropItemMaxNum_UNKO=${get().DropItemMaxNum_UNKO}`);
    }

    if (get().BaseCampMaxNum != Default.BaseCampMaxNum) {
      options.push(`BaseCampMaxNum=${get().BaseCampMaxNum}`);
    }

    if (get().BaseCampWorkerMaxNum != Default.BaseCampWorkerMaxNum) {
      options.push(`BaseCampWorkerMaxNum=${get().BaseCampWorkerMaxNum}`);
    }

    if (get().DropItemAliveMaxHours != Default.DropItemAliveMaxHours) {
      options.push(`DropItemAliveMaxHours=${get().DropItemAliveMaxHours?.toFixed(6)}`);
    }

    if (get().bAutoResetGuildNoOnlinePlayers != Default.bAutoResetGuildNoOnlinePlayers) {
      options.push(`bAutoResetGuildNoOnlinePlayers=${get().bAutoResetGuildNoOnlinePlayers ? "True" : "False"}`);
    }

    if (get().AutoResetGuildTimeNoOnlinePlayers != Default.AutoResetGuildTimeNoOnlinePlayers) {
      options.push(`AutoResetGuildTimeNoOnlinePlayers=${get().AutoResetGuildTimeNoOnlinePlayers?.toFixed(6)}`);
    }

    if (get().GuildPlayerMaxNum != Default.GuildPlayerMaxNum) {
      options.push(`GuildPlayerMaxNum=${get().GuildPlayerMaxNum}`);
    }

    if (get().PalEggDefaultHatchingTime != Default.PalEggDefaultHatchingTime) {
      options.push(`PalEggDefaultHatchingTime=${get().PalEggDefaultHatchingTime?.toFixed(6)}`);
    }

    if (get().WorkSpeedRate != Default.WorkSpeedRate) {
      options.push(`WorkSpeedRate=${get().WorkSpeedRate?.toFixed(6)}`);
    }

    if (get().bIsMultiplay != Default.bIsMultiplay) {
      options.push(`bIsMultiplay=${get().bIsMultiplay ? "True" : "False"}`);
    }

    if (get().bIsPvP != Default.bIsPvP) {
      options.push(`bIsPvP=${get().bIsPvP ? "True" : "False"}`);
    }

    if (get().bCanPickupOtherGuildDeathPenaltyDrop != Default.bCanPickupOtherGuildDeathPenaltyDrop) {
      options.push(`bCanPickupOtherGuildDeathPenaltyDrop=${get().bCanPickupOtherGuildDeathPenaltyDrop ? "True" : "False"}`);
    }

    if (get().bEnableNonLoginPenalty != Default.bEnableNonLoginPenalty) {
      options.push(`bEnableNonLoginPenalty=${get().bEnableNonLoginPenalty ? "True" : "False"}`);
    }

    if (get().bEnableFastTravel != Default.bEnableFastTravel) {
      options.push(`bEnableFastTravel=${get().bEnableFastTravel ? "True" : "False"}`);
    }

    if (get().bIsStartLocationSelectByMap != Default.bIsStartLocationSelectByMap) {
      options.push(`bIsStartLocationSelectByMap=${get().bIsStartLocationSelectByMap ? "True" : "False"}`);
    }

    if (get().bExistPlayerAfterLogout != Default.bExistPlayerAfterLogout) {
      options.push(`bExistPlayerAfterLogout=${get().bExistPlayerAfterLogout ? "True" : "False"}`);
    }

    if (get().bEnableDefenseOtherGuildPlayer != Default.bEnableDefenseOtherGuildPlayer) {
      options.push(`bEnableDefenseOtherGuildPlayer=${get().bEnableDefenseOtherGuildPlayer ? "True" : "False"}`);
    }

    if (get().CoopPlayerMaxNum != Default.CoopPlayerMaxNum) {
      options.push(`CoopPlayerMaxNum=${get().CoopPlayerMaxNum}`);
    }

    if (get().ServerPlayerMaxNum != Default.ServerPlayerMaxNum) {
      options.push(`ServerPlayerMaxNum=${get().ServerPlayerMaxNum}`);
    }

    if (get().ServerName != Default.ServerName) {
      options.push(`ServerName="${get().ServerName}"`);
    }

    if (get().ServerDescription != Default.ServerDescription) {
      options.push(`ServerDescription="${get().ServerDescription}"`);
    }

    if (get().AdminPassword != Default.AdminPassword) {
      options.push(`AdminPassword="${get().AdminPassword}"`);
    }

    if (get().ServerPassword != Default.ServerPassword) {
      options.push(`ServerPassword="${get().ServerPassword}"`);
    }

    if (get().PublicPort != Default.PublicPort) {
      options.push(`PublicPort=${get().PublicPort}`);
    }

    if (get().PublicIP != Default.PublicIP) {
      options.push(`PublicIP="${get().PublicIP}"`);
    }

    if (get().RCONEnabled != Default.RCONEnabled) {
      options.push(`RCONEnabled=${get().RCONEnabled ? "True" : "False"}`);
    }

    if (get().RCONPort != Default.RCONPort) {
      options.push(`RCONPort=${get().RCONPort}`);
    }

    if (get().Region != Default.Region) {
      options.push(`Region="${get().Region}"`);
    }

    if (get().bUseAuth != Default.bUseAuth) {
      options.push(`bUseAuth=${get().bUseAuth ? "True" : "False"}`);
    }

    if (get().BanListURL != Default.BanListURL) {
      options.push(`BanListURL="${get().BanListURL}"`);
    }

    return `OptionSettings=(${options.join(',')})`;
  },
}));
