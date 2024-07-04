const Contact = () => (
    <section id="contact" className="bg-blue-100 flex items-center justify-center min-h-screen">
     <div className="text-center w-9/12"> 
     <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <address className="mb-4">
        <p>929 Springfield Rd, Lebanon, MO 65536</p>
        <p>(417) 532-4412</p>
        <p>info@visittabernacle.com</p>
      </address>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Name" required className="p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" required className="p-2 border rounded" />
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded col-span-1 md:col-span-2">Submit</button>
      </form>


     </div>
    </section>
  );
  
  export default Contact;
  