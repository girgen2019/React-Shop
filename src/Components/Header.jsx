import imageGitHub from './img/GithubNegative.svg'

function Header () {
    return(
        <nav className="green darken-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React shop</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down padding:0">
            <li><a href="https://github.com/girgen2019"
            style={{
              margin:"10px",
              height:"48px",
              width:"48px",
              }}
             ><img src={imageGitHub}
             /></a></li>
          </ul>
        </div>
      </nav>
    )
    
}

export {Header}
