import { useState } from "react"

export default function MenuPhone(){
    const [open, setOpen] = useState(false)
    
    return(
        <div className="relative lg:hidden">
            <button onClick={() => setOpen(!open)} className="flex lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"/></svg>
            </button>
            {
                open && <Menu onClick = {() => setOpen(false)}/>
            }
        </div>
    )
}

function Menu ({ onClick }: { onClick : () => void }) {
    const btnMobile = "border-slate-700 border-b py-4 px-6"
    return(
        <div  className="absolute top-0 w-dvw h-dvh bg-black right-[-16px] top-[-14px] flex flex-col justify-between">
                <div>
                    <div className={`${btnMobile} flex items-center gap-4`}>
                        <button onClick={onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"/></svg>
                        </button>
                        <span> Close</span>
                    </div>
                    <nav >
                        <ul data-aos>
                            <li  className={btnMobile}><a href="/">Accueil</a></li>
                            <li  className={btnMobile}><a href="/entreprise">Entreprise</a></li>
                            <li  className={btnMobile}><a href="/travaux">Travaux</a></li>
                            <li  className={btnMobile}><a href="/formation">Formations</a></li>
                            <li  className={btnMobile}><a href="/contact">Contacts</a></li>
                        </ul> 
                    </nav>
                </div>
                <div className="flex flex-col p-4 space-y-4">
                    <div>
                        Nos reseaux sociaux
                    </div>
                <ul className="flex items-center gap-4">
					<li><a href="/x">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.599c0-.784.218-1.319 1.342-1.319h1.434V5.857a19 19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"/></svg>
					</a></li>
					<li><a href="/linkedin">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"/></svg>
					</a></li>
					<li><a href="/x">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"/></svg>
					</a></li>
				</ul>
                </div>
            </div>
    )
}