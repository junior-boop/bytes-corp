import { useRef, useState, type HTMLInputTypeAttribute } from "react"

const teste: FormItems[] = [
    {
        title: "1)     Quel est le service qui vous intéresse ?",
        data: [
            {
                label: "Developpement d'application Web ou Mobile",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Developpement de site vitrine",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Formation",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Maintenance",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Conseil en Informatique",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Cybersecurité",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Community Management",
                type: 'checkbox',
                name: 'kind_of_service'
            },
            {
                label: "Autres",
                type: 'autre',
                name: 'kind_of_service'
            },
        ]
    },
    {
        title: "2) Dites nous en detail comment vous souhaitez que nous vous aidions",
        data: [
            {
                type: 'textarea',
                placeholder: 'Type here',
                name: 'purpose_website'
            }
        ]
    },
    {
        title: "3) Avez-vous des informations supplémentaires?",
        data: [
            {
                type: "textarea",
                name: 'target_website',
                placeholder: 'Type here'
            }
        ]
    },
    

]

export default function OrderPage() {

    const formAction = async (e, formData: FormData) => {

        e.preventDefault()
        const formulaire = {
            name: formData.get('name'),
            email: formData.get('email'),
            country: formData.get('country'),
            company: formData.get('company'),
            kind_of_website: formData.getAll('kind_of_service'),
            purpose_website: formData.get('purpose_website'),
            target_website: formData.get('target_website')
        }


        const response = await fetch('../order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formulaire})
        })

        if (response.ok) {
            alert('Votre message a ete envoyer avec succes')
        } else {        
            alert('Une erreur est survenue lors de l\'envoie du message')   
        }

    }

    return (
        <>
            <main>
               
                <section>
                    <div className="container lg:max-w-[1080px] mx-auto" >

                        <form onSubmit={(e) => formAction(e, new FormData(e.currentTarget))} >
                            <div className="pt-32 pb-9 lg:pt-20 lg:pb-32">
                                <div className="px-0 lg:px-9 flex flex-col gap-4">
                                    <Input name="name" label="Votre nom" placeholder="Tout votre Nom" type="text" required />
                                    <Input name="email" label="Email" placeholder="votre email" type="email" required />
                                    <Input name="country" label="Pays" placeholder="votre Pays" type="text" required />
                                    <Input name="company" label="Entreprise (optionel)" placeholder="Votre entreprise" type="text" />
                                </div>
                            </div>
                            <div>
                                {
                                    teste.map((el, key) => <FormItems title={el.title} data={el.data} key={key} />)
                                }
                            </div>
                            <div className=" px-0 lg:px-0 pb-9 lg:pb-6 lg:pt-6 ">
                                <button className="w-full lg:w-[300px] h-[50px] bg-skyblue text-white font-bold text-lg lg:text-xl rounded-xl" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

interface Input {
    label: string,
    name: string,
    placeholder?: string,
    type: HTMLInputTypeAttribute | 'textarea',
    required?: boolean

}

export function Input({ label, name, placeholder, type, required = false }: Input) {
    return (
        <div className="flex gap-1 lg:gap-4 items-start flex-col flex-grow lg:flex-row">
            <label className="w-[300px] font-bold text-[18px] lg:text-[24px] lg:pt-2 text-gray-800" htmlFor={name}>{label}</label>
            {
                type === 'textarea'
                    ? <textarea className="rounded-xl flex-1 border p-4 w-full  font-medium h-[250px] focus:bg-slate-100 outline-none text-base lg:text-xl text-gray-800 border-skyblue" name={name} placeholder={placeholder} required={required} />
                    : <input className="rounded-xl flex-1 border px-4 py-2 lg:py-0 w-full font-medium text-base lg:text-xl  lg:h-[50px] focus:bg-slate-100 outline-none text-gray-800 border-skyblue" name={name} type={type} placeholder={placeholder} required={required} />
            }
        </div>
    )
}

type type = 'description' | 'autre' | 'textarea' | HTMLInputTypeAttribute;

export interface DynamicInput {
    label?: string,
    name?: string,
    placeholder?: string,
    type: type;
    required?: boolean
}

function DynamicInput({ label, name, placeholder, type, required }: DynamicInput) {

    switch (type) {
        case "checkbox":
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input type={type} className=" w-[16px] lg:w-[20px] aspect-square absolute left-0 lg:left-[7px] border bg-slate-300text-gray-800" value={label} name={name} />
                    <label htmlFor={name} className="text-base lg:text-xl text-gray-800">{label}</label>
                </div>
            )
        case "radio":
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input type={type} className=" w-[16px] lg:w-[20px] aspect-square absolute left-[7px] border bg-slate-300 text-gray-800" name={name} value={label} />
                    <label htmlFor={name} className="text-base lg:text-xl text-gray-800">{label}</label>
                </div>
            )
        case "autre":
            return <FormItems_Autre name={name} label={label} placeholder={placeholder} type="checkbox" />
        case "textarea":
            return (
                <div className="flex items-center relative px-0 lg:px-[55px] my-4">
                    <textarea className=" w-full lg:w-[92%] h flex-1 border p-4 font-medium text-base lg:text-xl h-[200px] focus:bg-slate-100 outline-none text-gray-800" placeholder={placeholder} name={name} ></textarea>
                </div>
            )
        case 'text':
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input name={name} type="text" className="flex-1 border px-4 font-medium text-base lg:text-xl h-[50px] focus:bg-slate-100 outline-none w-[90%] text-gray-800" placeholder={placeholder} />
                </div>
            )
        case 'description':
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <div className="w-[100%]  italic text-gray-800">{placeholder}</div>
                </div>
            )
    }
}

interface FormItems {
    title: string,
    data: DynamicInput[]
}



function FormItems({ data, title }: FormItems) {

    return (
        <div className="px-4 lg:px-9 border border-[#003A74] py-4 lg:py-9 mb-6 bg-white transition-all ease-in-out duration-300 rounded-xl">
            <div className="font-bold text-lg lg:text-2xl text-gray-800" dangerouslySetInnerHTML={{ __html: title }}></div>
            {
                data.map((el, key) => <DynamicInput label={el.label} type={el.type} name={el.name} placeholder={el.placeholder} required={el.required} key={key} />)
            }
        </div>
    )
}

export function FormItems_Autre({ label, name, placeholder }: DynamicInput) {
    const [ischecked, setchecker] = useState(false)
    const inputRef = useRef<any>()

    const handleCheck = (evt: React.FormEvent<HTMLInputElement>): void => {
        setchecker(inputRef.current.checked)
    }

    return (
        <div className=" my-4">
            <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                <input ref={inputRef} onChange={handleCheck} type="checkbox" className=" w-[16px] lg:w-[20px] aspect-square absolute left-0 lg:left-[7px] border bg-slate-300 text-gray-800" />
                <label htmlFor={name} className="text-base lg:text-xl text-gray-800">{label}</label>
            </div>
            {ischecked && <input name={name} type="text" className="flex-1 border px-4 font-medium text-base lg:text-xl h-[50px] focus:bg-slate-100 outline-none ml-0 lg:ml-[55px] w-full lg:w-[90%] text-gray-800" placeholder={placeholder} />}
        </div>
    )
}