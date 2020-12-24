export interface User {

    id?:number;
    image:string[];
    userId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    extensionName: string;
    address: string;
    emailAddress: string;
    contactNumber: number;
  
    // constructor (
    //   userId: string, 
    //   firstName: string, 
    //   middleName: string,
    //   lastName: string,
    //   extensionName: string,
    //   address: string,
    //   emailAddress: string,
    //   contactNumber: number,
    // ) {
    //   this.userId = name;
    //   this.firstName = firstName;
    //   this.middleName = middleName;
    //   this.lastName = lastName;
    //   this.extensionName = extensionName;
    //   this.address = address;
    //   this.emailAddress = emailAddress;
    //   this.contactNumber = contactNumber;
    // }
}
  