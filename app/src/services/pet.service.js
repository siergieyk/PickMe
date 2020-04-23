import http from "../http-common";

class PetDataService {
  getAll() {
    return http.get("/pets");
  }

  get(id) {
    return http.get(`/pets/${id}`);
  }

  create(data) {
    return http.post("/pets", data);
  }

  update(id, data) {
    return http.put(`/pets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pets/${id}`);
  }

  deleteAll() {
    return http.delete(`/pets`);
  }

  findByTitle(title) {
    return http.get(`/pets?title=${title}`);
  }
}

export default new PetDataService();