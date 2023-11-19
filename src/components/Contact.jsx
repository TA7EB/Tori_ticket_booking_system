import React from 'react'

const Contact=()=>{
    return(
        <section className="p-6 dark:text-gray-100">
	<form novalidate="" className="container w-[60%]  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
		<h2 className="w-full text-3xl font-bold leadi">Contact us</h2>
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-green-600 focus:ri hover:ri text-gray-900">Send</button>
		</div>
	</form>
</section>

        
        
        
        
        
        )
}
export default Contact;