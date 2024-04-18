import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Footer(){
return(
    <div className="bg-slate-900 h-80 mt-6 text-white">
        <Button className="min-h-20 min-w-36 m-4 bg-cesi-jaune bg-cover bg-center "></Button>
        <div className='flex items-stretch justify-center space-x-10 mt-0 '>
            <div className='flex flex-col space-y-4'>
                <Link to='/formations' className='text-xl'>Programmes</Link>
                <div className='text-sm flex flex-col space-y-1'>
                    <p>Bac +2</p>
                    <p>Bac +3</p>
                    <p>Bac +5</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4' >
                <p className='text-xl'>Domaines</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <Link to=''>Développement</Link>
                    <Link to =''>Maintenance et Réseaux</Link>
                    <Link to =''>Rh & Management</Link>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Admissions</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <Link to =''>Programmes grandes écoles</Link>
                    <Link to =''>Niveau recommandé</Link>
                    <Link to =''>Reconnaissance</Link>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-xl'>Campus</p>
                <div className='text-sm flex flex-col space-y-1'>
                    <Link to =''>Ile-de-France</Link>
                    <Link to =''>Grand-Est</Link>
                    <Link to =''>Sud-Est</Link>
                    <Link to =''>Ouest</Link>
                </div>
            </div>
        </div>
        <div className='flex items-stretch justify-around mt-8'>
            <Link to =''>Accessibilité</Link>
            <Link to =''>CGU</Link>
            <Link to =''>Données personnelles</Link>
            <Link to =''>Mentions légales</Link>
            <Link to =''>Politique de confidentialité</Link>
            <Link to =''>Cookies</Link>
        </div>
    </div>
)
};