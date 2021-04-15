import { appendErrors, useForm } from 'react-hook-form'
import React from 'react'

interface FormData {
  email: string
  password: string
  terms: boolean
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(formData => {
        console.log('form data', formData)
      })}
    >
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' {...register('email', { required: true })} />
        {errors.email && 'Email is required'}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: 'required',
            minLength: { value: 8, message: 'Must at least be 8 characters' }
          })}
        />
        {errors.password ? <div>{errors.password.message}</div> : null}
      </div>
      <div>
        <label htmlFor='terms'>You must agree to our terms</label>
        <input type='checkbox' {...register('terms', { required: true })} />
        {errors.email && 'You must agree to the terms and conditions'}
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
    </form>
  )
}

export default SignupForm
