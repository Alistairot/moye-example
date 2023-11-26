import { AMoyeView, Entity, MoyeViewMgr, ViewDecorator, ViewLayer, log } from "moye";
import { Button, NodeEventType, v3 } from "cc";
import { ViewName } from "../ViewName";
import { TipsViewCom } from "../Tips/TipsViewCom";

@ViewDecorator(ViewName.Login, ViewLayer.NORMAL)
export class LoginViewCom extends AMoyeView {
    protected awake(): void {
        log('LoginView awake');
    }
    protected onLoad(): void {
        log('LoginView onLoad');
        this.node.getChildByName('btn_enter_game').on(Button.EventType.CLICK, this.clickEnterGame, this);
        this.node.getChildByName('btn_show_tips').on(Button.EventType.CLICK, this.showTips, this);
    }

    protected onShow(): void {
        log('LoginView onShow');
    }

    protected onHide(): void {
        log('LoginView onHide');
    }

    protected destroy(): void {
        log('LoginView destroy');
    }

    private async clickEnterGame() {
        log('you will enter lobby view');
        await MoyeViewMgr.inst.show(ViewName.Lobby);
        this.dispose();
    }

    private async showTips() {
        log('show tips');
        let tipsView = await MoyeViewMgr.inst.show(TipsViewCom);
        tipsView.setContent('hello world');
    }
}