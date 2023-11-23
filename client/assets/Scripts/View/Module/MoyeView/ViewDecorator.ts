import { DecoratorCollector, Type } from "moye"
import { ViewLayer } from "./ViewLayer";

export const ViewDecoratorType = "UIDecorator";

export function ViewDecorator(name: string, layer: ViewLayer) {
    return function (target: Type) {
        DecoratorCollector.inst.add(ViewDecoratorType, target, name, layer);
    }
}