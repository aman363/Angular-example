
export class Course {
    id: number;
    cName: string;
    cDescription: string;
  
    constructor(id: number, cName: string, cDescription: string) {
      this.id = id;
      this.cName = cName;
      this.cDescription = cDescription;
    }
  }
  