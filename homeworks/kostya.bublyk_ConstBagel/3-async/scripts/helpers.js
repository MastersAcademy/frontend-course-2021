const url = 'https://jsonplaceholder.typicode.com/posts';
/**
 * get json data from response
 */
async function getArticles() {
  const response = await fetch(url);
  return response.json();
}
/**
 * object with functions for sorting
 */
const orderBy = {
  'DEF': (arr) => [...arr],
  'ASC': (arr) => [...arr].sort((a,b)=> a.title.localeCompare(b.title)),
  'DESC': (arr) => [...arr].sort((a,b)=> b.title.localeCompare(a.title))
};
/**
 * storage for actual sorting and searching parameters. Set 'DEF' as default value for order
 */
const stateStorage = {
  order: Object.keys(orderBy).shift(),
  data: null
};
