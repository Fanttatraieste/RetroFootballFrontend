import Hero from "./Hero/Hero";
import StandardGrid from "./StandardGrid/StandardGrid";
import StandardText from "./StandardText/StandardText";
import Started from "./Started/Started";

function About() {
  return (
    <div>
      <Hero />
      <Started />
      <StandardText />
      <StandardGrid />
    </div>
  );
}

export default About;
