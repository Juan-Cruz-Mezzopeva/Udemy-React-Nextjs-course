import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../components/CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    
      <Section id="core-concepts" title={"Core Concepts"}>
                <h2></h2>
                <ul>
                  {CORE_CONCEPTS.map((CoreConceptItem) => (
                    <CoreConcept{...CoreConceptItem}  />
                  ))}
                </ul>
              </Section>
  )
}