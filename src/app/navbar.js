import Link from 'next/link';


export default function Navbar() {

    const links = [
        {
            "title": "Accueil",
            "path": "/"
        },
        // {
        //     "title": "Météo",
        //     "path": "/Weather"
        // },
        // {
        //     "title": "Activités",
        //     "path": "/Activity"
        // },
        {
            "title": "Statistiques",
            "path": "/Statistic"
        },
        // {
        //     "title": "Organisation",
        //     "path": "/Organization"
        // },
    ]

    return(
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <ul className="flex justify-center space-x-4 py-4">
                    {links.map((el,i)=>(
                        <li key={i}>
                            <Link legacyBehavior href={el.path}>
                                <a className="text-slate-700 text-3xl font-medium hover:text-slate-500">{el.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}