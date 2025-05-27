type UserRegistrationProps = {
  id: string
  type: 'email' | 'text' | 'password'
  inputType: 'select' | 'input' | 'textarea'
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  name: string
  showPasswordToggle?: boolean
}

export const USER_REGISTRATION_FORM: UserRegistrationProps[] = [
  {
    id: '1',
    inputType: 'input',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    name: 'fullname',
    type: 'text',
  },
  {
    id: '2',
    inputType: 'input',
    label: 'Email Address',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
  },
  {
    id: '3',
    inputType: 'input',
    label: 'Confirm Email',
    placeholder: 'Confirm your email',
    name: 'confirmEmail',
    type: 'email',
  },
  {
    id: '4',
    inputType: 'input',
    label: 'Password',
    placeholder: 'Create a password',
    name: 'password',
    type: 'password',
    showPasswordToggle: true,
  },
  {
    id: '5',
    inputType: 'input',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    name: 'confirmPassword',
    type: 'password',
    showPasswordToggle: true,
  },
]

export const USER_LOGIN_FORM: UserRegistrationProps[] = [
  {
    id: '1',
    inputType: 'input',
    label: 'Email Address',
    placeholder: 'Enter your email',
    name: 'email',
    type: 'email',
  },
  {
    id: '2',
    inputType: 'input',
    label: 'Password',
    placeholder: 'Enter your password',
    name: 'password',
    type: 'password',
    showPasswordToggle: true,
  },
]