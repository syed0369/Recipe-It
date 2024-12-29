import chefLogo from "../images/chef-icon.png"

export default function Header() {
    return (
        <>
            <header>
                <img src={chefLogo} alt="Chef Logo" className="header-img" />
                <h2 className="header-text"> RecipeIt </h2>
            </header>
        </>
    );
}
