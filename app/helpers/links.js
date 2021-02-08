/* eslint-disable quote-props */
function getPostMonth(date) {
  const numericMonth = date.substr(5, 2);
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  };
  return months[numericMonth];
}

function getPostYear(date) {
  return date.substr(0, 4);
}

function assembleLinksData(items) {
  const links = [];
  let link = {};

  for (let i = 0; i < items.length; i += 1) {
    const postPublihsedDate = (items[i].published);
    const year = getPostYear(postPublihsedDate);
    const month = getPostMonth(postPublihsedDate);
    const post = {
      title: items[i].title,
      id: items[i].id,
    };
    if (!links.some((l) => l.year === year)) {
      link = {
        year,
        months: [],
      };
      links.push(link);
    }
    const currentYear = links.filter((l) => l.year === year);
    if (!currentYear[0].months.some((m) => m.month === month)) {
      currentYear[0].months.push({ month, posts: [] });
    }

    for (let j = 0; j < currentYear[0].months.length; j += 1) {
      if (currentYear[0].months[j].month === month) {
        currentYear[0].months[j].posts.push(post);
      }
    }
  }
  // console.log(links);
  return links;
}

module.exports = { assembleLinksData };
