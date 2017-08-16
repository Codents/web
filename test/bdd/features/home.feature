@home
@mandatory

Feature: Pagina Home
    AS usuario anonimo
    I WANT poder visualiza la pagina principal o Home de la web
    IN ORDER TO poder navegar por todos los menus principales

    @menus
    Scenario Outline: Accedo a los menus principales
        Given Accedo a la Home en <host>
        When Hago click en el menu <class>
        Then Estoy en la seccion <menu>

    @local
    Examples:
        | menu     | class         | host                    |
        | ABOUT    | .about-menu   | http://localhost:3000   |
        | WORKS    | .work-menu    | http://localhost:3000   |
        | CONTACT  | .contact-menu | http://localhost:3000   |
        | SIGNIN   | .signin-menu  | http://localhost:3000   |

    @release
    Examples:
        | menu     | class         | host                            |
        | ABOUT    | .about-menu   | https://codents.github.io/web   |
        | WORKS    | .work-menu    | https://codents.github.io/web   |
        | CONTACT  | .contact-menu | https://codents.github.io/web   |
        | SIGNIN   | .signin-menu  | https://codents.github.io/web   |

    @icons
    Scenario Outline: Acceso a los iconos del menu principal
        Given Accedo a la Home en <host>
        When Hago click en el icono de <icono>
        Then Estoy en pagina del proyecto en "https://github.com/Codents/web" y cliqueo en el icono con clase <icono>

    @local
    Examples:
        | icono        | host                    |
        | .github-icon | http://localhost:3000   |

    @release
    Examples:
        | icono        | host                            |
        | .github-icon | https://codents.github.io/web   |
