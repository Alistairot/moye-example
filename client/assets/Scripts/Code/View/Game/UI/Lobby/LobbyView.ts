import { Button } from "cc";
import { ViewName } from "../ViewName";
import { LobbyViewCfg } from "./LobbyViewCfg";
import { AMoyeView, MoyeViewMgr, ViewDecorator, ViewLayer, log } from "moye";

@ViewDecorator(ViewName.Lobby, ViewLayer.NORMAL, LobbyViewCfg)
export class LobbyView extends AMoyeView {
    protected awake(): void {
        log('LobbyView awake');
    }
    protected onLoad(): void {
        log('LobbyView onLoad');
        this.node.getChildByName('btn_back_login').on(Button.EventType.CLICK, this.backToLogin, this);
    }

    protected onShow(): void {
        log('LobbyView onShow');
    }

    protected onHide(): void {
        log('LobbyView onHide');
    }

    protected destroy(): void {
        log('LobbyView destroy');
    }

    private async backToLogin() {
        await MoyeViewMgr.inst.show(ViewName.Login);
        this.dispose();
    }
}