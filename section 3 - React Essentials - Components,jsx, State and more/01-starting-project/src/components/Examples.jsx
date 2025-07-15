import React, { useState } from "react"; // Asegúrate de importar useState
import TabButton from "./TabButton";
import { EXAMPLES } from "../data"; // Asumiendo que EXAMPLES está correctamente definido aquí
import Section from "./Section";
import Tabs from "./Tabs"; // Asegúrate de que Tabs esté importado correctamente
export default function Examples() {
  const [tabContent, setTabContent] = useState(); // O inicialízalo con una clave válida como 'components'

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  // Declara una variable para almacenar el contenido JSX
  let contentToRender;

  // Usa una estructura if/else para asignar el JSX a la variable
  if (!tabContent) {
    contentToRender = "Please click a button";
  } else {
    contentToRender = (
      <div>
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Section id="examples">
        <h2> Examples</h2>
        <Tabs
          ButtonConteiner={"menu"}
          buttons={
            <>
              <TabButton
                isSelected={tabContent === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={tabContent === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={tabContent === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={tabContent === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {contentToRender}
        </Tabs>
      </Section>
    </div>
  );
}
