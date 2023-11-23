import { _decorator, Component, Node } from 'cc';
import { Program } from 'moye';
const { ccclass, property } = _decorator;

@ccclass('Init')
export class Init extends Component {
    start() {
        Program.init(this.node);
        Program.start();
    }
}