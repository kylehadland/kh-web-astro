export default function ContactForm() {
  return (
    <form onSubmit={submit} className='flex flex-col'>
      <label className='flex flex-col mb-2'>
        Name
        <input
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          type='text'
          id='name'
          name='name'
          required
        />
      </label>
      <label className='flex flex-col mb-2'>
        Email
        <input
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          type='email'
          id='email'
          name='email'
          required
        />
      </label>
      <label className='flex flex-col mb-2'>
        Message
        <textarea
          className='rounded-lg bg-white border py-1 px-2 hover:border-red-400 focus:outline-none focus:border-red-400'
          id='message'
          name='message'
          required
        />
      </label>
      <button
        className='p-2 rounded-md w-full my-2 bg-gray-400 hover:bg-gray-500 text-white'
        type='submit'
        disabled={isSending ? true : false}
      >
        <span className={isSending ? "animate-pulse" : ""}>
          {isSending ? "Sending..." : "Send Message"}
        </span>
      </button>
      <p className='m-2'>{responseMessage}</p>
    </form>
  )
}
