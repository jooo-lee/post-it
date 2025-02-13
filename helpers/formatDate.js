function formatDate(date) {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  return dateFormat.format(date);
}

module.exports = formatDate;
