import { useState } from "react";

function Contact() {
  const[Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    //Finish this submit form and connect it to Google sheets
    e.preventDefault();
    if ( !Name.trim() || !Email.trim() || !Messages.trim() ){
      alert("Please fill all the forms");
      return;
    }

    setLoading(true);
    const data = { name: Name, email: Email, messages: Messages };
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyQKpYe-pGzfehKiTn_qa0QG0BfraL_R1GZzfTcLZDBGe1EY2goi_CPaB5ZdOehX6z8nw/exec", {
                   method: "POST",
                   mode: "no-cors",
                   headers: { "Content-Type": "application/json" },
                   body: JSON.stringify(data),
                 });

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessages("");

    } catch (e) {
      console.log(e);
      alert(`
Failed to send message.

Error: ${e}

Please try again later.
`)
    } finally {
      setLoading(false);
    }
  }


    return ( <div className="mt-8 ml-4 mr-4 pb-8 pl-4 pr-4 shadow-xl/30 shadow-black bg-[#b1a8a8] rounded-2xl text-center max-w-4xl mx-auto px-4">
               <h2 className="mt-8 text-center font-extrabold text-2xl m-4">Contact Me</h2>
               <p className="text-lg">Fill out the form below to send your feedback, complaint, or inquiry.</p>
               <form onSubmit={e => submitForm(e)} className="mt-4 border-black border-solid border-4 rounded-3xl pt-8 pb-8 flex flex-col items-center justify-center">
                <div className="mb-4 flex flex-wrap justify-center">
                  <label htmlFor="fullName">Full Name: </label>
                  <input
                    id="fullName"
                    placeholder="Please input your Full Name"
                    type="text"
                    required
                    value={Name}
                    onChange={e => setName(e.target.value)}
                    className="pl-2 pr-2 pt-0.5 pb-0.5 min-w-70
                             text-[#f0f0f0] bg-black border-solid
                              border-2 border-[#f0f0f0] rounded-lg
                              ml-4 mr-4 placeholder-[#969191]"
                  />
                </div>
                <div className="mb-4 flex flex-wrap justify-center">
                  <label htmlFor="email">Email: </label>
                  <input
                    id="email"
                    placeholder="example@email.com"
                    type="email"
                    required
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                    className="pl-2 pr-2 pt-0.5 pb-0.5 min-w-70
                             text-[#f0f0f0] bg-black border-solid
                              border-2 border-[#f0f0f0] rounded-lg
                              ml-4 mr-4 placeholder-[#969191]"
                  />
                </div>
                <div className="mb-4 flex flex-wrap justify-center">
                  <label htmlFor="message">Message: </label>
                  <textarea
                    id="message"
                    placeholder="Message..."
                    required
                    value={Messages}
                    onChange={e => setMessages(e.target.value)}
                    className="pl-2 pr-2 pt-0.5 pb-0.5 min-w-70
                             text-[#f0f0f0] bg-black border-solid
                              border-2 border-[#f0f0f0] rounded-lg
                              ml-4 mr-4 placeholder-[#969191]"
                    ></textarea>
                </div>

                {
                  loading? 
                     <button
                       disabled={loading}
                       type="submit"
                       className="bg-gray-600
                                  font-extrabold
                                  text-xl
                                  text-[#f0f0f0]
                                  rounded-4xl p-3
                                  cursor-pointer"
                       >Sending...</button>:
     
                     <button
                       disabled={loading}
                       type="submit"
                       className="bg-black
                                  font-extrabold
                                  text-xl
                                  text-[#f0f0f0]
                                  rounded-4xl p-3
                                  cursor-pointer"
                       >Submit</button>
                }
               </form>
             </div> );
}

export default Contact;

/* Finish the google sheets stuff for the contact stuff */