import { expect } from "chai";
import { formatDate } from "./format-date";

describe('formatDate function', () => {
  it('should convert every not today date to format (day.month.year)', () => {
    const date = new Date('2022-10-10T10:10:10.000Z');
    
    const result = formatDate(date);

    expect(result).to.equal('10.10.2022');
  });

  it('should convert today date to format (hour:minute)', () => {
    const date = new Date();
    date.setHours(10);
    date.setMinutes(25);

    const result = formatDate(date);

    expect(result).to.equal('10:25');
  });
});
