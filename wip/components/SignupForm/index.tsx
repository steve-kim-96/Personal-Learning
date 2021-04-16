import Link from 'next/link'
import { useForm } from 'react-hook-form'
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
            minLength: { value: 8, message: 'Must at least be 8 characters' },
            validate: value => {
              return [
                /[a-z]/,
                /[A-Z]/,
                /[0-9]/,
                /[^a-zA-Z0-9]/
              ].every(pattern => pattern.test(value)) || 'Must include lowercase, uppercase, number, and special characters' 
            }
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
      <div>
        <Link href='/login'>
          <a>Already have an account?</a>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
