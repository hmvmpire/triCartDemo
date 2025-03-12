import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Contactform = () => {
    return (
        <div className="bg-zinc-100 px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
            <h1 className="fw_600 text-xl text-black tracking-wider">Send a Message</h1>
            <input type="text" placeholder="Name*" className="bg-white fw_400 py-4 mt-8 w-full text-sm px-3 outline-none shadow-none border-none" />
            <input type="email" placeholder="E-mail*" className="bg-white fw_400 py-4 mt-5 w-full text-sm px-3 outline-none shadow-none border-none" />
            <input type="number" placeholder="Phone*" className="bg-white fw_400 py-4 mt-5 w-full text-sm px-3 outline-none shadow-none border-none" />
            <textarea rows={5} placeholder="Message" className="bg-white fw_400 py-4 mt-5 w-full text-sm px-3 outline-none shadow-none border-none" ></textarea>
            <button className="flex items-center gap-x-3 justify-between bg-black hover:bg-zinc-800 duration-300 uppercase text-xs outline-none w-52 px-5 py-4 mt-8 text-white fw_600">
                Send Message
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}