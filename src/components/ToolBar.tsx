import { Separator } from "./ui/separator"

export default function ToolBar() {
    return (
        <div className="flex flex-col w-16 bg-secondary min-h-screen min-w-60">
            <div className="flex flex-col ml-4 pt-16">
                <div className="text-lg hover:text-primary" >Accueil</div>
                <Separator className="my-4" />
                <div className="text-lg hover:text-primary">A propos</div>
                    <Separator className="my-4" />
                <div className="text-lg hover:text-primary">Actualités</div>
                    <Separator className="my-4" />
                <div className="text-lg hover:text-primary">Nous contacter</div>
                    <Separator className="my-4" />
                <div className="text-lg hover:text-primary">Politique de cookies</div>
                    <Separator className="my-4" />
                <div className="text-lg hover:text-primary">Mentions légales</div>
            </div>
        </div>
    )
    }