export default function Header(props){
    return (
        <div id="cabecera">
            <img className="logo" src={process.env.PUBLIC_URL + "/logo192.png"} alt="el logo de la página" />
            <h3 className="mensaje">Bienvenido a la página de JOSE ALBERTO SANCHEZ</h3>
        </div>
    );
}