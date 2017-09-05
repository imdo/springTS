import { Service } from "../decorators/service";
@Service
class PersonService{
    public name:string;
    sayName(){
        return "name";
    }
}
export { PersonService };