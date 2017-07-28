@home
@mandatory

Feature: Pagina Home
    AS usuario anonimo
    I WANT poder visualiza la pagina principal o Home de la web
    IN ORDER TO poder navegar por todos los menus principales

    Background: Visualizo correctamente la home
    #Given Accedo a la Home en "https://codents.github.io/web"
    Given Accedo a la Home en "http://localhost/home/malfaros/Desarrollos/Personal/web/build/web/"
    @menus
    Scenario Outline: Accedo a los menus principales
        When Hago click en el menu <class>
        Then Estoy en la seccion <menu>

    Examples:
        | menu     | class         |
        | ABOUT    | .about-menu   |
        #| WORKS    | .work-menu    |
        #| CONTACT  | .contact-menu |
        #| SIGNIN   | .signin-menu  |

    #@icons
    #Scenario Outline: Acceso a los iconos del menu principal
#        When Hago click en el icono de <icono>
        #Then Estoy en pagina del proyecto en <icono>

    #Examples:
#        | icono        |
#        | .github-icon |
