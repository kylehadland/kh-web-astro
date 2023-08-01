import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgejovel")

  if (state.errors.length > 0) {
    console.log(state.errors)
  }

  if (state.succeeded) {
    return <p className=''>Thankyou for your message.</p>
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label for='name' className='flex flex-col mb-2'>
        Name
        <input
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          type='text'
          id='name'
          name='name'
          required
        />
      </label>
      <label for='email' className='flex flex-col mb-2'>
        Email
        <input
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          type='email'
          id='email'
          name='email'
          required
        />
      </label>
      <label for='message' className='flex flex-col mb-2'>
        Message
        <textarea
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          id='message'
          name='message'
          required
        />
      </label>
      <button
        className='p-2 rounded-md w-full my-2 bg-gray-500 hover:bg-gray-600 text-white'
        type='submit'
        disabled={state.submitting}
      >
        <span className={state.submitting ? "animate-pulse" : ""}>
          {state.submitting ? "Sending..." : "Send Message"}
        </span>
      </button>
      {state.errors.length > 0 && (
        <p className='m-2 text-red-500'>
          Error submitting message, please try again.
        </p>
      )}
    </form>
  )
}
