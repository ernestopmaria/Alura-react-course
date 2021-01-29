import db from '../../db.json';

export default (request, response) => {
  response.josn(db);
};
