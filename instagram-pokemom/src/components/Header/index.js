import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

export function Header(){

return(

    <header className="header">
        <div className="container">

        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Logo/imagem do instagram" />

        <div className="input-fake">
                    
                        <AiOutlineSearch />
                        <AiFillHome />
                        <RiMessengerLine />
                        <BsPlusSquare />
                        <MdOutlineExplore />
                        <FiHeart />
                   
                    
                    <input placeholder="pesquisar" />
                </div>


        </div>


    </header>
)

}