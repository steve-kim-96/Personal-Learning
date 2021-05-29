import { UsernamePasswordInput } from "./UsernamePasswordInput"

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email"
      }
    ]
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Length must be greater than 2"
      }
    ]
  }


  if (options.username.includes('@')) {
    return [
      {
        field: "username",
        message: "Cannot include '@' in a username"
      }
    ]
  }

  if (options.password.length <= 3) {
    return [
      {
        field: "password",
        message: "Length must be greater than 3"
      }
    ]
  }
  return null
}