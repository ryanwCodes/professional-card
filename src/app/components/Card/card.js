import styles from "./card.module.css";

export default function Card({ name, position, description, links }) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
        <div>
          {links.map(() => (
            <a>Hello World</a>
          ))}
        </div>
      </div>
      <div>
        <a>LInk</a>
      </div>
    </div>
  );
}
