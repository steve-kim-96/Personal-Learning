import Link from 'next/link'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

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

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [serverErrors, setServerErrors] = useState<Array<string>>()
  return (
    <>
      <form
        onSubmit={handleSubmit(async formData => {
          setSubmitting(true)
          setServerErrors([])
          console.log('form data', formData)

          const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
              terms: formData.terms,
            }),
          })

          const data = await response.json()

          if (data.errors) {
            setServerErrors(data.errors)
          }
          setSubmitting(false)
        })}
      >
        {serverErrors && (
          <ul>
            {serverErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
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
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern =>
                    pattern.test(value)
                  ) ||
                  'Must include lowercase, uppercase, number, and special characters'
                )
              },
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
          <button type='submit' disabled={submitting}>
            Register
          </button>
        </div>
        <div>
          <Link href='/login'>
            <a>Already have an account?</a>
          </Link>
        </div>
      </form>
      <div>
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </div>
    </>
  )
}

export default SignupForm
