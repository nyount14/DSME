export class Visit {
  public date: Date;
  public assessmentType: string;
  public assessmentNote: string;
  public planType: string;
  public planNote: string

  constructor(date: Date, assessmentType: string, assessmentNote: string, planType: string, planNote: string
  ) {
    this.date = date;
    this.assessmentType = assessmentType;
    this.assessmentNote = assessmentNote;
    this.planType = planType;
    this.planNote = planNote;
  }
}
