import { Link } from 'wouter';

import LeftArrow from "../assets/shared/desktop/arrow-circle-left-svgrepo-com.svg";
import "../App.css"

function GoBackButton(props) {

    return (
        <>
            <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                <Link to={props.backLink}>
                    <div className="flex items-center group">
                        <div className="inline group custom-dark-orange-filter-v2">
                            <img src={LeftArrow} className="h-5 mr-2 transition duration-300 ease-in-out transform group-hover:-translate-x-1" />
                        </div>
                        <span className="text-black font-bold transition duration-300 ease-in-out cursor-pointer group-hover:text-theme-dark-orange">
                            Go Back
                        </span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default GoBackButton;