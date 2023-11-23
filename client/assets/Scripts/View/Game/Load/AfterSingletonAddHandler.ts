import { AEventHandler, AfterSingletonAdd, EventDecorator, Logger, Scene, SceneType, log } from "moye";
import { CocosLogger } from "../../Module/Logger/CocosLogger";

@EventDecorator(AfterSingletonAdd, SceneType.NONE)
export class AfterSingletonAddHandler extends AEventHandler<AfterSingletonAdd>{
    protected run(scene: Scene, args: AfterSingletonAdd) {
        switch (args.singletonType) {
            case Logger: {
                Logger.getInst().iLog = new CocosLogger();
                log('init cocos logger');
                break
            }
            default: {
            }
        }
    }
}