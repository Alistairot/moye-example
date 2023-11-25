import { AMoyeView, Task, } from "moye";
import { Node, Prefab, UITransform, tween, v3 } from "cc";
import { GlobalViewCfg } from "../../../Module/MoyeView/GlobalViewCfg";

export class LobbyViewCfg extends GlobalViewCfg {
    doShowAnimation(view: AMoyeView, task: Task<any>): void {
        let layerSize = view.node.parent.getComponent(UITransform).contentSize;
        view.node.getComponent(UITransform).setContentSize(layerSize);

        view.node.setScale(0, 0, 0);
        tween(view.node).to(1, { scale: v3(1, 1, 1) }, { easing: 'sineIn' }).call(() => {
            task.setResult();
        }).start();
    }

    doHideAnimation(view: AMoyeView, task: Task<any>): void {
        view.bringToFront();
        tween(view.node).to(1, { scale: v3(0, 0, 0) }, { easing: 'sineOut' }).call(() => {
            task.setResult();
        }).start();
    }
}