import Image from "next/image"
import { CompHeading2 } from "../../shared/CompHeading2"
import blog1 from '../../../static/blog1.jpg'
import blog2 from '../../../static/blog2.jpg'
import blog3 from '../../../static/blog3.jpg'
import blog4 from '../../../static/blog4.jpg'
import blog5 from '../../../static/blog5.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export const FromInstagram = () => {
    return (
        <div className="container1">
            <CompHeading2 title="From Instagram" rightContent={null} />
            <div className="mt-4 grid grid-cols-5 gap-x-1">
                <div className="rounded-lg overflow-hidden h-72 relative group">
                    <div className="h-full w-full text-ELECTRONICS_PRIMARY-HOVER text-6xl absolute group-hover:left-0 -left-full bg-black bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <Image src={blog1} alt="blog1" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-72 relative group">
                    <div className="h-full w-full text-ELECTRONICS_PRIMARY-HOVER text-6xl absolute group-hover:left-0 -left-full bg-black bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <Image src={blog2} alt="blog2" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-72 relative group">
                    <div className="h-full w-full text-ELECTRONICS_PRIMARY-HOVER text-6xl absolute group-hover:left-0 -left-full bg-black bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <Image src={blog3} alt="blog3" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-72 relative group">
                    <div className="h-full w-full text-ELECTRONICS_PRIMARY-HOVER text-6xl absolute group-hover:left-0 -left-full bg-black bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <Image src={blog4} alt="blog4" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-72 relative group">
                    <div className="h-full w-full text-ELECTRONICS_PRIMARY-HOVER text-6xl absolute group-hover:left-0 -left-full bg-black bg-opacity-50 z-30 duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <Image src={blog5} alt="blog5" className="h-full w-full object-cover" />
                </div>
            </div>

        </div>
    )
}