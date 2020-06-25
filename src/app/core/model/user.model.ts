export class User {
    public userId: string;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public extensionName: string;
    public address: string;
    public emailAddress: string;
    public contactNumber: number;
  
    constructor (
      userId: string, 
      firstName: string, 
      middleName: string,
      lastName: string,
      extensionName: string,
      address: string,
      emailAddress: string,
      contactNumber: number,
    ) {
      this.userId = name;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.extensionName = extensionName;
      this.address = address;
      this.emailAddress = emailAddress;
      this.contactNumber = contactNumber;
    }
}
  