import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Footer(){
return(
    <div className="bg-slate-900 h-80 mt-6 text-white">
        <Button className="min-h-20 min-w-36 m-4 bg-cesi-jaune bg-cover bg-center "></Button>
        <div className='flex items-stretch justify-center space-x-10 mt-0 '>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Programmes</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <Link to="/Bac2">Bac +2</Link>
                    <p>Bac +3</p>
                    <p>Bac +5</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4' >
                <p className='text-xl'>Domaines</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <p>Développement</p>
                    <p>Maintenance et Réseaux</p>
                    <p>Rh & Management</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Admissions</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <p>Programmes grandes écoles</p>
                    <p>Niveau recommandé</p>
                    <p>Reconnaissance</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Campus</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <p>Ile-de-France</p>
                    <p>Grand-Est</p>
                    <p>Sud-Est</p>
                    <p>Ouest</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Espace Intervenants</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <p>Inscription</p>
                    <p>Connexion</p>
                </div>
            </div>
        </div>
        <div className='flex items-stretch justify-around mt-8'>
            <p>Accessibilité</p>
            <p>CGU</p>
            <p>Données personnelles</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
            <p>Cookies</p>
        </div>
    </div>
)
};