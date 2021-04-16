import Link from 'next/link'
import { useForm } from 'react-hook-form'
import React from 'react'

interface FormData {
  email: string
  password: string
}

function LoginForm() {
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
            required: 'required'
          })}
        />
        {errors.password ? <div>{errors.password.message}</div> : null}
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
      <div>
        <Link href='/signup'>
          <a>Don't have an account?</a>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
