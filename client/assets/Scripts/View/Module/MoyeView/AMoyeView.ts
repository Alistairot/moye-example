import { Entity } from "moye";
import { ViewLayer } from "./ViewLayer";
import { Node } from "cc";

export abstract class AMoyeView extends Entity {
    viewName: string;
    layer: ViewLayer;
    node: Node;

    protected onShown?(): void
    protected onHide?(): void

    dispose(){
        this.onHide?.();
        // notify view manager to remove this view
        super.dispose();
    }
}