function Navbar(props) {

    return (
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="https://images.cooltext.com/5634882.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="150" height="130"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    )

}

export default Navbar;