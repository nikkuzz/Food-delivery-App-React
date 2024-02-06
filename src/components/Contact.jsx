import React from 'react'

const Contact = () => {
  return (
    <div>
    <h1 className='p-2 m-2 font-bold text-3xl'>Contact Us Page</h1>
    <form>
      <input className='border border-black m-4 p-4' placeholder='FirstName'/>
      <input className='border border-black m-4 p-4' placeholder='LastName'/>
      <button className='border border-black m-4 p-4 rounded-lg b'>Submit</button>
    </form>
    </div>
  )
}

export default Contact;