import {IconType} from 'react-icons'

interface FeatureProps {
    title: string
    description: string
    icon: IconType
}

export default function Feature({title, description, icon: Icon}: FeatureProps) {
    return (
        <div className='relative h-max'>

            <div className='relative rounded-xl backdrop-blur-md p-4 bg-white/10 hover:bg-white/20 transition-all border border-white/20 shadow-md'>
            <div className='flex flex-row'>
            <Icon className='text-2xl mr-2' />
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            </div>
            <p>{description}</p>
            </div>
        </div>
    )
}