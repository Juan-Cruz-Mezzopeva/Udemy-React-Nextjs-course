import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {

  const [tabContent, setTabContent] = useState("Please click a button")
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setTabContent(selectedButton  )
  }

  return (
    <div>
       
      <main>
        <Header />
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title}
                       image={CORE_CONCEPTS[0].image}
                       description={CORE_CONCEPTS[0].description}
                       />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id='examples'>
          <h2> Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('statez')}>State</TabButton>

          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;