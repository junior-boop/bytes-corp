export default function Testimony({ delay } : { delay : string}){
    return(
        <div data-aos="fade-up" data-aos-delay= {delay} className="px-10 py-10 relative p-6 bg-skyblue rounded-xl text-white h-full">
            <div className="mb-3">
                <h1 className="font-bold text-2xl">Daniel Seppo Eke</h1>
                <span className="text-xl">GeniusOfDigital</span>
            </div>
            <p>
            Je tiens à exprimer ma reconnaissance pour le travail accompli avec professionnalisme et rigueur. Chaque étape a été réalisée avec soin, respectant les délais et les exigences fixées.
            Votre capacité à gérer les tâches de manière efficace, à fournir des résultats de qualité et à maintenir une communication claire tout au long du processus a été particulièrement appréciée.
            Je recommande vivement votre travail et je n’hésiterai pas à solliciter vos services à l’avenir.
            </p>
        </div>
    )
}