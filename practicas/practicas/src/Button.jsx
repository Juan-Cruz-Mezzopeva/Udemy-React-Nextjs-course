import React from 'react'; // Asegúrate de importar React si tu entorno lo requiere para useState, aunque aquí no se usa useState.

// El componente Button acepta varias props:
// - children: El contenido del botón (texto, etc.)
// - mode: Define el estilo del botón ('filled', 'outline', 'text'). Por defecto es 'filled'.
// - Icon: Un componente de icono opcional que se renderizará junto al texto.
// - ...props: Captura todas las demás props estándar de un botón HTML (onClick, disabled, type, etc.)
export default function Button({ children, mode = 'filled', Icon, ...props }) {
  // Construye las clases CSS dinámicamente.
  // Todos los botones tienen la clase 'button'.
  // Luego, se añade la clase de modo (ej. 'filled-button', 'outline-button', 'text-button').
  // Si hay un icono, se añade la clase 'icon-button'.
  const cssClasses = `button ${mode}-button ${Icon ? 'icon-button' : ''}`;

  return (
    // El botón HTML nativo es el elemento raíz.
    // Se le aplican las clases CSS construidas y todas las props restantes.
    <button className={cssClasses} {...props}>
      {/* Si se proporciona un componente Icono, se renderiza dentro de un span con la clase "button-icon" */}
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      {/* El contenido (children) del botón se envuelve en un span */}
      <span>{children}</span>
    </button>
  );
}

