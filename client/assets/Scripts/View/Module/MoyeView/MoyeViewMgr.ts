import { Entity } from "moye";
import { AMoyeView } from "./AMoyeView";

export class MoyeViewMgr extends Entity{
    static inst: MoyeViewMgr;

    private _views: Map<string, AMoyeView> = new Map();
    private _showingViews: Set<string> = new Set();

    protected awake(): void {
        MoyeViewMgr.inst = this;
    }

    protected destroy(): void {
        MoyeViewMgr.inst = null;
    }

    show(name: string): void {
        if(this._showingViews.has(name)){
            return;
        }

        
    }
}