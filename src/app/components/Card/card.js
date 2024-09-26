import styles from "./card.module.css";

export default function Card({
  name,
  position,
  description,
  links,
  avatarUrl,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
        <div className={styles.ctas}>
          {links.map(({ label, icon, url }) => (
            <a href={url} key={label}>
              {/* <span>{label}</span> */}
              <i class={`bi bi-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <img src={avatarUrl} alt="Profile Avatar" />
      </div>
    </div>
  );
}
