export default function SectionLearn({titre, imageUrl, description} : { titre: string, imageUrl : string, description : string }){
    return(
        <div className="flex flex-col lg:flex-row items-start gap-6 bg-turquase p-10 rounded-2xl"> 
            <div className="w-[100px] h-[100px] flex items-center justify-center">
                <img src={imageUrl} alt="logo_microsoft" />
            </div>
            <div className="flex-1">
                <div className="text-2xl lg:text-3xl font-extrabold">
                    {titre}
                </div>
                {description}
            </div>
        </div>
    )
}