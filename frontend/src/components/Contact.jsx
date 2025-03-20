import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="py-12 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
    <form className="max-w-lg mx-auto bg-white p-6 shadow-xl rounded-2xl">
      <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-xl" />
      <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-xl" />
      <textarea placeholder="Message" className="w-full p-3 mb-4 border rounded-xl"></textarea>
      <button type="submit" className="bg-blue-900 cursor-pointer text-white px-6 py-2 rounded-xl">Submit</button>
    </form>
  </section>
    </>
  )
}

export default Contact