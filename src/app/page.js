import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card/card";

const ME = {
  name: "Ryan Walter",
  position: "Senior Software Engineer",
  description:
    "Experienced Senior Front-End Engineer with over 8 years of expertise in developing customer-facing web applications and e-commerce platforms. Highly capable in React.js, with a proven ability to lead technical teams, mentor junior developers, and ensure high code quality.",
  avatarUrl: "https://avatars.githubusercontent.com/u/109514166?v=4",
  links: [
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/walter-ryan/",
    },
    {
      label: "GitHub",
      icon: "github",
      url: "https://github.com/ryanwCodes",
    },
    {
      label: "Resume",
      icon: "file-earmark-arrow-down",
      url: "/files/RyanWalterResume.pdf",
    },
  ],
};

export default function Home() {
  const { name, position, description, links, avatarUrl } = ME;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card
          name={name}
          position={position}
          description={description}
          links={links}
          avatarUrl={avatarUrl}
        />
      </main>
    </div>
  );
}
