import { Entity } from "moye";
import { AMoyeView } from "../../../Module/MoyeView/AMoyeView";
import { ViewDecorator } from "../../../Module/MoyeView/ViewDecorator";
import { ViewLayer } from "../../../Module/MoyeView/ViewLayer";

@ViewDecorator('LoginView', ViewLayer.NORMAL)
export class LoginViewCom extends AMoyeView{
}