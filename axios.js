import axios from "axios";

/** base url to make request to the themoviedatabase */
// instance create

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar
// axios인스턴스 내보냅니다
export default instance;
