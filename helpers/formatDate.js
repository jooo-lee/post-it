function formatDate(date) {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('en-US', dateOptions);
}

module.exports = formatDate;
