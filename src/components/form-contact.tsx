const KEY = "60e0fe4c624eb45f8b9f21549c9fe65f:1405ce033c224374af5d13f3ca8b5602"

export default function ContactForm(){
    const handlesubmit = async (e) => {
        e.preventDefault()
        const send = await fetch('https://api.mailjet.com/v3.1/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Baerer 60e0fe4c624eb45f8b9f21549c9fe65f:1405ce033c224374af5d13f3ca8b5602' 
            },
            body: JSON.stringify({
                'Messages': [
                    {
                        'From': {
                            'Email': 'bytescorp24@gmail.com',
                            'Name': 'Bytes-Corp'
                        },
                        'To': [
                            {
                                'Email': 'supportit@bytes-corp.com',
                                'Name': 'passenger 1'
                            }
                        ],
                        'Subject': 'Your email flight plan!',
                        'TextPart': 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
                        'HTMLPart': 'Dear passenger 1, welcome to Mailjet!May the delivery force be with you!'
                    }
                ]
            })
        });

        if(send.ok){
            alert('Votre message a ete envoyer avec succes')
        }
    }
    return(
        <div className="flex-1 lg:px-8 w-full lg:w-auto">
            <form onSubmit={handlesubmit} className="px-6 lg:px-10">
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