declare namespace User {
  type LF = LoginForm

  interface LoginForm {
    username: string,
    password: string
  }
}

export = User;
export as namespace User; // 用于UMD module 可以全局引用 User.LF
