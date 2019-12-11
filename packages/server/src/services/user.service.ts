import { users } from "../data";

class UserService {
  constructor() {}

  getUser(username) {
    return users.find(user => user.username === username);
  }
}

export default UserService;
