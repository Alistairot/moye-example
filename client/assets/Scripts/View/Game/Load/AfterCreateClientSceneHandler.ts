import { EventDecorator, AfterCreateClientScene, SceneType, AEventHandler, Scene, log, MoyeViewMgr } from "moye";
import { ViewName } from "../UI/ViewName";

@EventDecorator(AfterCreateClientScene, SceneType.CLIENT)
export class AfterCreateClientSceneHandler extends AEventHandler<AfterCreateClientScene>{
    protected run(scene: Scene, args: AfterCreateClientScene) {
        log('scene created', scene);
        MoyeViewMgr.inst.show(ViewName.Login);
    }
}