import {Service} from "../";
@Service
export class EmployeService{
    salaryYear(MonthSalary:number):number{
        return MonthSalary*12;
    }
}
