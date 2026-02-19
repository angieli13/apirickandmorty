const Header = () => {
    const view = `
    <div class="Header-main">
    <a href="/">
        <img src="/logo.png" alt="Rick and Morty Logo" class="Header-logo">
    </a>
        <div class="Header-title">
            <a href="/"><h1>by Angie Cómbita</h1></a>          
        </div>
    </div>

        <div class="Header-nav">
            <a href="#/about/">
            </a>
        </div>
    </div>
    `
    return view;
}

export default Header;