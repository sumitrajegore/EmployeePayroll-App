class EmployeePayrollData{

         get id() {return this._id;}
         set id(id){
             this._id=id;
         }
         get name(){ return this._name;}
         set name(name){
             let nameRegex = RegExp('^[A-Z]{1}[A-Za-z \s]{2,}$')
             if(nameRegex.test(name)) this._name = name;
             else throw "Name is Invalid!";
         }
    
         get profilePic() {return this._profilePic;}
         set profilePic(profilePic){
             this._profilePic = profilePic;
         }
    
         get gender() {return this._gender;}
         set gender(gender){
             this._gender = gender;
         }
    
         get department() {return this._department;}
         set department(department){
             this._department = department;
         }
    
         get salary() {return this._salary;}
         set salary(salary){
             this._salary = salary;
         }
    
         get notes() {return this._notes}
         set notes(notes){
             this._notes = notes;
         }
         get startDate() {return this._startDate;}
        //  set startDate(startDate){
        //     let now= new Date();
        //       if (startDate > now) throw 'start date is future date!';
        //       var diff =Math.abs(now.getTime() - startDate.getTime());
        //       if (diff / (1000*60*60*24) > 30)
        //             throw 'start date is beyond 30 Days!';
        //       this._startDate = startDate;
        //     }
        set startDate(startDate) {
            let datePassed = new Date(startDate);
            let now = new Date();
            if (now > datePassed) {
                this._startDate = startDate;
            } else throw "Start Date is Future Date!";
        }  
    
         //toString method
         toString(){

        //const options={year:"numeric", month:"long", day:"numeric"};
        //const empDate= !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-GB", options);
            
                         return (
                        "id=" +
                         this.id +
                         " : name=" +
                         this.name +
                         " : profilePic =" +
                         this.profilePic +
                         " : gender="+
                         this.gender +
                         " : Dept="+
                         this.department +
                         " : salary=" +
                         this.salary +
                         " : Notes="+
                        this.notes +
                        " : StartDate=" +
                        this.startDate 
                        //empDate
                        );                        
         }
}