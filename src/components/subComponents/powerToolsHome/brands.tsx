import { brandsData } from '@/data/brandsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Brands = () => {
    return (
        <div id="brands2" className="container1 py-8">
            <h1 className="text-2xl fw_700 text-zinc-800">Trending Brands</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 mt-14">
                {brandsData.map((item, ind) => (
                    <div key={ind + 1} className='flex flex-col gap-y-3 group cursor-default'>
                        <FontAwesomeIcon icon={item.icon} className='text-2xl text-zinc-400 group-hover:text-TOOLS_PRIMARY' />
                        <p className='text-center text-zinc-400 group-hover:text-black text-sm fw_400'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}