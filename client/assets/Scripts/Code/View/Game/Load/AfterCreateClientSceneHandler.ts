import { EventDecorator, AfterCreateClientScene, SceneType, AEventHandler, Scene, log, MoyeViewMgr, MoyeAssets } from "moye";
import { ViewName } from "../UI/ViewName";

@EventDecorator(AfterCreateClientScene, SceneType.CLIENT)
export class AfterCreateClientSceneHandler extends AEventHandler<AfterCreateClientScene>{
    protected run(scene: Scene, args: AfterCreateClientScene) {
        log('scene created', scene);
        // on code bundle loaded, reload view
        MoyeViewMgr.inst.reload();

        this.runAsync(scene, args);
    }

    private async runAsync(scene: Scene, args: AfterCreateClientScene) {
        // load common bundle
        let bundle = await MoyeAssets.loadBundleAsync('Common');
        bundle.isAutoRelease = false;

        MoyeViewMgr.inst.show(ViewName.Login);
    }
}