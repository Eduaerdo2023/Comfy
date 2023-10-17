import { FormInput, SubmitButton } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {

  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center capitalize text-3xl font-bold'>login</h4>
        <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />
        <FormInput type='password' label='password' name='password' defaultValue='secret' />
        <div className="mt-4">
          <SubmitButton text='login' />
        </div>
        <button className='btn btn-secondary btn-block'>guest user</button>
        <p className="text-center">Not a member yet?   <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>register</Link> </p>
      </Form>
    </section>
  )
}

export default Login