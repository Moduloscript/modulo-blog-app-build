import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Design Nomads</h1>
          <h2 className={styles.imgDesc}>Invest on Frontend Magic</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            dolores nesciunt itaque, magni sunt repellendus
            dignissimos tempore
            omnis corporis placeat quam pariatur iusto rerum, quas adipisci
            dolorum, possimus obcaecati! Veniam! Autem adipisci a dolore, animi
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            repellat officiis esse accusantium inventore dicta repellendus
            temporibus distinctio obcaecati facilis. Eius asperiores ab atque
            itaque praesentium nemo molestias hic quibusdam?
            <br />
            <br /> - Dynamic & Blazing Websites
            <br />
            <br /> - Responsive and Accesible 
            <br />
            <br /> - Framework Agnostic
          </p>
          <Button text="contact" url="contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;