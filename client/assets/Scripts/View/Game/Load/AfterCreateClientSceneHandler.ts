import { EventDecorator, AfterCreateClientScene, SceneType, AEventHandler, Scene, log } from "moye";
import { MoyeViewMgr } from "../../Module/MoyeView/MoyeViewMgr";

@EventDecorator(AfterCreateClientScene, SceneType.CLIENT)
export class AfterCreateClientSceneHandler extends AEventHandler<AfterCreateClientScene>{
    protected run(scene: Scene, args: AfterCreateClientScene) {
        log('scene created', scene);
        scene.addCom(MoyeViewMgr);
    }
}