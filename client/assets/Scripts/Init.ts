import { _decorator, Component, ImageAsset, Node, SpriteFrame, Texture2D } from 'cc';
import { MoyeAssets, Program } from 'moye';
const { ccclass, property } = _decorator;

@ccclass('Init')
export class Init extends Component {
    start() {
        Program.init(this.node);
        this.startAsync();
        // MoyeAssets.loadAssetAsync(ImageAsset, 'Images/loading/wait_1').then((res) => {
        //     console.log(res);
        // });
        // MoyeAssets.loadAssetAsync(SpriteFrame, 'Images/toggle_2_1').then((res) => {
        //     console.log(res);
        // });
    }

    private async startAsync(){
        await MoyeAssets.loadBundleAsync('Code');
        Program.start();
    }
}