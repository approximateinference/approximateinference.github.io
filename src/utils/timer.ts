import { TZDate } from "@date-fns/tz";
import { differenceInMilliseconds } from "date-fns";

export function calculateTimeLeft(
  year: number,
  month: number,
  day: number,
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const targetDate = new TZDate(year, month - 1, day, 23, 59, 59, "-12");
  const now = new TZDate(Date.now(), "-12"); // AoE is UTC-12

  const timeDifference = differenceInMilliseconds(targetDate, now);

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
