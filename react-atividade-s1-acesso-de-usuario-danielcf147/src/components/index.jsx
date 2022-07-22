const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
    return <div>
                {isLoggedIn?
                <div className="div-User">
                <p>Bem-vindo {user} (づ｡◕‿‿◕｡)づ</p>
                <button className="btnUser" onClick={(Logout)}>Logout</button>
                </div>
                :
                <div className="div-User">
                <p>Você não pode acessar essa página ¯\_(ツ)_/¯</p>
                <button className="btnUser" onClick={Login}>Login</button>
                </div>
                }
            </div>
}
export default RestrictedPage