import { FormInput, SubmitButton } from '../components'
import { Form, Link } from 'react-router-dom'

const Register = () => {

  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center capitalize text-3xl font-bold'>register</h4>
        <FormInput type='text' label='username' name='username' defaultValue='secret' />
        <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />
        <FormInput type='password' label='password' name='password' />
        <div className="mt-4">
          <SubmitButton text='register' />
        </div>
        <p className="text-center">Already a member?   <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>login</Link> </p>
      </Form>
    </section>
  )
}

export default Register
