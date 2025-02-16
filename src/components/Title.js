import TitleImage from "../assets/TitleImage.png";

function Title() {
    return (
        <div className="flex relative items-top justify-center scale-350 top-40" >
            <img 
                src={TitleImage} 
                alt="Title" 
                class="z-10"
            />
        </div>
    );
}

export default Title;
