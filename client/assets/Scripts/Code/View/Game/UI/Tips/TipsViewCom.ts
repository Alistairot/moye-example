import { AMoyeView, Entity, ViewDecorator, ViewLayer, log } from "moye";
import { Button, Label, NodeEventType, v3 } from "cc";
import { ViewName } from "../ViewName";

@ViewDecorator(ViewName.Tips, ViewLayer.INFO)
export class TipsViewCom extends AMoyeView {
    protected awake(): void {
        log("TipsView awake, in awake, you can't get this.node, this.node={0}", this.node);
    }
    protected onLoad(): void {
        log('TipsView onLoad');
        this.node.getChildByName('btn_close').on(Button.EventType.CLICK, this.dispose, this);
    }
    protected onShow(): void {
        log('TipsView onShow');
    }

    protected onHide(): void {
        log('TipsView onHide');
    }

    protected destroy(): void {
        log('TipsView destroy');
    }

    setContent(str: string){
        this.node.getChildByName('content').getComponent(Label).string = str;
    }
}