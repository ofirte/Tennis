export type Class = {
  _id?: string;
  title: string;
  level: "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+" | "C" | "C-" | "D";
  coach: string;
  location: string;
  capacity: number;
  createdBy: string;
  createdAt: Date;
};
export type RecurringClass = Class & {
  dayOfWeek:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  time: string;
};

export type ClassesResponse = {
  recurringClasses?: RecurringClassResponse[];
  events?: string[];
};

export type RecurringClassResponse = RecurringClass & {
  locationName?: string;
  coachName?: string;
}

