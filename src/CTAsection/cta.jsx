function CTA() {
    const myLink = "http://localhost:5173/"
    const shareText = encodeURIComponent(`🎓 Hey! Check out Unifinder — it helps you find Nigerian universities that accept your JAMB score for your course. Visit: ${myLink}`);
    const whatsappLink = `https://wa.me/?text=${shareText}`;

    function copyText() {
        navigator.clipboard.writeText(`${myLink}`);
        alert("Link copied! Share it with your friends 🚀")
    }

    return ( <section className="shadow-xl shadow-gray-500 p-4 max-w-180 rounded-2xl ml-2 mr-2 mt-4 mb-4 text-center bg-[#b1a8a8]">
                 <h2
                 className="font-extrabold text-xl mb-2">Know someone struggling with JAMB admissions?</h2>
                 <p
                 className="text-lg mb-4">Help them discover their right university options — share Unifinder with them!</p>

                 <div className="flex flex-col justify-center items-center gap-3">
                    <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share Unifinder on WhatsApp"
                    className="shadow-gray-500 flex gap-4 items-center justify-center shadow-lg bg-black hover:bg-[#504949] text-white p-2 rounded-full cursor-pointer mb-2 text-lg">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                          alt="WhatsApp" 
                          style={{ width: '40px', height: '40px' }} 
                        />Share on WhatsApp</a>

                    <button
                    onClick={copyText}
                    className="shadow-gray-500 flex items-center justify-center gap-4 shadow-lg bg-black hover:bg-[#504949] text-white p-2 rounded-full cursor-pointer mb-2 text-lg"
                    >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                         </svg>

                        Copy Link</button>
                 </div>
             </section> );
}

export default CTA;