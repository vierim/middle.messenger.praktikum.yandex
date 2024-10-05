export function formatDate(date: Date): string {
  const inboxDate = new Date(date);
  const currentDate = new Date();
  
  let formatter;

  if (inboxDate.getDate() === currentDate.getDate()) {
    formatter = new Intl.DateTimeFormat('ru', {
      timeZone: 'Europe/Moscow',
      hour: 'numeric',
      minute: 'numeric',
    });
  } else {
    formatter = new Intl.DateTimeFormat('ru', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  }

  return formatter.format(inboxDate);
}
