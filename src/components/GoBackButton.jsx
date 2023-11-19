import { Link } from 'wouter';

function GoBackButton(props) {

    return (
        <>
            <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                <Link to={props.backLink}>
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </Link>
            </div>
        </>
    );
};

export default GoBackButton;