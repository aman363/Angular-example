export class Assessment {
    id: number;
    assessmentNo: string;
    assessmentDate: Date;
    assessmentTime: string;
    questions: string[];
    facultyId: number;
  
    constructor(
      id: number,
      assessmentNo: string,
      assessmentDate: Date,
      assessmentTime: string,
      questions: string[],
      facultyId: number
    ) {
      this.id = id;
      this.assessmentNo = assessmentNo;
      this.assessmentDate = assessmentDate;
      this.assessmentTime = assessmentTime;
      this.questions = questions;
      this.facultyId = facultyId;
    }
  }
  