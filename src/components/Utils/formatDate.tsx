export function formatDate(dateString:string) {
  const date = new Date(dateString);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const month = monthNames[date.getUTCMonth()];

  // Function to get ordinal suffix
  function getOrdinal(n:number) {
    if (n > 3 && n < 21) return 'th'; // 4\u201320
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  return `${month} ${day}${getOrdinal(day)}, ${year}`;
}