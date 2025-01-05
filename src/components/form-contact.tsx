export default function ContactForm(){
    return(
        <div className="flex-1 lg:px-8 w-full lg:w-auto">
            <form className="px-6 lg:px-10">
                <div className="mb-4">
                    <label htmlFor="name" className="block pl-3 mb-2">Nom complet*</label>
                    <input type="text" name = "name" id = "name" required className="w-full px-3 py-2 border rounded-xl text-lg bg-turquase"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block pl-3 mb-2">Adresse Email*</label>
                    <input type="email" name = "email" id = "email" required className="w-full px-3 py-2 border rounded-xl text-lg bg-turquase"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block pl-3 mb-2">Message*</label>
                    <textarea  name = "email" id = "email" required className="w-full h-[200px] px-3 py-2 border rounded-xl text-lg bg-turquase "/>
                </div>
                <button type="submit" className="w-full bg-[#42CDFF] py-4 flex items-center justify-center rounded-full font-bold text-white">Envoyer</button>
            </form>
        </div>
    )
}