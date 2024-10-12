import RecurringClass from '../models/Classes/RecurringClass';

// Service to create a recurring class
export const createRecurringClass = async (data: any) => {
  console.log(data, "data")
  const recurringClass = new RecurringClass(data);
  return await recurringClass.save();
};
