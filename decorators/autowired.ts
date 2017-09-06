import {Services} from "../box/box";
import "reflect-metadata";
function Autowired() {
    return function (target: any, propertyKey: string) {
        let t = Reflect.getMetadata("design:type", target, propertyKey);
        console.log(t);
        let instance;
        Services.forEach(function(elem,index){
            if(elem.className == t.name){
                instance = new elem.Constructor();
            }
        })
        target[propertyKey] = instance;
    };
}
export {Autowired };