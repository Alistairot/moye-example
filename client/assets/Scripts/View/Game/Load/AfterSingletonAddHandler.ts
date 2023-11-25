import { AEventHandler, AfterSingletonAdd, EventDecorator, Logger, MoyeViewMgr, Root, Scene, SceneType, log } from "moye";
import { CocosLogger } from "../../Module/Logger/CocosLogger";
import { find } from "cc";
import { GlobalViewCfg } from "../../Module/MoyeView/GlobalViewCfg";

@EventDecorator(AfterSingletonAdd, SceneType.NONE)
export class AfterSingletonAddHandler extends AEventHandler<AfterSingletonAdd>{
    protected run(scene: Scene, args: AfterSingletonAdd) {
        switch (args.singletonType) {
            case Logger: {
                Logger.get().iLog = new CocosLogger();
                log('init cocos logger');
                break
            }
            case Root: {
                let uiRoot = find('Root/UI');
                Root.get().scene.addCom(MoyeViewMgr).init(uiRoot, GlobalViewCfg);
                break
            }
            default: {
            }
        }
    }
}