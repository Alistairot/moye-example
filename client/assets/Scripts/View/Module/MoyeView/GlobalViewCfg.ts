import { Node, Prefab } from "cc";
import { AssetOperationHandle, IMoyeViewConfig, MoyeAssets, TimeInfo, TimerMgr } from "moye";

export class GlobalViewCfg implements IMoyeViewConfig {
    expire: number = 3000;
    handle: AssetOperationHandle
    async load(viewName: string): Promise<Node> {
        let handle = await MoyeAssets.loadAssetAsync(Prefab, `${viewName}/Prefabs/${viewName}`);
        let node = await handle.instantiateAsync();

        this.handle = handle;

        return node;
    }
    destroy(): void {
        this.handle.dispose();
        this.handle = null;

        MoyeAssets.unloadUnusedAssets();
    }
}