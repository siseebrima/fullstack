import axios from "axios";

const baseUrl = "http://10.1.1.162:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
};

const remove = (id, deleted) => {
  const request = axios.delete(`${baseUrl}/${id}`, deleted);

  return request.then((res) => res.data);
};

const personService = { getAll, create, update, remove };

export default personService;
